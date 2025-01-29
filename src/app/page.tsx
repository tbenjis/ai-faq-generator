"use client";

import { FaqGenerator } from "@/components/FaqGenerator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faHandshake,
  faLifeRing,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

      <div className="relative">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16 space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-300 to-secondary-300 animate-gradient">
              AI FAQ Generator
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Transform your product description into a comprehensive FAQ
              section in seconds using AI. Perfect for websites, documentation,
              and customer support.
            </p>
          </div>

          <div className="max-w-3xl mx-auto backdrop-blur-lg bg-white/10 rounded-2xl shadow-2xl p-8 border border-white/20 hover:border-white/30 transition-all duration-300">
            <FaqGenerator />
          </div>

          <div className="mt-24 text-center">
            <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-primary-200 to-secondary-200">
              Why Choose Our FAQ Generator?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="group p-6 backdrop-blur-lg bg-white/10 rounded-xl border border-white/20 hover:border-white/30 transition-all duration-300 hover:transform hover:scale-105">
                <div className="h-12 w-12 rounded-lg bg-primary-500/20 text-primary-300 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <FontAwesomeIcon icon={faClock} className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-primary-200">
                  Save Time
                </h3>
                <p className="text-gray-300">
                  Generate comprehensive FAQs in seconds instead of hours
                </p>
              </div>

              <div className="group p-6 backdrop-blur-lg bg-white/10 rounded-xl border border-white/20 hover:border-white/30 transition-all duration-300 hover:transform hover:scale-105">
                <div className="h-12 w-12 rounded-lg bg-secondary-500/20 text-secondary-300 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <FontAwesomeIcon icon={faHandshake} className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-secondary-200">
                  Boost SEO
                </h3>
                <p className="text-gray-300">
                  Rank for long-tail keywords with targeted Q&A content
                </p>
              </div>

              <div className="group p-6 backdrop-blur-lg bg-white/10 rounded-xl border border-white/20 hover:border-white/30 transition-all duration-300 hover:transform hover:scale-105">
                <div className="h-12 w-12 rounded-lg bg-primary-500/20 text-primary-300 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <FontAwesomeIcon icon={faLifeRing} className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-primary-200">
                  Reduce Support Load
                </h3>
                <p className="text-gray-300">
                  Answer common questions before they&apos;re asked
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
