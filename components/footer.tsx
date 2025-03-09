import Image from "next/image"
import Link from "next/link"
import { Mail, Send } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full px-4 md:px-6 mb-8 ">
      <div className="max-w-[1320px] mx-auto">
        <div className="bg-white rounded-[30px] p-8 md:p-12 shadow-[0_4px_20px_0px_rgba(0,0,0,0.05)] mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Logo and Description */}
            <div className="space-y-6">
              <div className="relative w-[193px] h-[69px]">
                <Image
                  src="/Logo.svg"
                  alt="IEEE Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-base leading-6 font-poppins text-[#20466E7A] max-w-[360px]">
                The IEEE Kafrelsheikh Student Branch is the leading organization in Kafrelsheikh city that works to
                build, innovate and inspire the technical community
              </p>
              <div className="flex items-center gap-[18px]">
                <Link href="#" className="block">
                  <Image
                    src="/Frame-2.svg"
                    alt="Instagram"
                    width={34}
                    height={34}
                  />
                </Link>
                <Link href="#" className="block">
                  <Image
                    src="/Frame.svg"
                    alt="LinkedIn"
                    width={34}
                    height={34}
                  />
                </Link>
                <Link href="#" className="block">
                  <Image
                    src="/Group3.svg"
                    alt="Twitter"
                    width={34}
                    height={34}
                  />
                </Link>
                <Link href="#" className="block">
                  <Image
                    src="/Frame-1.svg"
                    alt="Facebook"
                    width={34}
                    height={34}
                  />
                </Link>
              </div>
            </div>

            {/* Sitemap */}
            <div className="space-y-6">
              <h3 className="text-[24px] font-semibold text-[#03458F] font-poppins">Sitmap</h3>
              <nav className="flex gap-x-16">
                <div className="space-y-3">
                  <Link href="/" className="block text-base text-[#20466E7A] font-poppins hover:text-[#03458F]">
                    Home
                  </Link>
                  <Link href="/about" className="block text-base text-[#20466E7A] font-poppins hover:text-[#03458F]">
                    About
                  </Link>
                  <Link href="/team" className="block text-base text-[#20466E7A] font-poppins hover:text-[#03458F]">
                    Team
                  </Link>
                </div>
                <div className="space-y-3">
                  <Link href="/events" className="block text-base text-[#20466E7A] font-poppins hover:text-[#03458F]">
                    Events
                  </Link>
                  <Link href="/contact" className="block text-base text-[#20466E7A] font-poppins hover:text-[#03458F]">
                    Forms
                  </Link>
                </div>
              </nav>
            </div>

            {/* Join The Family */}
            <div className="space-y-6">
              <h3 className="text-[24px] font-semibold text-[#03458F] font-poppins">Join The Family</h3>
              <p className="text-base text-[#20466E7A] font-poppins max-w-[407px]">
                Sign-up for the latest news, offers, and much more.
              </p>
              <div className="flex">
                <div className="relative flex-1">
                  <div className="absolute left-5 top-1/2 -translate-y-1/2">
                    <Mail className="w-[28px] h-[21px] text-[#727272]" />
                  </div>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full h-[53px] bg-[#EDEDED] rounded-l-[10px] pl-14 pr-4 text-base font-poppins placeholder:text-[#BCBCBC] focus:outline-none"
                  />
                </div>
                <button className="w-[53px] h-[53px] bg-[#03458F] rounded-r-[10px] flex items-center justify-center hover:bg-[#03458F]/90 transition-colors">
                  <Send className="w-[22px] h-[23px] text-white" />
                </button>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-16 text-center">
            <p className="text-[14px] leading-[21px] font-poppins">
              <span className="text-[#979797]">2025 IEEE | All Rights Reserved - Developed by </span>
              <Link href="https://portfolio-psi-two-81.vercel.app/" className="text-[#03458F]">
                Mohamed Samy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

