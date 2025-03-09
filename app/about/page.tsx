import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function About() {
  return (
    <main className="min-h-screen bg-[#F8F9FA]">
      <Nav />

      {/* One Family Section */}
      <section className="px-4 md:px-10 mt-16">
        <div className="max-w-[1320px] mx-auto">
          <div className="bg-white rounded-[30px] p-8 md:p-12 shadow-[0_4px_20px_0px_rgba(0,0,0,0.05)]">
            <div className="flex flex-col lg:flex-row items-start gap-12">
              {/* Left Image */}
              <div className="relative w-full lg:w-[630px] h-[331px]">
                <Image
                  src="/Mask group.svg"
                  alt="IEEE Members"
                  fill
                  className="object-cover rounded-2xl"
                  priority
                />
              </div>

              {/* Right Content */}
              <div className="w-full lg:w-[552px] pt-4">
                <h1 className="text-[#03468F] font-bold">
                  <div className="text-[32px] leading-[48px]">Many People</div>
                  <div className="text-[32px] leading-[48px]">One Heart & One Family</div>
                </h1>

                <p className="text-[#979797] text-base leading-[25px] mt-6">
                  "People rarely succeed unless they have fun in what they are doing." At IEEE, we're people-first,
                  meaning we encourage a fun work environment that puts others at ease, boosts energy, encourages
                  creativity, and undoubtedly increases our team productivity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is IEEE Section */}
      <section className="px-4 md:px-10 mt-16">
        <div className="max-w-[1320px] mx-auto">
          <div className="bg-white rounded-[30px] p-8 md:p-12 shadow-[0_4px_20px_0px_rgba(0,0,0,0.05)]">
            <div className="flex flex-col lg:flex-row items-start gap-12">
              {/* Left Content */}
              <div className="w-full lg:w-[578px]">
                <h2 className="text-[32px] font-bold text-[#03468F]">What is IEEE</h2>

                <p className="text-[#979797] text-base leading-[24px] mt-6">
                  IEEE, an organization dedicated to advancing innovation and technological excellence for the benefit
                  of humanity, is the world's largest technical professional society. It is designed to serve
                  professionals involved in all aspects of the electrical, electronic, and computing fields and related
                  areas of science and technology that underlie modern civilization.
                </p>

                {/* Stats */}
                <div className="flex gap-4 mt-8">
                  <div className="w-[230px] h-[139px] rounded-[70px] bg-[#03458F26] flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-[32px] font-bold text-[#03468F]">+1200</div>
                      <div className="text-[#03468F] text-base">Conference</div>
                    </div>
                  </div>

                  <div className="w-[230px] h-[139px] rounded-[70px] bg-[#03458F26] flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-[32px] font-bold text-[#03468F]">+200</div>
                      <div className="text-[#03468F] text-base">Journals, Magazines</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Illustration */}
              <div className="relative w-full lg:w-[601px] h-[380px]">
                <Image
                  src="/Group.svg"
                  alt="IEEE Illustration"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is IEEE Kafrelsheikh SB Section */}
      <section className="px-4 md:px-10 mt-16">
        <div className="max-w-[1320px] mx-auto">
          <div className="bg-white rounded-[30px] p-8 md:p-12 shadow-[0_4px_20px_0px_rgba(0,0,0,0.05)]">
            <div className="flex flex-col lg:flex-row items-start gap-12">
              {/* Left Illustration */}
              <div className="relative w-full lg:w-[311.23px] h-[411.23px]">
                <Image
                  src="/Group (1).svg"
                  alt="IEEE Kafrelsheikh SB Illustration"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Right Content */}
              <div className="w-full lg:w-[578px]">
                <h2 className="text-[32px] font-bold text-[#03468F] text-center lg:text-left font-poppins leading-[48px] mb-4">
                  What is IEEE Kafrelsheikh SB
                </h2>

                <p className="text-[#979797] text-base leading-6 font-poppins mb-6">
                  The IEEE Kafrelsheikh Student Branch is the leading organization in Kafrelsheikh city that works to
                  build, innovate and inspire the technical community, working to spread and educate the community about
                  current and future technologies, influencing all aspects of society, scientific and practical, and
                  works to build a better community and leaders with a societal impact.
                </p>

                <div className="mt-10">
                  <h3 className="text-[19px] font-bold text-[#656565] font-poppins leading-[28.5px] mb-2">
                    Aim of our Season
                  </h3>
                  <p className="text-[#979797] text-base leading-6 font-poppins">
                    We aim to develop our own team, influence the community in all its aspects, and leave an impact
                    locally, regionally and internationally.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Need Help Section */}
      <section className="px-4 md:px-10 mt-16 mb-16">
        <div className="max-w-[1320px] mx-auto">
          <div className="bg-[#FFE288] rounded-[30px] py-10 px-4 text-center">
            <h2 className="text-[32px] font-bold text-[#20466E] mb-4">Need Help ?</h2>
            <p className="text-[#03458F82] text-base max-w-[874px] mx-auto mb-8">
              We aim to develop our own team, influence the community in all its aspects, and leave an impact locally,
              regionally and internationally.
            </p>
            <button className="bg-[#20466E] text-white font-bold text-[17px] px-8 py-3 rounded-lg hover:bg-[#20466E]/90 transition-colors">
              CONTACT US
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

