import React from "react";
export default function Resume() {
  return (
    <section id="resume" className="py-24 px-6 max-w-4xl mx-auto">

      <h2 className="text-3xl font-semibold mb-6">
        Resume
      </h2>

      <p className="text-gray-600 mb-6">
        Download my resume below.
      </p>

      <a
        href="/resume.pdf"
        target="_blank"
        className="inline-block bg-black text-white px-6 py-3 rounded-lg"
      >
        Download Resume
      </a>

    </section>
  );
}