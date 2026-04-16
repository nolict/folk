import { Navbar } from "@/components/features/landing/navbar";
import { HeroSection } from "@/components/features/landing/hero-section";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
      </main>
      <footer className="border-t border-gray-100 py-12 bg-white">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[#898989] text-sm">
            © 2026 Folkative Media Editor. All rights reserved.
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-sm text-[#898989] hover:text-[#111111]">Privacy</a>
            <a href="#" className="text-sm text-[#898989] hover:text-[#111111]">Terms</a>
            <a href="#" className="text-sm text-[#898989] hover:text-[#111111]">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
