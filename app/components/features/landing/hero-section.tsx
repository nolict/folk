"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import BlurText from "@/components/ui/blur-text";

export const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden bg-white py-24 md:py-32">
      <div className="container mx-auto px-6 text-center">
        <div className="mx-auto max-w-4xl">
          <BlurText
            text="Create stylish media the Folkative way."
            delay={100}
            animateBy="words"
            direction="top"
            className="text-5xl font-bold leading-[1.1] tracking-tight text-[#242424] md:text-7xl justify-center"
          />
        </div>
        <div className="mx-auto mt-8 max-w-2xl">
          <BlurText
            text="The ultimate editor for minimalist, high-impact social media content. Upload your photo or video, add dynamic text, and share instantly."
            delay={30}
            animateBy="words"
            direction="bottom"
            className="text-lg text-[#898989] md:text-xl font-light justify-center"
          />
        </div>
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button variant="primary" size="lg" className="w-full sm:w-auto">
            Pick Photo or Video
          </Button>
          <Button variant="secondary" size="lg" className="w-full sm:w-auto">
            View Showcase
          </Button>
        </div>
        
        {/* Placeholder for Product Screenshot/Preview */}
        <div className="mt-20 flex justify-center">
          <div className="relative w-full max-w-5xl rounded-2xl bg-white p-2 shadow-card">
            <div className="aspect-video w-full rounded-xl bg-gray-50 flex items-center justify-center border border-gray-100 overflow-hidden">
                <div className="flex flex-col items-center text-center p-8">
                    <div className="w-16 h-16 bg-white rounded-full shadow-card flex items-center justify-center mb-4">
                        <svg className="w-8 h-8 text-[#242424]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <p className="text-[#898989] font-medium">Preview your masterpiece here</p>
                </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decoration - very subtle */}
      <div className="absolute top-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />
    </section>
  );
};
