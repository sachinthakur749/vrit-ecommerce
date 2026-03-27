

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
          className="text-[#171717] mb-2"
          style={{ fontSize: "16px", fontWeight: 500 }}
        >
          Explore our classes and master trending skills!
        </p>
        <h2
          className="text-[#0A0A0A] mb-12"
          style={{ fontSize: "clamp(32px, 5vw, 44px)", fontWeight: 900, letterSpacing: "-0.02em" }}
        >
          Dive Into <span style={{ color: "#16A34A" }}>What's Hot Right Now!</span> 🔥
        </h2>

        <div className="flex flex-col lg:flex-row gap-5 items-stretch">
          {/* ── Main card — All Courses ── */}
          <div
            className="rounded-[32px] p-8 lg:p-10 flex-[2.2] flex flex-col justify-between"
            style={{ backgroundColor: "#C0282D", minHeight: "420px" }}
          >
            {/* View all */}
            <div className="flex justify-end">
              <span
                className="text-white cursor-pointer hover:opacity-80 flex items-center gap-1"
                style={{ fontSize: "14px", fontWeight: 600 }}
              >
                View all Courses <span className="ml-1 text-lg">→</span>
              </span>
            </div>

            {/* Icons row */}
            <div className="flex gap-4 items-center">
              <img src="/react.svg" alt="React" className="w-16 h-16 object-contain" />
              <img src="/bubble.svg" alt="Social" className="w-16 h-16 object-contain" />
              <img src="/vuejs.svg" alt="Vue" className="w-16 h-16 object-contain" />
              <img src="/palette.svg" alt="Design" className="w-16 h-16 object-contain" />
            </div>

            {/* Stat: 23+ All Courses */}
            <div className="flex items-center gap-6 mt-4">
              <div className="flex items-start">
                <span
                  className="text-white font-black leading-none"
                  style={{ fontSize: "110px" }}
                >
                  23
                </span>
                <span
                  className="text-white font-black relative top-2 ml-1"
                  style={{ fontSize: "42px" }}
                >
                  +
                </span>
              </div>
              <div className="flex flex-col">
                <p
                  className="text-white font-extrabold"
                  style={{ fontSize: "28px", lineHeight: 1.1 }}
                >
                  All Courses
                </p>
                <p
                  className="text-[#FCA5A5] mt-1"
                  style={{ fontSize: "14px", maxWidth: "160px", fontWeight: 500 }}
                >
                  courses you&apos;re powering through right now.
                </p>
              </div>
            </div>
          </div>

          {/* ── Upcoming Courses ── */}
          <div
            className="rounded-[32px] p-8 flex-1 flex flex-col gap-[40px] justify-end"
            style={{ backgroundColor: "#FDF2F2", minHeight: "420px" }}
          >
            <div className="flex justify-center gap-6">
              {/* Vertical Title */}
              <div
                className="text-[#C0282D] font-black leading-[1]"
                style={{
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                  fontSize: "32px",
                }}
              >
                Upcoming
                <br />
                Courses
              </div>
              {/* Vertical Subtext */}
              <div
                className="text-[#FCA5A5] font-semibold leading-tight pt-1"
                style={{
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                  fontSize: "13px",
                }}
              >
                exciting new courses <br /> waiting to boost your skills.
              </div>
            </div>

            {/* Stat bottom */}
            <div className="flex justify-center items-start">
              <span
                className="font-black text-[#C0282D] leading-[0.8]"
                style={{ fontSize: "110px" }}
              >
                05
              </span>
              <span
                className="font-black text-[#C0282D] relative top-2 ml-1"
                style={{ fontSize: "40px" }}
              >
                +
              </span>
            </div>
          </div>

          {/* ── Ongoing Courses ── */}
          <div
            className="rounded-[32px] p-8 flex-1 flex flex-col gap-[40px] justify-end"
            style={{ backgroundColor: "#FDF2F2", minHeight: "420px" }}
          >
            <div className="flex justify-center gap-6">
              {/* Vertical Title */}
              <div
                className="text-[#C0282D] font-black leading-[1.1]"
                style={{
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                  fontSize: "32px",
                }}
              >
                Ongoing
                <br />
                Courses
              </div>
              {/* Vertical Subtext */}
              <div
                className="text-[#FCA5A5] font-semibold leading-tight pt-1"
                style={{
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                  fontSize: "13px",
                }}
              >
                currently happening—don&apos;t <br /> miss out on the action!
              </div>
            </div>

            {/* Stat bottom */}
            <div className="flex justify-center items-start">
              <span
                className="font-black text-[#C0282D] leading-[0.8]"
                style={{ fontSize: "110px" }}
              >
                10
              </span>
              <span
                className="font-black text-[#C0282D] relative top-2 ml-1"
                style={{ fontSize: "40px" }}
              >
                +
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
