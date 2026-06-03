"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import PortalTabs from "./PortalTabs";

export default function Hero() {

  return (
    <section className="min-h-screen relative overflow-hidden grid-bg px-6 py-16">

      <div className="hero-bg"></div>

        <div className="absolute top-6 right-[200px] z-50">

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
      <br />
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

            <div className=" absolute inset-0 rounded-full bg-cyan-500 blur-3xl opacity-30"></div>

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

          {/* SMALL BADGE */}

          <div className="
            glass
            px-6
            py-3
            rounded-full
            text-cyan-300
            text-sm
            mb-8
            tracking-wide
          ">
            MICROSOFT CERTIFIED PROFESSIONAL
          </div>

          {/* NAME */}

          <h1 className="
            text-5xl
            md:text-7xl
            font-black
            mb-6
            gradient-text
            leading-tight
          ">
            Pavan Kumar N R
          </h1>

          {/* ROLE */}

          <h2 className="
            text-2xl
            md:text-3xl
            text-gray-300
            font-semibold
            mb-8
          ">
            Dynamics 365 & Power Platform Engineer
          </h2>

          {/* TAGLINE */}

          <p className="
            text-gray-400
            max-w-4xl
            text-lg
            md:text-xl
            leading-10
            mb-12
          ">
            Enterprise CRM developer specializing in
            Power Platform, Power Pages, integrations,
            automation and scalable digital transformation
            systems for enterprise and government platforms.
          </p>

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