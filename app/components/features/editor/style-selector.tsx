"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input, TextArea } from "@/components/ui/input";
import { RemoteControl } from "./remote-control";

interface StyleSelectorProps {
  text: string;
  setText: (text: string) => void;
  username: string;
  setUsername: (username: string) => void;
  onMove: (direction: "up" | "down" | "left" | "right") => void;
  scale: number;
  setScale: (scale: number) => void;
}

const styles = [
  {
    id: "folkative",
    name: "Folkative",
    description: "Classic clean white background with bold black text",
  },
];

export const StyleSelector = ({
  text,
  setText,
  username,
  setUsername,
  onMove,
  scale,
  setScale,
}: StyleSelectorProps) => {
  const [selectedStyle, setSelectedStyle] = React.useState<string>("folkative");

  return (
    <div className="space-y-6">
      {/* Style Selection */}
      <div className="rounded-xl border border-gray-200 bg-white p-6">
        <h2 className="mb-4 text-xl font-semibold text-[#242424]">Select Style</h2>
        <div className="space-y-3">
          {styles.map((style) => (
            <button
              key={style.id}
              onClick={() => setSelectedStyle(style.id)}
              className={`w-full rounded-lg border p-4 text-left transition-colors ${
                selectedStyle === style.id
                  ? "border-[#242424] bg-gray-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className="font-medium text-[#242424]">{style.name}</div>
              <div className="mt-1 text-sm text-[#898989]">{style.description}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Content Editing */}
      <div className="rounded-xl border border-gray-200 bg-white p-6">
        <h2 className="mb-4 text-xl font-semibold text-[#242424]">Edit Content</h2>
        <div className="space-y-4">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-[#898989]">
              Message
            </label>
            <TextArea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter your text here..."
              rows={3}
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-[#898989]">
              Username
            </label>
            <Input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="@username"
            />
          </div>
        </div>
      </div>

      {/* Box Size Control */}
      <div className="rounded-xl border border-gray-200 bg-white p-6">
        <h2 className="mb-4 text-xl font-semibold text-[#242424]">Box Size</h2>
        <div className="space-y-4">
          <input
            type="range"
            min="30"
            max="150"
            value={scale}
            onChange={(e) => setScale(parseInt(e.target.value))}
            className="w-full accent-[#242424]"
          />
          <div className="flex justify-between text-xs font-medium text-[#898989] uppercase tracking-wider">
            <span>Small</span>
            <span>{scale}%</span>
            <span>Large</span>
          </div>
        </div>
      </div>

      {/* Position Control */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 flex flex-col items-center">
        <h2 className="mb-4 self-start text-xl font-semibold text-[#242424]">
          Position Control
        </h2>
        <RemoteControl onMove={onMove} />
      </div>

      {/* Export Action */}
      <div className="rounded-xl border border-gray-200 bg-white p-6">
        <Button variant="primary" size="lg" className="w-full">
          Download Image
        </Button>
      </div>
    </div>
  );
};
