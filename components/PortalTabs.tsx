"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { createPortal } from "react-dom";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

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
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  return (
    <div className="w-full mt-16">

        {/* TAB BUTTONS */}

      <div
        className="
          flex
          flex-nowrap
          justify-center
          gap-6
          pt-6
          mb-2
          overflow-visible
        "
      >
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`
              flex-1
              py-4
              rounded-2xl
              border
              text-base
              md:text-lg
              font-semibold
              tracking-wide
              whitespace-nowrap
              transition-all
              duration-300
              relative
              ${
                activeTab === tab
                  ? `
                    bg-linear-to-r
                    from-yellow-400
                    to-amber-500
                    text-white
                    border-yellow-200
                    shadow-[0_15px_35px_rgba(250,204,21,0.4)]
                    scale-110
                    -translate-y-3
                    z-20
                  `
                  : `
                    bg-slate-900/60
                    text-white
                    border-white/10
                    hover:border-cyan-400
                    hover:bg-cyan-500/10
                    hover:-translate-y-1
                    hover:scale-105
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
            min-h-125
            shadow-2xl
          "
        >

        {activeTab === "About" && (
          <div>
            <div className="relative mb-10">
              <div className="h-0.5 bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full"></div>
              <div className="absolute inset-0 h-0.5 bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 blur-sm"></div>
            </div>

            <div className="text-center max-w-5xl mx-auto">
              <p className="text-white leading-10 text-xl">
                Microsoft Certified Dynamics 365 & Power Platform Developer with
                <span className="text-cyan-400 font-semibold"> 4+ years of experience </span>
                delivering enterprise-grade CRM solutions for government and large-scale organizations.
              </p>

              <br />

              <p className="text-gray-300 leading-10 text-lg">
                Specialized in Dynamics 365 CE, Power Pages, Dataverse,
                Power Automate, Plugins, Custom Workflows, Web APIs,
                Enterprise Integrations, Security Architecture, and Application Lifecycle Management.
              </p>

              <br />

              <p className="text-gray-300 leading-10 text-lg">
                Proven track record of modernizing legacy systems, implementing
                GOV.UK & WCAG-compliant digital services, automating business processes,
                and delivering scalable solutions that improve operational efficiency,
                accessibility, and user experience.
              </p>
            </div>
          </div>
        )}

        {activeTab === "Experience" && (
          <div>
              <div className="relative mb-10">
                <div className="h-0.5 bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full"></div>
                <div className="absolute inset-0 h-0.5 bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 blur-sm"></div>
              </div> 

              <h3 className="text-3xl font-semibold text-white">
                Software Engineer – CRM
              </h3>

              <p className="text-cyan-400 text-lg mb-4">
                Kerv Digital | Aug 2022 – Present
              </p>

              <p className="text-gray-300 leading-9">
                Expertise in delivering secure, scalable, and user-centric solutions for large-scale government transformation programmes. 
                Proven experience across Dynamics 365 CE, Power Pages, Power Automate, Dataverse, 
                C# Plugins, Web APIs, SharePoint integrations, and Azure-based services.
                <br /><br />
                Contributing to mission-critical platforms supporting millions of customer interactions by modernizing legacy systems, 
                automating complex business processes, implementing accessibility-compliant digital services, 
                and enabling seamless customer journeys through enterprise-grade architecture and best-practice development standards.
              </p>
            
          </div>
        )}
        
        {activeTab === "Skills" && (
          <div>
              <div className="relative mb-10">
                <div className="h-0.5 bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full"></div>
                <div className="absolute inset-0 h-0.5 bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 blur-sm"></div>
              </div> 

            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Dynamics 365 CE",
                "Power Platform",
                "Power Pages",
                "Dataverse",
                "Power Automate",
                "C# Plugins",
                "JavaScript",
                "Web API",
                "Azure",
                "SharePoint",
                "REST APIs",
                "Enterprise Integrations",
                "Security Models",
                "CI/CD",
                "Azure DevOps",
                "ALM",
                "Unit Testing",
                "SonarQube",
                "GOV.UK Standards",
                "WCAG Accessibility",
              ].map((skill) => (
                <div
                  key={skill}
                  className="
                    px-6
                    py-3
                    rounded-full
                    bg-slate-900
                    border
                    border-cyan-500/30
                    text-cyan-300
                    hover:border-cyan-400
                    transition-all
                  "
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "Projects" && (
          <div>
            <div className="relative mb-10">
              <div className="h-0.5 bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full"></div>
              <div className="absolute inset-0 h-0.5 bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 blur-sm"></div>
            </div>

            <div className="space-y-8">

              {/* DSP */}
              <div className="bg-slate-900/80 border border-cyan-500/20 p-8 rounded-3xl">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-cyan-300">
                      Driver Service Platform (DSP)
                    </h3>
                    <p className="text-purple-300 text-sm mt-1">
                      DVSA & KAINOS
                    </p>
                  </div>
                  <span className="text-yellow-300 font-medium">
                    Jan 2026 – Present
                  </span>
                </div>
                <p className="text-gray-300 leading-8">
                  Working on DVSA's Driving Services Platform (DSP), a nationwide digital transformation initiative modernizing the delivery of driving test and 
                  driver services across Great Britain. Developing enterprise-scale Dynamics 365 CE and Power Platform solutions focused on appointment management, 
                  booking orchestration, payment integrations, and customer self-service capabilities. Contributing to secure, scalable, 
                  and high-performance service architecture that improves user experience, optimizes operational efficiency, 
                  supports fair access to driving tests, and enables the future evolution of DVSA's digital service ecosystem.
                </p>
              </div>

              {/* CVS */}
              <div className="bg-slate-900/80 border border-cyan-500/20 p-8 rounded-3xl">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-cyan-300">
                      Commercial Vehicle Services (CVS)
                    </h3>
                    <p className="text-purple-300 text-sm mt-1">
                      DVSA & BJSS
                    </p>
                  </div>
                  <span className="text-yellow-300 font-medium">
                    Aug 2023 – Dec 2025
                  </span>
                </div>
                <p className="text-gray-300 leading-8">
                  Contributed to the modernization of DVSA's Commercial Vehicle Services (CVS) platform, 
                  transforming manual vehicle testing and approval processes into a scalable digital ecosystem powered by Dynamics 365 CE and Power Platform. 
                  Engineered advanced CRM solutions including custom Plugins, Custom Actions, Power Automate workflows, 
                  Web API integrations, pricing engines, and Smart Forms. 
                  Built and maintained GOV.UK & WCAG-compliant Power Pages experiences, delivering secure end-to-end customer journeys, 
                  robust validation and error-handling frameworks, automated document generation, SharePoint integrations, 
                  and enterprise-grade application processing capabilities while ensuring code quality through unit testing and best-practice development standards.
                </p>
              </div>

              {/* ICAEW */}
              <div className="bg-slate-900/80 border border-cyan-500/20 p-8 rounded-3xl">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-cyan-300">
                      Institute of Chartered Accountants in England and Wales(ICAEW)
                    </h3>
                    <p className="text-purple-300 text-sm mt-1">
                      Uk project
                    </p>
                  </div>
                  <span className="text-yellow-300 font-medium">
                    Aug 2022 – Jun 2023
                  </span>
                </div>

                <p className="text-gray-300 leading-8">
                  Delivered Dynamics 365 CRM customizations including Plugins,
                  Workflows, Actions, JavaScript Ribbon Commands, Power Automate
                  Flows, solution deployments.
                  Contributed to enterprise CRM modernization and process automation
                  initiatives supporting a global professional membership organization.
                </p>
              </div>

            </div>
          </div>
        )}

        {activeTab === "Certifications" && (
          <div>
            <div className="relative mb-12">
              <div className="h-0.5 bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full"></div>
              <div className="absolute inset-0 h-0.5 bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 blur-sm"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  code: "PL-900",
                  title: "Power Platform Fundamentals",
                  level: "Fundamentals",
                  image: "/cert/pl900.png",
                },
                {
                  code: "PL-200",
                  title: "Power Platform Functional Consultant",
                  level: "Associate",
                  image: "/cert/pl200.png",
                },
                {
                  code: "PL-400",
                  title: "Power Platform Developer",
                  level: "Associate",
                  image: "/cert/pl400.png",
                },
              ].map((cert) => (
                <div
                  key={cert.code}
                  className="
                    group
                    relative
                    overflow-hidden
                    bg-slate-900/80
                    backdrop-blur-xl
                    border
                    border-cyan-500/20
                    rounded-3xl
                    p-8
                    hover:border-cyan-400
                    hover:-translate-y-2
                    transition-all
                    duration-300
                    shadow-xl
                  "
                >
                  {/* Glow Effect */}
                  <div
                    className="
                      absolute inset-0
                      opacity-0
                      group-hover:opacity-100
                      transition-opacity
                      duration-300
                      bg-linear-to-br
                      from-cyan-500/10
                      via-transparent
                      to-purple-500/10
                    "
                  />

                  {/* Microsoft Badge */}
                  <div className="relative z-10 flex justify-center mb-5">
                    <div
                      className="
                        px-4 py-1
                        rounded-full
                        bg-cyan-500/10
                        border
                        border-cyan-400/30
                        text-cyan-300
                        text-xs
                        font-semibold
                        tracking-wider
                      "
                    >
                      MICROSOFT CERTIFIED
                    </div>
                  </div>

                  {/* Certification Details */}
                  <div className="relative z-10 text-center">
                    <h3
                      className="
                        text-5xl
                        font-black
                        mb-4
                        bg-linear-to-r
                        from-cyan-400
                        to-purple-400
                        bg-clip-text
                        text-transparent
                      "
                    >
                      {cert.code}
                    </h3>

                    <p className="text-white text-xl font-semibold leading-8 mb-5 min-h-16">
                      {cert.title}
                    </p>

                    <div
                      className="
                        inline-flex
                        px-4
                        py-2
                        rounded-full
                        bg-yellow-500/10
                        border
                        border-yellow-400/30
                        text-yellow-300
                        text-sm
                        font-medium
                        mb-5
                      "
                    >
                      {cert.level}
                    </div>

                    <div>
                      <button
                        onClick={() => setSelectedCert(cert.image)}
                        className="
                          inline-flex
                          items-center
                          gap-2
                          text-cyan-400
                          text-sm
                          font-medium
                          hover:text-cyan-300
                          hover:underline
                          transition-all
                        "
                      >
                        View Certificate →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "Contact" && (
          <div>
            <div className="relative mb-12">
              <div className="h-0.5 bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full"></div>
              <div className="absolute inset-0 h-0.5 bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 blur-sm"></div>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">

                {/* Email */}
                <div
                  className="
                    bg-slate-900/80
                    border
                    border-cyan-500/20
                    rounded-3xl
                    p-8
                    hover:border-cyan-400
                    transition-all
                  "
                >
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <MdEmail className="text-cyan-400 text-2xl" />

                    <h3 className="text-white text-2xl font-semibold">
                      Email
                    </h3>
                  </div>

                  <a
                    href="mailto:pavanyash041@gmail.com"
                    className="
                      text-gray-300
                      hover:text-cyan-300
                      transition-colors
                      break-all
                    "
                  >
                    pavanyash041@gmail.com
                  </a>

                  <p className="text-gray-500 text-sm mt-3">
                    Contact via email
                  </p>
                </div>

                {/* Phone */}
                <div
                  className="
                    bg-slate-900/80
                    border
                    border-cyan-500/20
                    rounded-3xl
                    p-8
                    hover:border-cyan-400
                    transition-all
                  "
                >
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <FaPhoneAlt className="text-cyan-400 text-xl" />

                    <h3 className="text-white text-2xl font-semibold">
                      Phone
                    </h3>
                  </div>

                  <a
                    href="tel:+9191808863340"
                    className="
                      text-gray-300
                      hover:text-cyan-300
                      transition-colors
                    "
                  >
                    +91 91808 866340
                  </a>

                  <p className="text-gray-500 text-sm mt-3">
                    Available for discussions
                  </p>
                </div>

                {/* Location */}
                <div
                  className="
                    bg-slate-900/80
                    border
                    border-cyan-500/20
                    rounded-3xl
                    p-8
                    hover:border-cyan-400
                    transition-all
                  "
                >
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <FaLocationDot className="text-cyan-400 text-xl" />

                    <h3 className="text-white text-2xl font-semibold">
                      Location
                    </h3>
                  </div>

                  <p className="text-gray-300">
                    Bangalore, India
                  </p>

                  <p className="text-gray-500 text-sm mt-3">
                    Open to remote & hybrid opportunities
                  </p>
                </div>

              </div>
            </div>
          </div>
        )}

        </motion.div>

      </AnimatePresence>
      {
        typeof window !== "undefined" &&
        selectedCert &&
        createPortal(
          <div
            className="
              fixed
              inset-0
              z-999999
              bg-black/95
              backdrop-blur-md
              flex
              items-center
              justify-center
              p-4
            "
            onClick={() => setSelectedCert(null)}
          >
            <div
              className="relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="
                  absolute
                  -top-6
                  -right-6
                  z-50
                  w-14
                  h-14
                  rounded-full
                  bg-red-500
                  hover:bg-red-600
                  text-white
                  text-3xl
                  flex
                  items-center
                  justify-center
                  shadow-2xl
                  transition-all
                  border-4
                  border-white/10
                "
              >
                ×
              </button>

              {/* Certificate */}
              <img
                src={selectedCert}
                alt="Microsoft Certification"
                className="
                  max-w-[98vw]
                  max-h-[95vh]
                  object-contain
                  rounded-xl
                  shadow-[0_0_50px_rgba(34,211,238,0.25)]
                "
              />
            </div>
          </div>,
          document.body
        )
      }
    </div>
  );
}