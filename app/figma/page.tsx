

export default function TaskBPage() {
  return (
    <main
      className="min-h-screen bg-white"
    >

      <section className="max-w-6xl mx-auto px-8 pt-16 pb-0">
        <div className="flex flex-col md:flex-row gap-8 md:gap-32 items-start mb-16">
          <div className="flex-1 max-w-xs">
            <p className="text-[#171717] text-[17px] font-[400] leading-[1.6] mb-6">
              Experience our expert solutions tailored to enhance your business
              with top-tier design, development, and animation.
            </p>
            <button
              className="text-white text-[13px] font-[500] px-5 py-2 rounded-full bg-vrit-primary"
            >
              Services
            </button>
          </div>

          <div className="flex-1">
            <h2
              className="text-[#0A0A0A] leading-[1.15] text-[clamp(32px,5vw,52px)] font-bold"
            >
              UI & UX
              <br />
              Development
              <br />
              Blockchain
            </h2>
          </div>
        </div>

        <div className="flex gap-4 overflow-hidden">
          <div
            className="rounded-2xl overflow-hidden flex-[3] h-[380px]"
          >
            <img
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop"
              alt="workspace"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className="rounded-2xl overflow-hidden flex-[1] h-[380px]"
          >
            <img
              src="https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=400&auto=format&fit=crop"
              alt="device"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex gap-1 mt-4 mb-12">
          <div className="h-[3px] w-32 bg-gray-300 rounded-full" />
          <div className="h-[3px] flex-1 bg-gray-100 rounded-full" />
        </div>

        <div className="pb-16">
          <p
            className="text-center text-[#171717] mb-8 text-[18px] font-medium"
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
          className="text-[#171717] mb-2 text-[16px] font-medium"
        >
          Explore our classes and master trending skills!
        </p>
        <h2
          className="text-[#0A0A0A] mb-12 text-[clamp(32px,5vw,44px)] font-black tracking-[-0.02em]"
        >
          Dive Into <span className="text-vrit-green">What's Hot Right Now!</span> 🔥
        </h2>

        <div className="flex flex-col lg:flex-row gap-5 items-stretch">
          <div
            className="rounded-[32px] p-8 lg:p-10 flex-[2.2] flex flex-col justify-between bg-vrit-red min-h-[420px]"
          >
            <div className="flex justify-end">
              <span
                className="text-white cursor-pointer hover:opacity-80 flex items-center gap-1 text-[14px] font-semibold"
              >
                View all Courses <span className="ml-1 text-lg">→</span>
              </span>
            </div>

            <div className="flex gap-4 items-center">
              <img src="/react.svg" alt="React" className="w-16 h-16 object-contain" />
              <img src="/likes.svg" alt="Social" className="w-16 h-16 object-contain" />
              <img src="/vuejs.svg" alt="Vue" className="w-16 h-16 object-contain" />
              <img src="/paints.svg" alt="Design" className="w-16 h-16 object-contain" />
            </div>

            <div className="flex items-center gap-6 mt-4">
              <div className="flex items-start">
                <span
                  className="text-white font-black leading-none text-[110px]"
                >
                  23
                </span>
                <span
                  className="text-white font-black relative top-2 ml-1 text-[42px]"
                >
                  +
                </span>
              </div>
              <div className="flex flex-col">
                <p
                  className="text-white font-extrabold text-[28px] leading-[1.1]"
                >
                  All Courses
                </p>
                <p
                  className="text-[#FCA5A5] mt-1 text-[14px] max-w-[160px] font-medium"
                >
                  courses you&apos;re powering through right now.
                </p>
              </div>
            </div>
          </div>

          <div
            className="rounded-[32px] p-8 flex-1 flex flex-col gap-[40px] justify-end bg-vrit-pink min-h-[420px]"
          >
            <div className="flex justify-center gap-6">
              <div
                className="text-vrit-red font-black leading-none [writing-mode:vertical-rl] rotate-180 text-[32px]"
              >
                Upcoming
                <br />
                Courses
              </div>
              <div
                className="text-[#FCA5A5] font-semibold leading-tight pt-1 [writing-mode:vertical-rl] rotate-180 text-[13px]"
              >
                exciting new courses <br /> waiting to boost your skills.
              </div>
            </div>

            <div className="flex justify-center items-start">
              <span
                className="font-black text-vrit-red leading-[0.8] text-[110px]"
              >
                05
              </span>
              <span
                className="font-black text-vrit-red relative top-2 ml-1 text-[40px]"
              >
                +
              </span>
            </div>
          </div>

          <div
            className="rounded-[32px] p-8 flex-1 flex flex-col gap-[40px] justify-end bg-vrit-pink min-h-[420px]"
          >
            <div className="flex justify-center gap-6">
              <div
                className="text-vrit-red font-black leading-none [writing-mode:vertical-rl] rotate-180 text-[32px]"
              >
                Ongoing
                <br />
                Courses
              </div>
              <div
                className="text-[#FCA5A5] font-semibold leading-tight pt-1 [writing-mode:vertical-rl] rotate-180 text-[13px]"
              >
                currently happening—don&apos;t <br /> miss out on the action!
              </div>
            </div>

            <div className="flex justify-center items-start">
              <span
                className="font-black text-vrit-red leading-[0.8] text-[110px]"
              >
                10
              </span>
              <span
                className="font-black text-vrit-red relative top-2 ml-1 text-[40px]"
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
