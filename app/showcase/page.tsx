"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ShowcasePage() {
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [activeColor, setActiveColor] = useState(0);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const specsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setHeroLoaded(true);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.2 }
    );

    const sections = document.querySelectorAll("[data-animate]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const colors = [
    { name: "Space Gray", hex: "#6e6e73", bg: "#f5f5f7" },
    { name: "Silver", hex: "#e2e2e7", bg: "#fafafa" },
    { name: "Gold", hex: "#f5d6b8", bg: "#fef6eb" },
    { name: "Space Black", hex: "#1d1d1f", bg: "#3a3a3c" },
  ];

  const specs = [
    {
      icon: "🖥",
      title: "Liquid Retina XDR",
      value: "16.2″ Display",
      detail: "3456 × 2234 pixels",
    },
    {
      icon: "⚡",
      title: "M3 Pro Chip",
      value: "12-core CPU",
      detail: "18-core GPU",
    },
    {
      icon: "🔋",
      title: "All-Day Battery",
      value: "Up to 22 hours",
      detail: "100Wh lithium-polymer",
    },
    {
      icon: "💾",
      title: "Unified Memory",
      value: "Up to 36GB",
      detail: "100GB/s bandwidth",
    },
    {
      icon: "💾",
      title: "SSD Storage",
      value: "Up to 2TB",
      detail: "3500MB/s read",
    },
    {
      icon: "📡",
      title: "Connectivity",
      value: "Wi-Fi 6E",
      detail: "Bluetooth 5.3",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-[#1d1d1f] overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-16">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#f5f5f7] via-[#ffffff] to-[#fafafa] pointer-events-none" />

        {/* MacBook Hero Image */}
        <div
          className={`relative z-10 transition-all duration-1000 ease-out ${
            heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div
            className="relative w-[800px] h-[500px]"
            style={{
              animation: heroLoaded ? "float 6s ease-in-out infinite" : "none",
            }}
          >
            <Image
              src="/macbook-hero.png"
              alt="MacBook Pro"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Hero Text */}
        <div className="relative z-10 text-center mt-16 px-6">
          <h1
            className={`text-[56px] font-semibold tracking-tight leading-[1.05] transition-all duration-1000 delay-300 ${
              heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ opacity: 0 }}
          >
            MacBook Pro
          </h1>
          <p
            className={`text-[28px] text-[#6e6e73] mt-2 transition-all duration-1000 delay-500 ${
              heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ opacity: 0 }}
          >
            Mind-blowing. M3 Max.
          </p>

          {/* Starting Price */}
          <p
            className={`text-[21px] text-[#6e6e73] mt-4 transition-all duration-1000 delay-700 ${
              heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ opacity: 0 }}
          >
            From $2,499
          </p>

          {/* CTA */}
          <div
            className={`flex gap-4 justify-center mt-8 transition-all duration-1000 delay-1000 ${
              heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ opacity: 0 }}
          >
            <button className="bg-[#0071e3] text-white px-8 py-3.5 rounded-full text-[17px] font-medium hover:bg-[#0077ed] transition-colors">
              Buy Now
            </button>
            <Link
              href="/products"
              className="text-[#0071e3] px-6 py-3.5 text-[17px] font-medium hover:underline"
            >
              Learn More →
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1500 ${
            heroLoaded ? "opacity-100" : "opacity-0"
          }`}
          style={{ opacity: 0 }}
        >
          <div
            className="w-6 h-10 border-2 border-[#d2d2d7] rounded-full flex items-start justify-center p-1"
            style={{ animation: "pulse 2s ease-in-out infinite" }}
          >
            <div className="w-1.5 h-3 bg-[#6e6e73] rounded-full" style={{ animation: "scrollDot 2s ease-in-out infinite" }} />
          </div>
        </div>
      </section>

      {/* Color Variants Section */}
      <section
        id="colors"
        data-animate
        className={`py-32 px-6 bg-[#f5f5f7] transition-all duration-1000 ${
          visibleSections.has("colors") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-[48px] font-semibold tracking-tight mb-4 text-[#1d1d1f]">
            Pick Your Color
          </h2>
          <p className="text-[21px] text-[#6e6e73] mb-16">
            Four finishes. Each a masterpiece.
          </p>

          <div className="flex justify-center gap-8">
            {colors.map((color, index) => (
              <button
                key={color.name}
                onClick={() => setActiveColor(index)}
                className={`group flex flex-col items-center gap-4 transition-all duration-300 ${
                  activeColor === index ? "scale-110" : "opacity-60 hover:opacity-80"
                }`}
              >
                {/* Color Circle */}
                <div
                  className={`w-20 h-20 rounded-full shadow-lg transition-all duration-300 ${
                    activeColor === index
                      ? "ring-4 ring-[#0071e3] ring-offset-4 ring-offset-[#f5f5f7] scale-110"
                      : ""
                  }`}
                  style={{ backgroundColor: color.hex }}
                />
                {/* Color Name */}
                <span
                  className={`text-[15px] font-medium transition-colors ${
                    activeColor === index ? "text-[#1d1d1f]" : "text-[#6e6e73]"
                  }`}
                >
                  {color.name}
                </span>
              </button>
            ))}
          </div>

          {/* Selected Color Preview */}
          <div
            className="mt-16 h-64 rounded-[24px] flex items-center justify-center transition-all duration-500"
            style={{ backgroundColor: colors[activeColor].bg }}
          >
            <p
              className="text-[24px] font-semibold"
              style={{ color: colors[activeColor].hex === "#e2e2e7" || colors[activeColor].hex === "#f5d6b8" ? "#1d1d1f" : colors[activeColor].hex }}
            >
              {colors[activeColor].name}
            </p>
          </div>
        </div>
      </section>

      {/* Specs Section */}
      <section
        id="specs"
        data-animate
        className={`py-32 px-6 bg-white transition-all duration-1000 ${
          visibleSections.has("specs") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-[48px] font-semibold tracking-tight mb-4 text-[#1d1d1f]">
              Technical Specifications
            </h2>
            <p className="text-[21px] text-[#6e6e73]">
              The most powerful MacBook Pro ever.
            </p>
          </div>

          <div
            ref={specsRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {specs.map((spec, index) => (
              <div
                key={spec.title}
                className="bg-[#f5f5f7] rounded-[20px] p-8 hover:bg-[#e8e8ed] transition-all duration-300 group"
                style={{
                  animation: visibleSections.has("specs")
                    ? `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`
                    : "none",
                  opacity: 0,
                }}
              >
                <div className="text-[40px] mb-4">{spec.icon}</div>
                <h3 className="text-[14px] text-[#6e6e73] uppercase tracking-wide mb-2">
                  {spec.title}
                </h3>
                <p className="text-[28px] font-semibold text-[#1d1d1f] mb-1">
                  {spec.value}
                </p>
                <p className="text-[15px] text-[#86868b]">{spec.detail}</p>
              </div>
            ))}
          </div>

          {/* Display Specs Banner */}
          <div
            className="mt-16 bg-gradient-to-r from-[#f5f5f7] via-[#e8e8ed] to-[#f5f5f7] rounded-[24px] p-12 text-center"
            style={{
              animation: visibleSections.has("specs")
                ? "fadeInUp 0.8s ease-out 0.7s forwards"
                : "none",
              opacity: 0,
            }}
          >
            <h3 className="text-[48px] font-semibold tracking-tight mb-4 text-[#1d1d1f]">
              Liquid Retina XDR
            </h3>
            <div className="flex justify-center gap-12 text-[21px] text-[#6e6e73]">
              <div>
                <span className="text-[#1d1d1f] font-semibold">3456×2234</span>
                <p className="text-[14px] mt-1">Resolution</p>
              </div>
              <div>
                <span className="text-[#1d1d1f] font-semibold">1600 nits</span>
                <p className="text-[14px] mt-1">Peak HDR</p>
              </div>
              <div>
                <span className="text-[#1d1d1f] font-semibold">120Hz</span>
                <p className="text-[14px] mt-1">ProMotion</p>
              </div>
              <div>
                <span className="text-[#1d1d1f] font-semibold">1,000,000:1</span>
                <p className="text-[14px] mt-1">Contrast Ratio</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="pricing"
        data-animate
        className={`py-32 px-6 bg-[#f5f5f7] transition-all duration-1000 ${
          visibleSections.has("pricing") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-[48px] font-semibold tracking-tight mb-4 text-[#1d1d1f]">
            Choose Your MacBook Pro
          </h2>
          <p className="text-[21px] text-[#6e6e73] mb-16">
            Built for the extraordinary.
          </p>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                chip: "M3",
                cpu: "8-core",
                gpu: "10-core",
                memory: "8GB",
                storage: "512GB",
                price: "1,499",
                highlight: false,
              },
              {
                chip: "M3 Pro",
                cpu: "12-core",
                gpu: "18-core",
                memory: "18GB",
                storage: "512GB",
                price: "2,199",
                highlight: true,
              },
              {
                chip: "M3 Max",
                cpu: "16-core",
                gpu: "40-core",
                memory: "36GB",
                storage: "1TB",
                price: "3,499",
                highlight: false,
              },
            ].map((config, index) => (
              <div
                key={config.chip}
                className={`rounded-[24px] p-8 transition-all duration-300 hover:scale-[1.02] ${
                  config.highlight
                    ? "bg-white border-2 border-[#0071e3] shadow-[0_0_40px_rgba(0,113,227,0.15)]"
                    : "bg-white border border-[#d2d2d7]"
                }`}
                style={{
                  animation: visibleSections.has("pricing")
                    ? `fadeInUp 0.6s ease-out ${index * 0.15}s forwards`
                    : "none",
                  opacity: 0,
                }}
              >
                {config.highlight && (
                  <span className="inline-block bg-[#0071e3] text-white text-[12px] font-medium px-3 py-1 rounded-full mb-4">
                    Most Popular
                  </span>
                )}

                <h3 className="text-[24px] font-semibold mb-6 text-[#1d1d1f]">{config.chip}</h3>

                <div className="space-y-3 text-left mb-8">
                  <div className="flex justify-between">
                    <span className="text-[#6e6e73]">CPU</span>
                    <span className="font-medium text-[#1d1d1f]">{config.cpu}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#6e6e73]">GPU</span>
                    <span className="font-medium text-[#1d1d1f]">{config.gpu}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#6e6e73]">Memory</span>
                    <span className="font-medium text-[#1d1d1f]">{config.memory}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#6e6e73]">Storage</span>
                    <span className="font-medium text-[#1d1d1f]">{config.storage} SSD</span>
                  </div>
                </div>

                <div className="border-t border-[#d2d2d7] pt-6">
                  <p className="text-[28px] font-semibold text-[#1d1d1f]">
                    ${config.price}
                  </p>
                  <p className="text-[14px] text-[#6e6e73] mt-1">
                    Or $132/mo for 24 mo.
                  </p>
                </div>

                <button
                  className={`w-full mt-6 py-3.5 rounded-full text-[17px] font-medium transition-colors ${
                    config.highlight
                      ? "bg-[#0071e3] text-white hover:bg-[#0077ed]"
                      : "bg-[#0071e3] text-white hover:bg-[#0077ed]"
                  }`}
                >
                  Buy Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section
        id="cta"
        data-animate
        className={`py-32 px-6 bg-white transition-all duration-1000 ${
          visibleSections.has("cta") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-[56px] font-semibold tracking-tight mb-4 text-[#1d1d1f]">
            Ready to upgrade?
          </h2>
          <p className="text-[21px] text-[#6e6e73] mb-10">
            Experience the future of computing. Today.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-[#0071e3] text-white px-10 py-4 rounded-full text-[17px] font-medium hover:bg-[#0077ed] transition-colors">
              Buy MacBook Pro
            </button>
            <Link
              href="/products"
              className="text-[#0071e3] px-6 py-4 text-[17px] font-medium hover:underline"
            >
              Compare Models →
            </Link>
          </div>
        </div>
      </section>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        @keyframes scrollDot {
          0%, 100% {
            transform: translateY(0);
            opacity: 1;
          }
          50% {
            transform: translateY(6px);
            opacity: 0;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
}
