import React from "react";
export default function Resume() {
  return (
    <section id="resume" className="py-24 px-6 max-w-4xl mx-auto">

      <h2 className="text-3xl font-semibold mb-6">
        简历
      </h2>

      <p className="text-gray-600 mb-6">
        在下方下载我的简历。
      </p>

      <a
        href="/resume.pdf"
        target="_blank"
        className="inline-block bg-black text-white px-6 py-3 rounded-lg"
      >
        下载简历
      </a>

    </section>
  );
}