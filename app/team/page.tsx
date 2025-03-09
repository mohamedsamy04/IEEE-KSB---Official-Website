import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"

export default function ComingSoon() {
  return (
    <main className="min-h-screen bg-[#F8F9FA] flex flex-col justify-center items-center">
      <Nav />

      {/* Coming Soon Section */}
      <section className="flex flex-col justify-center items-center text-center px-4 md:px-10 mt-16 max-w-[1320px] mx-auto">
        <div className="bg-white rounded-[30px] p-8 md:p-12 shadow-[0_4px_20px_0px_rgba(0,0,0,0.05)]">
          <h1 className="text-[#03468F] font-bold text-[48px] leading-[58px]">
            Will be available later
          </h1>

          <p className="text-[#979797] text-xl leading-[30px] mt-6 max-w-[800px] mx-auto">
            We are working hard to bring you something great. Stay tuned for updates!
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
