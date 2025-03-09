"use client"

import type React from "react"

import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { useState } from "react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export default function BoardForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    nationalId: "",
    age: "",
    city: "",
    address: "",
    faculty: "",
    department: "",
    level: "",
    previousMember: "",
    season: "",
    position: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <main className="min-h-screen bg-[#F8F9FA]">
      <Nav />

      <div className="max-w-[1400px] mx-auto px-4 md:px-6 py-8 md:py-12">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-[24px] font-bold text-[#03458F] font-poppins mb-2">
            Season 2025 - Board Recruitment
          </h1>
          <p className="text-[16px] font-normal text-[#03458F82] font-poppins">
            Fill in this form and someone from our team will contact you soon!
          </p>
        </div>

        {/* Main Form Container */}
        <div className="max-w-[700px] mx-auto bg-white rounded-[30px] p-6 md:p-10">
          {/* Hero Image */}
          <div className="relative w-full h-[237px] mb-6">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mask%20group-CCOzfNX9OFA3mTh1zqeeAuwbhp7rfn.svg"
              alt="IEEE Recruitment"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Description */}
          <p className="text-[14px] text-[#767676] font-poppins leading-[25px] mb-12">
            IEEE is Institute of Electrical and Electronics Engineers. Founded in 1963, IEEE has since grown into a
            global community of over 400,000 members from academia, industry, and government sectors. IEEE KSB is an
            abbreviation for IEEE Kafrelsheikh University Student Branch. It is one of 65 Branches across Egyptian
            Universities. Note: All Answers in English ONLY
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Input */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-[#005682] font-medium flex items-center">
                  Name <span className="text-[#EE5B5B] ml-1 font-poppins text-[14px] leading-[9px]">*</span>
                </Label>
                <Input
                  id="name"
                  placeholder="Ex. Muhammed Ahmed"
                  className="h-[50px] rounded-[15px] bg-[#E8E8E8] border-none placeholder:text-[#A3A3A3] placeholder:text-[13px] placeholder:font-poppins focus:border-[yellow] focus:ring-[#005682]"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              {/* Email Input */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-[#005682] font-medium flex items-center">
                  Email <span className="text-[#EE5B5B] ml-1 font-poppins text-[14px] leading-[9px]">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Ex. example@gmail.com"
                  className="h-[50px] rounded-[15px] bg-[#E8E8E8] border-none placeholder:text-[#A3A3A3] placeholder:text-[13px] placeholder:font-poppins focus:border-[#005682] focus:ring-[#005682]"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              {/* Mobile Number */}
              <div className="space-y-2">
                <Label htmlFor="mobile" className="text-[#005682] font-medium flex items-center">
                  Mobile Number <span className="text-[#EE5B5B] ml-1 font-poppins text-[14px] leading-[9px]">*</span>
                </Label>
                <Input
                  id="mobile"
                  placeholder="Ex. 01xxxxxxxxx"
                  className="h-[50px] rounded-[15px] bg-[#E8E8E8] border-none placeholder:text-[#A3A3A3] placeholder:text-[13px] placeholder:font-poppins focus:border-[#005682] focus:ring-[#005682]"
                  value={formData.mobile}
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                />
              </div>

              {/* National ID */}
              <div className="space-y-2">
                <Label htmlFor="nationalId" className="text-[#005682] font-medium flex items-center">
                  National ID <span className="text-[#EE5B5B] ml-1 font-poppins text-[14px] leading-[9px]">*</span>
                </Label>
                <Input
                  id="nationalId"
                  placeholder="Ex. 30101011234567"
                  className="h-[50px] rounded-[15px] bg-[#E8E8E8] border-none placeholder:text-[#A3A3A3] placeholder:text-[13px] placeholder:font-poppins focus:border-[#005682] focus:ring-[#005682]"
                  value={formData.nationalId}
                  onChange={(e) => setFormData({ ...formData, nationalId: e.target.value })}
                />
              </div>

              {/* Age */}
              <div className="space-y-2">
                <Label htmlFor="age" className="text-[#005682] font-medium flex items-center">
                  Age <span className="text-[#EE5B5B] ml-1 font-poppins text-[14px] leading-[9px]">*</span>
                </Label>
                <Input
                  id="age"
                  placeholder="Ex. 20"
                  className="h-[50px] rounded-[15px] bg-[#E8E8E8] border-none placeholder:text-[#A3A3A3] placeholder:text-[13px] placeholder:font-poppins focus:border-[#005682] focus:ring-[#005682]"
                  value={formData.age}
                  onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                />
              </div>

              {/* City */}
              <div className="space-y-2">
                <Label htmlFor="city" className="text-[#005682] font-medium flex items-center">
                  City <span className="text-[#EE5B5B] ml-1 font-poppins text-[14px] leading-[9px]">*</span>
                </Label>
                <Input
                  id="city"
                  placeholder="Ex. Kafr El-Sheikh"
                  className="h-[50px] rounded-[15px] bg-[#E8E8E8] border-none placeholder:text-[#A3A3A3] placeholder:text-[13px] placeholder:font-poppins focus:border-[#005682] focus:ring-[#005682]"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                />
              </div>
            </div>

            {/* Address */}
            <div className="space-y-2">
              <Label htmlFor="address" className="text-[#005682] font-medium flex items-center">
                Address <span className="text-[#EE5B5B] ml-1 font-poppins text-[14px] leading-[9px]">*</span>
              </Label>
              <Input
                id="address"
                placeholder="Ex. 123 Street Name"
                className="h-[50px] rounded-[15px] bg-[#E8E8E8] border-none placeholder:text-[#A3A3A3] placeholder:text-[13px] placeholder:font-poppins focus:border-[#005682] focus:ring-[#005682]"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Faculty */}
              <div className="space-y-2">
                <Label htmlFor="faculty" className="text-[#005682] font-medium flex items-center">
                  Faculty <span className="text-[#EE5B5B] ml-1 font-poppins text-[14px] leading-[9px]">*</span>
                </Label>
                <Input
                  id="faculty"
                  placeholder="Ex. Computer Science"
                  className="h-[50px] rounded-[15px] bg-[#E8E8E8] border-none placeholder:text-[#A3A3A3] placeholder:text-[13px] placeholder:font-poppins focus:border-[#005682] focus:ring-[#005682]"
                  value={formData.faculty}
                  onChange={(e) => setFormData({ ...formData, faculty: e.target.value })}
                />
              </div>

              {/* Department */}
              <div className="space-y-2">
                <Label htmlFor="department" className="text-[#005682] font-medium flex items-center">
                  Department <span className="text-[#EE5B5B] ml-1 font-poppins text-[14px] leading-[9px]">*</span>
                </Label>
                <Input
                  id="department"
                  placeholder="Ex. Computer Science"
                  className="h-[50px] rounded-[15px] bg-[#E8E8E8] border-none placeholder:text-[#A3A3A3] placeholder:text-[13px] placeholder:font-poppins focus:border-[#005682] focus:ring-[#005682]"
                  value={formData.department}
                  onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                />
              </div>
            </div>

            {/* Level */}
            <div className="bg-[#FAFAFA] p-5 rounded-[15px]">
              <Label className="text-[#005682] font-medium mb-4 block flex items-center">
                Level <span className="text-[#EE5B5B] ml-1 font-poppins text-[14px] leading-[9px]">*</span>
              </Label>
              <RadioGroup onValueChange={(value) => setFormData({ ...formData, level: value })} className="space-y-2">
                {[1, 2, 3, 4].map((level) => (
                  <div key={level} className="flex items-center space-x-2">
                    <RadioGroupItem
                      value={level.toString()}
                      id={`level-${level}`}
                      className="w-[13px] h-[13px] border border-[#B9B9B9] before:w-[7px] before:h-[7px] before:bg-[#005682] focus:border-[#005682] focus:ring-[#005682]"
                    />
                    <Label htmlFor={`level-${level}`} className="text-[#8B8B8B] text-[14px] font-poppins font-normal">
                      Level {level}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            {/* Previous Member */}
            <div className="space-y-2">
              <Label className="text-[#005682] font-medium flex items-center">
                Were you an IEEE member before?{" "}
                <span className="text-[#EE5B5B] ml-1 font-poppins text-[14px] leading-[9px]">*</span>
              </Label>
              <div className="bg-[#FAFAFA] p-5 rounded-[15px]">
                <RadioGroup
                  onValueChange={(value) => setFormData({ ...formData, previousMember: value })}
                  className="space-y-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="yes"
                      id="previous-yes"
                      className="w-[13px] h-[13px] border border-[#B9B9B9] before:w-[7px] before:h-[7px] before:bg-[#005682] focus:border-[#005682] focus:ring-[#005682]"
                    />
                    <Label htmlFor="previous-yes" className="text-[#8B8B8B] text-[14px] font-poppins font-normal">
                      Yes
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="no"
                      id="previous-no"
                      className="w-[13px] h-[13px] border border-[#B9B9B9] before:w-[7px] before:h-[7px] before:bg-[#005682] focus:border-[#005682] focus:ring-[#005682]"
                    />
                    <Label htmlFor="previous-no" className="text-[#8B8B8B] text-[14px] font-poppins font-normal">
                      No
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </div>

            {/* Season */}
            {formData.previousMember === "yes" && (
              <div className="space-y-2">
                <Label htmlFor="season" className="text-[#005682] font-medium flex items-center">
                  If yes, Which season? If no type N/A{" "}
                  <span className="text-[#EE5B5B] ml-1 font-poppins text-[14px] leading-[9px]">*</span>
                </Label>
                <Input
                  id="season"
                  placeholder="Ex. 2023"
                  className="h-[50px] rounded-[15px] bg-[#E8E8E8] border-none placeholder:text-[#A3A3A3] placeholder:text-[13px] placeholder:font-poppins focus:border-[#005682] focus:ring-[#005682]"
                  value={formData.season}
                  onChange={(e) => setFormData({ ...formData, season: e.target.value })}
                />
              </div>
            )}

            {/* Position Selection */}
            <div className="space-y-2">
              <Label className="text-[#005682] font-medium flex items-center">
                Which Position are you applying for?{" "}
                <span className="text-[#EE5B5B] ml-1 font-poppins text-[14px] leading-[9px]">*</span>
              </Label>
              <div className="bg-[#FAFAFA] p-5 rounded-[15px]">
                <RadioGroup
                  onValueChange={(value) => setFormData({ ...formData, position: value })}
                  className="space-y-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="head"
                      id="position-head"
                      className="w-[13px] h-[13px] border border-[#B9B9B9] before:w-[7px] before:h-[7px] before:bg-[#005682] focus:border-[#005682] focus:ring-[#005682]"
                    />
                    <Label htmlFor="position-head" className="text-[#8B8B8B] text-[14px] font-poppins font-normal">
                      Head
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="vice-head"
                      id="position-vice-head"
                      className="w-[13px] h-[13px] border border-[#B9B9B9] before:w-[7px] before:h-[7px] before:bg-[#005682] focus:border-[#005682] focus:ring-[#005682]"
                    />
                    <Label htmlFor="position-vice-head" className="text-[#8B8B8B] text-[14px] font-poppins font-normal">
                      Vice Head
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full h-[50px] bg-[#005682] text-white font-bold text-[16px] rounded-[15px] hover:bg-[#005682]/90 transition-colors"
            >
              Send
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </main>
  )
}

