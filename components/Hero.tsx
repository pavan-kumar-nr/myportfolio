"use client";

import Image from "next/image";
import PortalTabs from "./PortalTabs";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [compactDescription, setCompactDescription] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setCompactDescription(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const descriptionLines = [
    "Driving Digital Transformation with Microsoft Dynamics 365 & Power Platform",
    "I specialize in building enterprise-grade CRM solutions that streamline operations, automate complex business processes,",
    "and deliver exceptional user experiences.",
    "From Dynamics 365 custom development and Power Pages implementations to enterprise integrations and DevOps-driven deployments,",
    "I help organizations modernize their platforms with secure, scalable, and future-ready solutions.",
    "",
    "Core Technologies: Dynamics 365 CE | Power Platform | Power Pages | Dataverse | Power Automate",
    "C# | JavaScript | Azure | SharePoint | REST APIs | ALM | CI/CD",
  ];

  return (
    <section className="min-h-screen relative overflow-hidden grid-bg px-6 py-16">
      <div className="hero-bg"></div>

      {/* Resume Button */}

      <div className="absolute top-6 right-50 z-50">
        <a
          href="/resume.pdf"
          download
          className="
            inline-flex
            items-center
            justify-center
            bg-linear-to-r
            from-cyan-500
            to-purple-600
            hover:from-cyan-400
            hover:to-purple-500
            hover:scale-105
            transition-all
            duration-300
            px-7
            py-4
            rounded-2xl
            text-white
            font-semibold
            shadow-2xl
            shadow-cyan-500/30
            backdrop-blur-xl
          "
        >
          Download Resume
        </a>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center text-center"
        >
          {/* PROFILE IMAGE */}

          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative mb-10"
          >
            <div className="absolute inset-0 rounded-full bg-cyan-500 blur-3xl opacity-30"></div>

            <Image
              src="/profile.jpg"
              alt="profile"
              width={240}
              height={240}
              className="
                rounded-full
                border-4
                border-cyan-400/50
                object-cover
                relative
                z-10
                glow
              "
            />
          </motion.div>

          {/* CERTIFICATION BADGE */}

          <div
            className="
              glass
              px-6
              py-3
              rounded-full
              text-cyan-300
              text-sm
              mb-8
              tracking-wide
            "
          >
            MICROSOFT CERTIFIED PROFESSIONAL DEVELOPER
          </div>

          {/* NAME */}

          <h1
            className="
              text-5xl
              md:text-7xl
              font-black
              mb-6
              gradient-text
              leading-tight
            "
          >
            Pavan Kumar N R
          </h1>

          {/* ROLE */}

          <h2
            className="
              text-2xl
              md:text-3xl
              text-gray-300
              font-semibold
              mb-8
            "
          >
            Dynamics 365 & Power Platform | Enterprise CRM Solutions | Power
            Pages | Integrations
          </h2>

          {/* DESCRIPTION */}

          <motion.div
            animate={{
              height: compactDescription ? 40 : "auto",
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="
              overflow-hidden
              max-w-4xl
              mb-12
            "
          >
            {compactDescription ? (
              <motion.p
                initial={false}
                animate={{
                  opacity: 1,
                }}
                className="
                  text-cyan-300
                  text-lg
                  md:text-xl
                  font-semibold
                "
              >
                Driving Digital Transformation with Microsoft Dynamics 365 & Power Platform...
              </motion.p>
            ) : (
              <div
                className="
                  text-gray-400
                  text-lg
                  md:text-xl
                  leading-10
                "
              >
                {descriptionLines.map((line, index) => (
                  <motion.p
                    key={index}
                    initial={{
                      opacity: 0,
                      y: 8,
                      filter: "blur(4px)",
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                    }}
                    transition={{
                      duration: 0.8,
                      delay: 0.25 + index * 0.15,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={
                      index === 0
                        ? "text-cyan-300 font-medium"
                        : ""
                    }
                  >
                    {line}
                  </motion.p>
                ))}
              </div>
            )}
          </motion.div>

          {/* TABS */}

          <div className="w-full">
            <div className="mt-10 w-full">
              <PortalTabs />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}