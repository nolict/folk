"use client";

import React from "react";

interface MediaPreviewProps {
  src: string;
  type: "image" | "video";
  text: string;
  username: string;
  position: { x: number; y: number };
  scale: number;
}

export const MediaPreview = ({ src, type, text, username, position, scale }: MediaPreviewProps) => {
  const baseFontSize = (scale / 100);
  
  return (
    <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-[#0a0a0a] flex items-center justify-center p-6 min-h-[600px] shadow-inner">
      <div className="relative inline-block max-w-full max-h-[80vh] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,1)] border border-white/5">
        {type === "video" ? (
          <video
            src={src}
            className="max-h-[80vh] w-auto block object-contain"
            controls
          />
        ) : (
          <img
            src={src}
            alt="Preview"
            className="max-h-[80vh] w-auto block object-contain"
          />
        )}

        <div className="absolute inset-0 pointer-events-none z-20">
          <div 
            className="absolute inset-x-0 select-none"
            style={{ 
              top: `${position.y}%`,
              transform: "translateY(-50%)",
            }}
          >
            <div 
              className="bg-white w-full shadow-[0_20px_80px_rgba(0,0,0,0.5)] flex flex-col justify-between"
              style={{ 
                paddingTop: `${1.8 * baseFontSize}rem`,
                paddingBottom: `${0.6 * baseFontSize}rem`,
                paddingLeft: `${1 * baseFontSize}rem`,
                paddingRight: `${1 * baseFontSize}rem`,
                minHeight: `${7 * baseFontSize}rem`
              }}
            >
              <div className="w-full mb-1">
                <p 
                  className="whitespace-pre-wrap text-left text-black"
                  style={{ 
                    fontSize: `${4.2 * baseFontSize}rem`,
                    lineHeight: "0.95",
                    letterSpacing: "-0.045em",
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 500,
                    transform: "scaleY(1.25)",
                    transformOrigin: "top left",
                    display: "block",
                    marginBottom: `${1 * baseFontSize}rem`
                  }}
                >
                  {text}
                </p>
              </div>
              
              <div className="self-end mt-auto pt-6">
                <span 
                  className="text-black uppercase"
                  style={{ 
                    fontSize: `${3 * baseFontSize}rem`,
                    letterSpacing: "-0.03em",
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 900,
                    lineHeight: "1",
                    transform: "scaleY(1.1)",
                    transformOrigin: "bottom right",
                    display: "inline-block"
                  }}
                >
                  {username}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
