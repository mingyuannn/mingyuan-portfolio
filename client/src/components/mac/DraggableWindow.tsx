/*
  DraggableWindow — macOS-style floating window with traffic light buttons
  Supports drag, minimize, close, focus-on-click
*/
import React, { useRef, useEffect, useCallback } from "react";
import { AppId, useWindowManager } from "../../contexts/WindowManager";

interface Props {
  id: AppId;
  title: string;
  width?: number;
  height?: number;
  minWidth?: number;
  minHeight?: number;
  children: React.ReactNode;
  titleBarExtra?: React.ReactNode;
}

export default function DraggableWindow({
  id,
  title,
  width = 760,
  height = 520,
  minWidth = 400,
  minHeight = 300,
  children,
  titleBarExtra,
}: Props) {
  const { windows, closeWindow, minimizeWindow, maximizeWindow, focusWindow, updatePosition } = useWindowManager();
  const win = windows[id];
  const windowRef = useRef<HTMLDivElement>(null);
  const dragState = useRef<{ dragging: boolean; startX: number; startY: number; origX: number; origY: number }>({
    dragging: false, startX: 0, startY: 0, origX: 0, origY: 0,
  });

  const onMouseDownTitle = useCallback((e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest(".traffic-light")) return;
    if (win.isMaximized) return; // don't drag when maximized
    focusWindow(id);
    dragState.current = {
      dragging: true,
      startX: e.clientX,
      startY: e.clientY,
      origX: win.position.x,
      origY: win.position.y,
    };
    e.preventDefault();
  }, [focusWindow, id, win.position, win.isMaximized]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!dragState.current.dragging) return;
      const dx = e.clientX - dragState.current.startX;
      const dy = e.clientY - dragState.current.startY;
      const newX = Math.max(0, dragState.current.origX + dx);
      const newY = Math.max(36, dragState.current.origY + dy); // don't go above menubar
      updatePosition(id, { x: newX, y: newY });
    };
    const onUp = () => { dragState.current.dragging = false; };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, [id, updatePosition]);

  if (!win.isOpen || win.isMinimized) return null;

  const isMax = win.isMaximized;
  const containerStyle: React.CSSProperties = isMax
    ? {
        position: "fixed",
        left: 0,
        top: 36,
        width: "100vw",
        height: "calc(100vh - 36px)",
        zIndex: win.zIndex,
        borderRadius: 0,
        overflow: "hidden",
        boxShadow: "none",
        display: "flex",
        flexDirection: "column",
        userSelect: "none",
        transition: "all 0.22s cubic-bezier(0.4, 0, 0.2, 1)",
      }
    : {
        position: "fixed",
        left: win.position.x,
        top: win.position.y,
        width,
        height,
        minWidth,
        minHeight,
        zIndex: win.zIndex,
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "0 22px 70px rgba(0,0,0,0.35), 0 4px 16px rgba(0,0,0,0.2)",
        display: "flex",
        flexDirection: "column",
        userSelect: "none",
        transition: "all 0.22s cubic-bezier(0.4, 0, 0.2, 1)",
      };

  return (
    <div
      ref={windowRef}
      onMouseDown={() => focusWindow(id)}
      style={containerStyle}
    >
      {/* Title bar */}
      <div
        onMouseDown={onMouseDownTitle}
        onDoubleClick={() => maximizeWindow(id)}
        style={{
          height: "36px",
          background: "linear-gradient(180deg, #EBEBEB 0%, #D6D6D6 100%)",
          borderBottom: "1px solid #B8B8B8",
          display: "flex",
          alignItems: "center",
          padding: "0 12px",
          cursor: isMax ? "default" : "grab",
          flexShrink: 0,
          position: "relative",
        }}
      >
        {/* Traffic lights */}
        <div className="traffic-light" style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          {/* Close */}
          <button
            onClick={(e) => { e.stopPropagation(); closeWindow(id); }}
            style={{
              width: "12px", height: "12px", borderRadius: "50%",
              background: "#FF5F57", border: "0.5px solid #E0443E",
              cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "8px", color: "transparent",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#7D0000"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "transparent"; }}
            title="关闭"
          >✕</button>
          {/* Minimize */}
          <button
            onClick={(e) => { e.stopPropagation(); minimizeWindow(id); }}
            style={{
              width: "12px", height: "12px", borderRadius: "50%",
              background: "#FFBD2E", border: "0.5px solid #DEA123",
              cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "8px", color: "transparent",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#7D5000"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "transparent"; }}
            title="最小化"
          >−</button>
          {/* Maximize / Restore */}
          <button
            onClick={(e) => { e.stopPropagation(); maximizeWindow(id); }}
            style={{
              width: "12px", height: "12px", borderRadius: "50%",
              background: "#28C840", border: "0.5px solid #1DAD2B",
              cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "8px", color: "transparent",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#003D00"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "transparent"; }}
            title={isMax ? "还原" : "全屏"}
          >{isMax ? "⤡" : "⤢"}</button>
        </div>

        {/* Title */}
        <div style={{
          position: "absolute", left: "50%", transform: "translateX(-50%)",
          fontSize: "13px", fontWeight: 600, color: "#3A3A3A",
          fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif",
          letterSpacing: "-0.01em",
          pointerEvents: "none",
        }}>
          {title}
        </div>

        {/* Extra controls (right side) */}
        {titleBarExtra && (
          <div style={{ marginLeft: "auto" }}>
            {titleBarExtra}
          </div>
        )}
      </div>

      {/* Window content */}
      <div style={{ flex: 1, overflow: "hidden", background: "#fff" }}>
        {children}
      </div>
    </div>
  );
}
