"use client"

import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Team", href: "/team" },
  { name: "Events", href: "/events" },
  { name: "Forms", href: "/forms" },
]

export function Nav() {
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  return (
    <div className={cn("w-full px-4 md:px-6", !isHomePage && "mt-8")}>
      <nav
        className={cn(
          "flex items-center justify-between max-w-[1320px] mx-auto px-6 py-5",
          !isHomePage && "bg-white rounded-[30px] shadow-[0_4px_20px_0px_rgba(0,0,0,0.05)]",
        )}
      >
        <Link href="/" className="relative w-[107px] h-[38px]">
          <Image
            src="/Logo.svg"
            alt="IEEE Logo"
            fill
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "px-4 py-2 text-sm font-medium transition-colors rounded-lg text-[#03468F]",
                pathname === item.href ? "bg-[#E8EDF5]" : "hover:bg-[#E8EDF5]",
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-[#03468F]">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col gap-4 mt-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "px-4 py-3 text-base font-medium transition-colors rounded-lg text-[#03468F]",
                    pathname === item.href ? "bg-[#E8EDF5]" : "hover:bg-[#E8EDF5]",
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  )
}

