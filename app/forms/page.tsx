import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Clock, Globe } from "lucide-react"
import Link from "next/link"

export default function Forms() {
  return (
    <main className="min-h-screen bg-[#ececec]">
      <Nav />

      <div className="max-w-[1320px] mx-auto px-4 md:px-10">
        <h1 className="text-2xl md:text-[24px] font-bold text-[#03458F] mt-8 md:mt-16 font-poppins">All Forms</h1>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mt-8">
          {/* Program Card 1 - Heads Recruitment */}
          <Link href="/forms/board" className="group">
            <div className="bg-white rounded-[20px] p-4 md:p-5 relative transition-shadow hover:shadow-lg">
              <div className="relative w-full aspect-[590/379]">
                <Image
                  src="/Mask group (1).svg"
                  alt="Heads Recruitment"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              <div className="mt-4">
                <h2 className="text-lg md:text-xl font-bold text-[#03468F] font-poppins group-hover:text-[#03468F]/80">
                  Season 2025 - Heads Recruitment
                </h2>

                <div className="flex items-center gap-4 md:gap-5 mt-4">
                  <div className="flex items-center gap-2">
                    <Globe className="w-[19px] h-[19px] text-[#979797]" />
                    <span className="text-[15px] md:text-[17px] font-medium text-[#979797] font-poppins">Board</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-[19px] h-[19px] text-[#979797]" />
                    <span className="text-[15px] md:text-[17px] font-medium text-[#979797] font-poppins">2025</span>
                  </div>
                </div>
              </div>

              {/* Form Icon */}
              <div className="absolute bottom-20 right-12 md:bottom-8 md:right-8 lg:bottom-12 lg:right-16 transition-all duration-300">
                <div className="relative w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] lg:w-[129px] lg:h-[129px] transition-all duration-300">
                  <Image
                    src="/Ellipse 5.svg"
                    alt="Circle Background"
                    fill
                    className="object-contain"
                  />
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[30px] h-[35px] sm:w-[40px] sm:h-[46px] md:w-[50px] md:h-[60px] lg:w-[70px] lg:h-[80px] transition-all duration-300">
                    <Image
                      src="/Group 29.svg"
                      alt="Form Icon"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Program Card 2 - Members Recruitment */}
          <Link href="/forms/members" className="group">
            <div className="bg-white rounded-[20px] p-4 md:p-5 relative transition-shadow hover:shadow-lg">
              <div className="relative w-full aspect-[590/379]">
                <Image
                  src="/Mask group (2).svg"
                  alt="Members Recruitment"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              <div className="mt-4">
                <h2 className="text-lg md:text-xl font-bold text-[#03468F] font-poppins group-hover:text-[#03468F]/80">
                  Season 2025 - Members Recruitment
                </h2>

                <div className="flex items-center gap-4 md:gap-5 mt-4">
                  <div className="flex items-center gap-2">
                    <Globe className="w-[19px] h-[19px] text-[#979797]" />
                    <span className="text-[15px] md:text-[17px] font-medium text-[#979797] font-poppins">
                      Committees
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-[19px] h-[19px] text-[#979797]" />
                    <span className="text-[15px] md:text-[17px] font-medium text-[#979797] font-poppins">2025</span>
                  </div>
                </div>
              </div>

              {/* Form Icon */}
              <div className="absolute bottom-20 right-12 md:bottom-8 md:right-8 lg:bottom-12 lg:right-16 transition-all duration-300">
                <div className="relative w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] lg:w-[129px] lg:h-[129px] transition-all duration-300">
                  <Image
                    src="/Ellipse 5.svg"
                    alt="Circle Background"
                    fill
                    className="object-contain"
                  />
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[30px] h-[35px] sm:w-[40px] sm:h-[46px] md:w-[50px] md:h-[60px] lg:w-[70px] lg:h-[80px] transition-all duration-300">
                    <Image
                      src="/Group 29.svg"
                      alt="Form Icon"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  )
}

