

export default function TaskBPage() {
  return (
    <main
      className="min-h-screen bg-white"
    >

      <section className="max-w-6xl mx-auto px-8 pt-16 pb-0">
        {/* Top row — description left, services right */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-32 items-start mb-16">
          {/* Left */}
          <div className="flex-1 max-w-xs">
            <p className="text-[#171717] text-[17px] font-[400] leading-[1.6] mb-6">
              Experience our expert solutions tailored to enhance your business
              with top-tier design, development, and animation.
            </p>
            <button
              className="text-white text-[13px] font-[500] px-5 py-2 rounded-full"
              style={{ backgroundColor: "#2563EB" }}
            >
              Services
            </button>
          </div>

          {/* Right */}
          <div className="flex-1">
            <h2
              className="text-[#0A0A0A] leading-[1.15]"
              style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 700 }}
            >
              UI & UX
              <br />
              Development
              <br />
              Blockchain
            </h2>
          </div>
        </div>

        {/* Photos — image slider style */}
        <div className="flex gap-4 overflow-hidden">
          {/* Large photo */}
          <div
            className="rounded-2xl overflow-hidden flex-[3]"
            style={{ height: "380px" }}
          >
            <img
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop"
              alt="workspace"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Small photo — partially visible */}
          <div
            className="rounded-2xl overflow-hidden flex-[1]"
            style={{ height: "380px" }}
          >
            <img
              src="https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=400&auto=format&fit=crop"
              alt="device"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Slider indicator */}
        <div className="flex gap-1 mt-4 mb-12">
          <div className="h-[3px] w-32 bg-gray-300 rounded-full" />
          <div className="h-[3px] flex-1 bg-gray-100 rounded-full" />
        </div>

        {/* Partners */}
        <div className="pb-16">
          <p
            className="text-center text-[#171717] mb-8"
            style={{ fontSize: "18px", fontWeight: 500 }}
          >
            Our Partners
          </p>
          <div className="flex items-center justify-center gap-16 flex-wrap">
            {[
              { name: "Cloud Education", logo: "/cloudedu.png" },
              { name: "CMC", logo: "/cmc1.png" },
              { name: "IT SNP", logo: "/itsnp.png" },
              { name: "Zebec", logo: "/zebac.png" },
            ].map((partner) => (
              <div
                key={partner.name}
                className="flex flex-col items-center gap-2"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-10 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="max-w-6xl mx-auto px-8 py-12">
        <p
          className="text-[#6B7280] mb-2"
          style={{ fontSize: "14px", fontWeight: 400 }}
        >
          Explore our classes and master trending skills!
        </p>
        <h2
          className="text-[#0A0A0A] mb-8"
          style={{ fontSize: "26px", fontWeight: 700 }}
        >
          Dive Into{" "}
          <span style={{ color: "#16A34A" }}>What's Hot Right Now!</span> 🔥
        </h2>

        <div className="flex flex-col md:flex-row gap-4 items-stretch">
          <div
            className="rounded-2xl p-7 flex-[2] flex flex-col justify-between"
            style={{ backgroundColor: "#C0282D", minHeight: "300px" }}
          >
            <div className="flex justify-end">
              <span
                className="text-white cursor-pointer hover:opacity-80 flex items-center gap-1"
                style={{ fontSize: "13px", fontWeight: 500 }}
              >
                View all Courses <span className="ml-1">→</span>
              </span>
            </div>

            <div className="flex gap-4 mt-6">
              {["/react.svg", "/likes.svg", "/vuejs.svg", "/paints.svg"].map(
                (src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`tech-${i}`}
                    className="w-12 h-12 object-contain"
                  />
                ),
              )}
            </div>

            {/* Stat */}
            <div className="flex items-end gap-3 mt-8">
              <div className="relative">
                <span
                  className="text-white font-black leading-none"
                  style={{ fontSize: "96px", lineHeight: 1 }}
                >
                  23
                </span>
                <span
                  className="text-white font-black absolute -top-1 -right-6"
                  style={{ fontSize: "36px" }}
                >
                  +
                </span>
              </div>
              <div className="mb-3 ml-6">
                <p
                  className="text-white font-bold"
                  style={{ fontSize: "18px" }}
                >
                  All Courses
                </p>
                <p
                  className="text-red-200"
                  style={{ fontSize: "12px", maxWidth: "120px" }}
                >
                  courses you're powering through right now.
                </p>
              </div>
            </div>
          </div>

          {/* ── Upcoming Courses ── */}
          <div
            className="rounded-2xl p-6 flex-1 flex flex-col justify-end gap-[20px]"
            style={{ backgroundColor: "#FDECEA", minHeight: "300px" }}
          >
            {/* Vertical text top */}
            <div className="flex justify-center gap-3">
              <div
                style={{
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                }}
              >
                <p
                  className="font-bold text-[#C0282D] leading-tight"
                  style={{ fontSize: "20px" }}
                >
                  Upcoming
                  <br />
                  Courses
                </p>
              </div>
              <div
                style={{
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                }}
              >
                <p className="text-[#E57373] text-[11px] font-[700] leading-tight">
                  exciting new courses <br /> waiting to boost your skills.
                </p>
              </div>
            </div>

            {/* Number bottom */}
            <div className="flex justify-center">
              <div className="relative">
                <span
                  className="font-black text-[#C0282D] leading-none"
                  style={{ fontSize: "96px", lineHeight: 1 }}
                >
                  05
                </span>
                <span
                  className="font-black text-[#C0282D] absolute -top-1 -right-5"
                  style={{ fontSize: "32px" }}
                >
                  +
                </span>
              </div>
            </div>
          </div>
          <div
            className="rounded-2xl px-4 py-6 flex-1 flex flex-col justify-end gap-[20px]"
            style={{ backgroundColor: "#FDECEA", minHeight: "300px" }}
          >
            <div className="flex justify-center gap-3">
              <div
                style={{
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                }}
              >
                <p
                  className="font-bold text-[#C0282D] leading-tight"
                  style={{ fontSize: "20px" }}
                >
                  Ongoing
                  <br />
                  Courses
                </p>
              </div>
              <div
                style={{
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                }}
              >
                <p className="text-[#E57373] text-[11px] font-[700] leading-tight">
                  currently happening—don&apos;t <br /> miss out on the action!
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <span
                  className="font-black text-[#C0282D] leading-none"
                  style={{ fontSize: "96px", lineHeight: 1 }}
                >
                  10
                </span>
                <span
                  className="font-black text-[#C0282D] absolute -top-1 -right-5"
                  style={{ fontSize: "32px" }}
                >
                  +
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
