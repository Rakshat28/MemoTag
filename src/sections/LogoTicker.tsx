"use client"
import Logo1 from '../../public/assets/logo1.svg'
import Logo2 from '../../public/assets/logo2.svg'
import Logo3 from '../../public/assets/logo3.svg'
import Logo4 from '../../public/assets/logo4.svg'
import Logo5 from '../../public/assets/logo5.svg'
import {motion} from "framer-motion"
export function LogoTicker(){
    return(
        <div className="py-8 md:py-12 bg-white mx-auto px-16 rounded-lg shadow-slate-900">
            <div className="container">
                <div className='flex flex-col items-center justify-center'>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#0f317c] text-transparent bg-clip-text mt-6 ">Trusted by Leading Eldercare Providers Worldwide</h2>
                    <p className="text-lg text-gray-600 tracking-tight my-6 ">MemoTag partners with top eldercare facilities, hospitals & neurologists to deliver the most advanced dementia care solutions across the globe.</p>
                </div>
                <div className="flex overflow-hidden mask-fade-x">
                <motion.div className="flex gap-14 flex-none pr-14" 
                animate={{
                    translateX: "-50%",
                }}
                transition={{
                    duration: 20,
                    ease: "linear",
                    repeat : Infinity,
                    repeatType: "loop",

                }}>
                    <Logo1 className=" w-auto"/>
                    <Logo2 className=" w-auto"></Logo2>
                    <Logo3 className=" w-auto"></Logo3>
                    <Logo4 className=" w-auto"></Logo4>
                    <Logo5 className=" w-auto"></Logo5>
                    <Logo1 className=" w-auto"/>
                    <Logo2 className=" w-auto"></Logo2>
                    <Logo3 className=" w-auto"></Logo3>
                    <Logo4 className=" w-auto"></Logo4>
                    <Logo5 className=" w-auto"></Logo5>
                </motion.div>
                </div>
            </div>
            
        </div>
    )
}