"use client";

import { useSearchParams } from "next/navigation";
import { MediaPreview } from "@/components/features/editor/media-preview";
import { StyleSelector } from "@/components/features/editor/style-selector";
import { Navbar } from "@/components/features/landing/navbar";

export default function EditorPage() {
  const searchParams = useSearchParams();
  const previewUrl = searchParams.get("preview");
  const typeParam = searchParams.get("type");
  const mediaType = typeParam ? (decodeURIComponent(typeParam).startsWith("video") ? "video" : "image") : "image";

  if (!previewUrl) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <div className="flex flex-1 items-center justify-center">
          <p className="text-[#898989]">No media selected. Please go back to home.</p>
        </div>
      </div>
    );
  }

  const decodedUrl = decodeURIComponent(previewUrl);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 bg-white py-8">
        <div className="container mx-auto px-6">
          <h1 className="mb-8 text-3xl font-bold text-[#242424]">Editor</h1>
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <MediaPreview src={decodedUrl} type={mediaType} />
            </div>
            <div>
              <StyleSelector />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}