"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { MediaPreview } from "@/components/features/editor/media-preview";
import { StyleSelector } from "@/components/features/editor/style-selector";
import { Navbar } from "@/components/features/landing/navbar";

function EditorContent() {
  const searchParams = useSearchParams();
  const previewUrl = searchParams.get("preview");
  const typeParam = searchParams.get("type");
  const mediaType = typeParam ? (decodeURIComponent(typeParam).startsWith("video") ? "video" : "image") : "image";

  const [text, setText] = React.useState("Dewasa itu isinya cuma kerja, trus ngantuk, kalo ga ya sakit pinggang.");
  const [username, setUsername] = React.useState("FOLKATIVE");
  const [position, setPosition] = React.useState({ x: 50, y: 65 });
  const [scale, setScale] = React.useState(85);

  const handleMove = (direction: "up" | "down" | "left" | "right") => {
    const step = 5;
    setPosition((prev) => {
      switch (direction) {
        case "up":
          return { ...prev, y: Math.max(0, prev.y - step) };
        case "down":
          return { ...prev, y: Math.min(100, prev.y + step) };
        case "left":
          return { ...prev, x: Math.max(0, prev.x - step) };
        case "right":
          return { ...prev, x: Math.min(100, prev.x + step) };
        default:
          return prev;
      }
    });
  };

  if (!previewUrl) {
    return (
      <div className="flex flex-1 items-center justify-center">
        <p className="text-[#898989]">No media selected. Please go back to home.</p>
      </div>
    );
  }

  const decodedUrl = decodeURIComponent(previewUrl);

  return (
    <main className="flex-1 bg-white py-8">
      <div className="container mx-auto px-6">
        <h1 className="mb-8 text-3xl font-bold text-[#242424]">Editor</h1>
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <MediaPreview 
              src={decodedUrl} 
              type={mediaType} 
              text={text} 
              username={username} 
              position={position}
              scale={scale}
            />
          </div>
          <div>
            <StyleSelector 
              text={text} 
              setText={setText} 
              username={username} 
              setUsername={setUsername} 
              onMove={handleMove}
              scale={scale}
              setScale={setScale}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default function EditorPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <Suspense fallback={
        <div className="flex flex-1 items-center justify-center">
          <p className="text-[#898989]">Loading editor...</p>
        </div>
      }>
        <EditorContent />
      </Suspense>
    </div>
  );
}
