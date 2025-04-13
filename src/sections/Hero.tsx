import WhatsAppButton from "@/components/WhatsAppButton";
import PreOrderButton from "@/components/PreOrderButton";
import cogImage from "@/assets/cog.png"
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_80%)] overflow-x-clip">
      <div className="container mx-auto px-16">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E00] text-transparent bg-clip-text mt-6"><span className="text-[#0035E8]">AI Driven</span> Wearables for
            Proactive Caregiving</h1>
            <p className="text-xl text-[#0010D3E] tracking-tight mt-6">Empowering caregivers with real-time insights, safety alerts, and cognitive health tracking for loved ones.</p>
            <div className="flex gap-1 items-center mt-[30px] md:hidden">
              <PreOrderButton>
                Pre-Order Now
              </PreOrderButton>
              <WhatsAppButton>
                Join Us
              </WhatsAppButton>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <Image src={cogImage} alt="CogImage" className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"></Image>
          </div>
        </div>
      </div>
    </section>
  )
};
