import Image from "next/image"
import { Check } from "lucide-react"

export function FillerSection() {
  return (
    <div className="w-full px-4 py-16 md:py-24 lg:py-32 relative overflow-hidden bg-[#F0F8FF] rounded-xl">
      <div className="container mx-auto rounded-xl">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            <div className="relative w-full max-w-md">
            {/* Circular image with blue border */}
            <div className="relative z-10">
                <div className="w-[300px] h-[300px] md:w-[380px] md:h-[380px] rounded-full overflow-hidden border-[20px] border-blue-100 mx-auto">
                <Image
                    src="/assets/Elder-Care-Bangalore.png"
                    alt="Caregiver with elderly person"
                    width={380}
                    height={380}
                    className="object-cover w-full h-full"
                    priority
                />
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-1/2 right-0 w-1/2 h-1/2 border-r-2 border-dashed border-blue-200 z-0"></div>
            </div>

            <div className="w-full max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Support for <span className="text-blue-600">Caregivers</span>
                <br />
                at Every Step
            </h1>

            <p className="text-lg text-gray-700 mb-8">
                MemoTag provides caregivers with essential tools and a community for support, ensuring that care is
                seamless, informed, and collaborative.
            </p>

            <div className="space-y-3 mb-8">
                <div className="flex items-center gap-2">
                <Check className="text-green-600 w-5 h-5" />
                <span className="text-gray-800">Caregiver Community Access</span>
                </div>
                <div className="flex items-center gap-2">
                <Check className="text-green-600 w-5 h-5" />
                <span className="text-gray-800">Summarized AI Reports</span>
                </div>
                <div className="flex items-center gap-2">
                <Check className="text-green-600 w-5 h-5" />
                <span className="text-gray-800">Expert Support & Resources</span>
                </div>
            </div>

            <a href="#_" className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-blue-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-blue-700 to-[#0035E8]"></span>
                <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-[#0035E8] rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                <span className="relative text-white">Learn More</span>
            </a>
            </div>
        </div>
    </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-1/2 w-1/2 h-32 border-b-2 border-dashed border-blue-200 z-0"></div>
    </div>
  )
}
