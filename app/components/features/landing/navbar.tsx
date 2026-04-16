import React from "react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tighter text-[#111111]">
            FOLK<span className="text-[#898989]">ATIVE</span>
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-medium text-[#898989] hover:text-[#111111]">Editor</a>
          <a href="#" className="text-sm font-medium text-[#898989] hover:text-[#111111]">Features</a>
          <a href="#" className="text-sm font-medium text-[#898989] hover:text-[#111111]">Showcase</a>
        </div>
        <div>
          <Button variant="primary" size="sm">Get Started</Button>
        </div>
      </div>
    </nav>
  );
};
