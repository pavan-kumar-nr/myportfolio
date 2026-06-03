"use client";

import { useEffect, useState } from "react";

export default function ResumeButton() {

  const [show, setShow] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (
    <>
      {show && (
        <a
          href="/resume.pdf"
          download
          className="fixed bottom-8 right-8 bg-cyan-500 hover:bg-cyan-600 px-6 py-4 rounded-full shadow-2xl z-50"
        >
          Resume
        </a>
      )}
    </>
  );
}