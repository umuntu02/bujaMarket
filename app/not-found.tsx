"use client";

import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";
import { motion } from "framer-motion";
import { Settings } from "lucide-react";
import Link from "next/link"; // Correction de l'import

export default function NotFound() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex items-center justify-center h-[100vh] bg-gray-100 dark:bg-gray-900 px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center relative"
        >
          {/* Conteneur des roues dentées */}
          <div className="relative w-32 h-32 flex items-center justify-center">
            {/* Roue principale */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
              className="absolute"
            >
              <Settings className="w-16 h-16 text-gray-500 dark:text-gray-400" />
            </motion.div>

            {/* Petite roue gauche - rotation inverse */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              className="absolute left-[-5px] top-6"
            >
              <Settings className="w-12 h-12 text-gray-400 dark:text-gray-500" />
            </motion.div>

            {/* Petite roue droite - rotation inverse */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              className="absolute right-[-5px] top-6"
            >
              <Settings className="w-12 h-12 text-gray-400 dark:text-gray-500" />
            </motion.div>
          </div>

          <h1 className="text-2xl font-bold text-gray-700 dark:text-gray-400">
            Page en maintenance, Devlin va y jeter un coup d&apos;oeil
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
            Cette page est temporairement indisponible.
          </p>

          {/* ✅ Bouton stylisé avec un fond jaune */}
          <Link
            href="/"
            className="mt-6 px-6 py-3 bg-yellow-500 text-black font-semibold rounded-md shadow-md hover:bg-yellow-600 transition duration-300"
          >
            Retour à l&apos;accueil
          </Link>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
