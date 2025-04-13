import React from 'react'

export function Solutions(){
  return (
    <div className="container w-auto px-4 pt-16 md:py-24  bg-white">
    <div className="grid grid-cols-1 md:grid-cols-[7fr_3fr] gap-6 mb-4">
        <div className="bg-[#2E6DFF] overflow-hidden rounded-3xl flex flex-col md:flex-row justify-between">
            <div className="md:w-[60%] w-full mt-2 sm:px-[50px] md:px-[70px] pt-4 md:pt-[40px] px-8">
                <h2 className="text-white font-normal text-[20px] md:text-3xl lg:text-4xl leading-tight">
                    Evolving <br /><span className="text-white font-bold">Dementia Care</span>with AI-Driven Solutions
                </h2>
                <p className="text-white opacity-60 mt-4 text-sm md:text-base">
                    MemoTag integrates AI &amp; data analytics to deliver personalized care solutions, cognitive stimulation with peace of mind.
                </p>
            </div>
            <div className="md:w-[40%] md:h-[100%] w-full mt-5 md:mt-2 flex justify-center items-end">
                    {/* Image */}
            </div>
            </div>
            <div className="bg-[#00114A] text-white rounded-3xl p-7 flex flex-col items-center justify-center">
                <ul className="space-y-2 p-1 md:p-5">
                    <li className="flex items-start">
                        <span className="mt-2 flex items-center justify-center w-10 h-5 text-lg font-thin mr-4 bg-white rounded-full text-black">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path fill="none" d="M0 0h24v24H0V0z">
                                </path>
                                <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z">
                                </path>
                            </svg>
                        </span>
                        <p className="text-sm md:text-[14px] text-white">
                            AI tracks patient behavior to predict cognitive decline, enabling early intervention.
                        </p>
                    </li>
                    <li className="flex items-start">
                        <span className="mt-2 flex items-center justify-center w-10 h-5 text-lg font-thin mr-4 bg-white rounded-full text-black">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path fill="none" d="M0 0h24v24H0V0z"></path><path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z">
                            </path>
                            </svg>
                        </span>
                        <p className="text-sm md:text-[14px] text-white">
                            AI analyzes speech patterns for personalized cognitive therapy and progress tracking.
                        </p>
                    </li>
                    <li className="flex items-start">
                        <span className="mt-2 flex items-center justify-center w-10 h-5 text-lg font-thin mr-4 bg-white rounded-full text-black">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path fill="none" d="M0 0h24v24H0V0z">
                            </path>
                            <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z">
                            </path>
                            </svg>
                        </span>
                        <p className="text-sm md:text-[14px] text-white">
                            Physical activity tracking helps identify future risks and provides proactive care recommendations.
                        </p>
                    </li>
                </ul>
                <a href="/waitlist-form">
                    <button className="mt-5 py-3 px-6 bg-gradient-to-r from-[#003AFC] via-[#5177F5] to-[#003AFC] border-2 border-[#C2D0FF] text-white text-sm md:text-base font-medium rounded-full shadow-lg flex items-center justify-center transition duration-300 ">
                        Exclusive Insights
                        <span className="ml-2 flex items-center justify-center w-6 h-6 rounded-full bg-white text-black">
                            <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.5253 5.49475L10.5206 7.49475L15.0782 7.50541L5.47473 17.0896L6.88752 18.5052L16.5173 8.89479L16.5065 13.5088L18.5065 13.5134L18.5253 5.51345L10.5253 5.49475Z" fill="currentColor">
                            </path>
                            </svg>
                        </span>
                    </button>
                </a>
            </div>
        </div>
    </div>
  )
}

