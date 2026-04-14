/*
  WindowManager — Global context for managing macOS-style floating windows
  Tracks open/minimized/maximized state, z-index stacking, and positions
*/
import React, { createContext, useContext, useState, useCallback } from "react";

export type AppId = "finder" | "notes" | "mail" | "preview";

export interface WindowState {
  id: AppId;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
  position: { x: number; y: number };
}

interface WindowManagerContextType {
  windows: Record<AppId, WindowState>;
  openWindow: (id: AppId) => void;
  closeWindow: (id: AppId) => void;
  minimizeWindow: (id: AppId) => void;
  maximizeWindow: (id: AppId) => void;
  focusWindow: (id: AppId) => void;
  updatePosition: (id: AppId, pos: { x: number; y: number }) => void;
  topZIndex: number;
}

const defaultPositions: Record<AppId, { x: number; y: number }> = {
  finder:  { x: 80,  y: 60  },
  notes:   { x: 160, y: 90  },
  mail:    { x: 240, y: 120 },
  preview: { x: 320, y: 80  },
};

const createDefault = (id: AppId, z: number): WindowState => ({
  id,
  isOpen: false,
  isMinimized: false,
  isMaximized: false,
  zIndex: z,
  position: defaultPositions[id],
});

const WindowManagerContext = createContext<WindowManagerContextType | null>(null);

export function WindowManagerProvider({ children }: { children: React.ReactNode }) {
  const [windows, setWindows] = useState<Record<AppId, WindowState>>({
    finder:  createDefault("finder",  10),
    notes:   createDefault("notes",   11),
    mail:    createDefault("mail",    12),
    preview: createDefault("preview", 13),
  });
  const [topZ, setTopZ] = useState(20);

  const openWindow = useCallback((id: AppId) => {
    setTopZ((z) => z + 1);
    setWindows((prev) => ({
      ...prev,
      [id]: { ...prev[id], isOpen: true, isMinimized: false, zIndex: topZ + 1 },
    }));
  }, [topZ]);

  const closeWindow = useCallback((id: AppId) => {
    setWindows((prev) => ({
      ...prev,
      [id]: { ...prev[id], isOpen: false, isMinimized: false, isMaximized: false },
    }));
  }, []);

  const minimizeWindow = useCallback((id: AppId) => {
    setWindows((prev) => ({
      ...prev,
      [id]: { ...prev[id], isMinimized: true, isMaximized: false },
    }));
  }, []);

  const maximizeWindow = useCallback((id: AppId) => {
    setWindows((prev) => ({
      ...prev,
      [id]: { ...prev[id], isMaximized: !prev[id].isMaximized },
    }));
  }, []);

  const focusWindow = useCallback((id: AppId) => {
    setTopZ((z) => z + 1);
    setWindows((prev) => ({
      ...prev,
      [id]: { ...prev[id], zIndex: topZ + 1, isMinimized: false },
    }));
  }, [topZ]);

  const updatePosition = useCallback((id: AppId, pos: { x: number; y: number }) => {
    setWindows((prev) => ({
      ...prev,
      [id]: { ...prev[id], position: pos },
    }));
  }, []);

  return (
    <WindowManagerContext.Provider
      value={{ windows, openWindow, closeWindow, minimizeWindow, maximizeWindow, focusWindow, updatePosition, topZIndex: topZ }}
    >
      {children}
    </WindowManagerContext.Provider>
  );
}

export function useWindowManager() {
  const ctx = useContext(WindowManagerContext);
  if (!ctx) throw new Error("useWindowManager must be used within WindowManagerProvider");
  return ctx;
}
