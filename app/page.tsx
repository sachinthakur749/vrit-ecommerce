import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-[#f5f5f7] pt-16">
      <div className="text-center px-6 max-w-4xl mx-auto">
        {/* Hero Headline */}
        <h1
          className="text-[72px] font-semibold text-[#1d1d1f] tracking-tight leading-[1.05] animate-fade-in-up"
          style={{ opacity: 0 }}
        >
          Discover Premium Products
        </h1>

        {/* Subheadline */}
        <p
          className="text-[21px] text-[#6e6e73] mt-5 max-w-lg mx-auto animate-fade-in-up delay-100"
          style={{ opacity: 0 }}
        >
          Experience quality like never before. Curated selections for the
          discerning customer.
        </p>

        {/* CTA Button */}
        <Link
          href="/products"
          className="inline-flex mt-10 bg-[#0071e3] text-white px-10 py-4 rounded-full
                     text-[17px] font-medium hover:bg-[#0077ed] transition-colors
                     animate-fade-in-up delay-200"
          style={{ opacity: 0 }}
        >
          Shop Now
        </Link>

        {/* Feature Highlights */}
        <div
          className="flex justify-center gap-8 mt-20 animate-fade-in-up delay-300"
          style={{ opacity: 0 }}
        >
          <div className="flex flex-col items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#6e6e73"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            <span className="text-[14px] text-[#6e6e73]">Free Shipping</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#6e6e73"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <span className="text-[14px] text-[#6e6e73]">Secure Payment</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#6e6e73"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            </svg>
            <span className="text-[14px] text-[#6e6e73]">Quality Guarantee</span>
          </div>
        </div>
      </div>
    </main>
  );
}
