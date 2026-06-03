"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const tabs = [
  "About",
  "Experience",
  "Skills",
  "Projects",
  "Certifications",
  "Contact",
];

export default function PortalTabs() {

  const [activeTab, setActiveTab] = useState("About");

  return (
    <div className="w-full mt-16">

      {/* TAB BUTTONS */}

        <div className="
        flex
        flex-wrap
        justify-center
        gap-5
        mb-14
        ">

        {tabs.map((tab) => (

          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`
                flex
                items-center
                justify-center
                px-8
                py-4
                rounded-2xl
                border
                text-base
                md:text-lg
                font-semibold
                tracking-wide
                transition-all
                duration-300
                min-w-[200px]
                ${
                    activeTab === tab
                    ? `
                        bg-linear-to-r
                        from-yellow-400
                        to-amber-500
                        text-white
                        border-yellow-200
                        shadow-yellow-500/40
                        shadow-xl
                        scale-105
                    `
                    : `
                        bg-slate-900/60
                        text-white
                        border-white/10
                        hover:border-cyan-400
                        hover:bg-cyan-500/10
                    `
                }
            `}
          >
            {tab}
          </button>

        ))}

      </div>

      {/* CONTENT */}

<AnimatePresence mode="wait">

  <motion.div
    key={activeTab}
    initial={{ opacity: 0, y: 25 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -25 }}
    transition={{ duration: 0.35 }}
    className="
      bg-slate-950/50
      backdrop-blur-2xl
      rounded-[40px]
      p-10
      md:p-16
      min-h-[500px]
      shadow-2xl
    "
  >

        {activeTab === "About" && (
          <div>
            <h2 className="text-3xl font-bold mb-6">
              About Me
            </h2>

            <p className="text-white leading-9 text-lg">
              Microsoft certified professional with 3+ years
              of experience in Microsoft Dynamics 365,
              Power Platform, Power Pages, integrations,
              workflows and enterprise CRM development.
            </p>
          </div>
        )}

        {activeTab === "Experience" && (
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Experience
            </h2>

            <div className="space-y-8">

              <div className="border-l-4 border-cyan-400 pl-6">
                <h3 className="text-2xl font-semibold">
                  Software Engineer – CRM
                </h3>

                <p className="text-cyan-400 mb-3">
                  Kerv Digital | 2022 - Present
                </p>

                <p className="text-gray-200 leading-8">
                  Worked on DVSA enterprise transformation systems,
                  Power Pages portals, integrations and CRM solutions.
                </p>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === "Skills" && (

        <div>

            <h2 className="text-5xl font-bold text-center mb-14 text-white">
            Technical Skills
            </h2>

            <div
            className="
                bg-gradient-to-br
                from-slate-900/90
                to-slate-800/70
                border
                border-cyan-500/20
                rounded-3xl
                p-10
                text-center
                text-white
                text-2xl
                leading-[3.5rem]
                font-medium
                shadow-2xl
            "
            >

            Dynamics 365, Power Platform, Power Pages,
            Power Automate, JavaScript, TypeScript,
            Liquid JS, Plugins, Workflows,
            Web API, SharePoint, Azure Blob

            </div>

        </div>

        )}

        {activeTab === "Projects" && (
          <div>
            <h3 className="text-4xl font-bold mb-10 text-yellow-300 tracking-wide">
                Projects
            </h3>
            <br />
            <div className="grid md:grid-cols-2 gap-8">

              <div className="bg-slate-900 border border-slate-700 p-8 rounded-3xl">
                <h3 className="text-2xl font-bold mb-4">
                  Driver Service Platform
                </h3>

                <p className="text-gray-200 leading-8">
                  Enterprise-scale DVSA transformation platform
                  modernizing driving test services across Great Britain.
                </p>
              </div>

              <div className="bg-slate-900 border border-slate-700 p-8 rounded-3xl">
                <h3 className="text-2xl font-bold mb-4">
                  Commercial Vehicle Services
                </h3>
                <p className="text-cyan-400 mb-3">
                  DVSA & BJSS
                </p>
                <p className="text-gray-200 leading-8">
                  GOV.UK compliant vehicle testing and approvals
                  transformation implementation system.
                </p>
              </div>
            </div>

          </div>
        )}

        {activeTab === "Certifications" && (
          <div>

            <h2 className="text-4xl font-bold mb-10 text-yellow-300 tracking-wide">
              Certifications
            </h2>

            <div className="space-y-5">

              <div className="bg-slate-900 border border-slate-700 p-6 rounded-2xl">
                <p>PL-900 Microsoft Power Platform Fundamentals</p>
              </div>
              <div className="bg-slate-900 border border-slate-700 p-6 rounded-2xl">
               <p>PL-200 Power Platform Functional Consultant</p>
              </div>
              <div className="bg-slate-900 border border-slate-700 p-6 rounded-2xl">
               <p>PL-400 Power Platform Developer</p>
              </div>

            </div>

          </div>
        )}

        {activeTab === "Contact" && (
          <div>

            <h2 className="text-4xl font-bold mb-10 text-yellow-300 tracking-wide">
              Contact
            </h2>

            <div className="space-y-5 text-lg">

              <p>Email: pavanyash041@gmail.com</p>

              <p>Phone: +91 918088663340</p>

              <p>Bangalore, India</p>

            </div>

          </div>
        )}

  </motion.div>

</AnimatePresence>

    </div>
  );
}