import { Nav } from "@/components/nav"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#ececec]">
      <div className="max-w-[1320px] mx-auto">
        <div className="bg-[#FFF] rounded-[30px] m-[30px] style={{ maxHeight: 'calc(100vh - 60px)' }} ">
          <Nav />

          {/* Hero Section */}
          <div className="px-6 md:px-10 py-10 md:py-20">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
              {/* Left Content */}
              <div className="w-full lg:w-[540px] space-y-5">
                <h1 className="text-4xl md:text-5xl lg:text-[60px] font-bold leading-tight text-[#03468F]">
                  Develop Today Create Tomorrow
                </h1>

                <h2 className="text-2xl md:text-3xl font-medium text-[#03468FD4]">Welcome to IEEE Kafrelsheikh SB</h2>

                <p className="text-base md:text-lg text-[#979797] leading-relaxed">
                  The IEEE Kafrelsheikh Student Branch is the leading organization in Kafrelsheikh city that works to
                  build, innovate and inspire the technical community
                </p>

                <Link
                  href="/about"
                  className="inline-block bg-[#03468F] text-white font-bold px-8 py-3 rounded-lg hover:bg-[#03468F]/90 transition-colors"
                >
                  KNOW MORE
                </Link>
              </div>

              {/* Right Illustration */}
              <div className="relative w-full lg:w-[559px] aspect-square">
                <Image
                  src="/J61WggWK5m-17 1.svg"
                  alt="Network Illustration"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

