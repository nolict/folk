"use client";

import React from "react";

interface RemoteControlProps {
  onMove: (direction: "up" | "down" | "left" | "right") => void;
}

export const RemoteControl = ({ onMove }: RemoteControlProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative h-40 w-40 rounded-full bg-gray-100 shadow-inner flex items-center justify-center border border-gray-200">
        <div className="absolute inset-0 rounded-full bg-gradient-to-b from-gray-50 to-gray-200 opacity-50" />
        
        <button
          onClick={() => onMove("up")}
          className="absolute top-2 h-10 w-10 rounded-full bg-white shadow-card flex items-center justify-center hover:bg-gray-50 transition-colors active:scale-95"
          aria-label="Move Up"
        >
          <span className="text-xl text-[#242424]">↑</span>
        </button>
        
        <button
          onClick={() => onMove("down")}
          className="absolute bottom-2 h-10 w-10 rounded-full bg-white shadow-card flex items-center justify-center hover:bg-gray-50 transition-colors active:scale-95"
          aria-label="Move Down"
        >
          <span className="text-xl text-[#242424]">↓</span>
        </button>
        
        <button
          onClick={() => onMove("left")}
          className="absolute left-2 h-10 w-10 rounded-full bg-white shadow-card flex items-center justify-center hover:bg-gray-50 transition-colors active:scale-95"
          aria-label="Move Left"
        >
          <span className="text-xl text-[#242424]">←</span>
        </button>
        
        <button
          onClick={() => onMove("right")}
          className="absolute right-2 h-10 w-10 rounded-full bg-white shadow-card flex items-center justify-center hover:bg-gray-50 transition-colors active:scale-95"
          aria-label="Move Right"
        >
          <span className="text-xl text-[#242424]">→</span>
        </button>

        <div className="h-16 w-16 rounded-full bg-[#242424] shadow-xl flex items-center justify-center">
            <div className="h-14 w-14 rounded-full border border-white/10 bg-gradient-to-br from-[#333] to-[#111]" />
        </div>
      </div>
      <p className="mt-4 text-xs font-medium text-[#898989] uppercase tracking-widest">Analog Control</p>
    </div>
  );
};
