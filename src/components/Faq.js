import React, { useState } from "react";
import { Link } from "react-router-dom";

import {MdKeyboardArrowDown} from '../assets/icons/vander'

export default function Faq(){
    const [activeIndex, setActiveIndex] = useState(1)
    const accordionData = [
        {
            id:1,
            title:'How does the AI evaluate candidates?',
            desc:'Our AI analyzes multiple data points such as voice clarity, confidence, grammar, coding accuracy, and response relevance using natural language processing and machine learning algorithms. It ensures a fair, consistent, and unbiased evaluation for every candidate.'
        },
        {
            id:2,
            title:' Can I customize interview rounds for different positions?',
            desc:'Yes, our platform supports customizable interview flows. You can define general, role-specific, aptitude, and coding rounds based on the requirements of each position.'
        },
        {
            id:3,
            title:'Is the AI interview secure and proctored?',
            desc:'Absolutely. We offer advanced proctoring features including face detection, gaze tracking, and periodic screenshot capture to ensure the candidate’s presence and integrity during the interview.'
        },
        {
            id:4,
            title:'How are the final scores and remarks generated?',
            desc:'After each interview, the AI generates scores out of 100 based on the candidate’s performance across all rounds. It also provides remarks on fluency, clarity, grammar, and confidence, each rated out of 10, to help recruiters make informed decisions.'
        },
    ]
    return(
        <>
        <div className="container relative md:mt-24 mt-16">
                <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center md:gap-[30px]">
                    <div className="lg:col-span-4 md:mb-0 mb-8">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Have a question?</h3>

                        <p className="text-slate-400 max-w-xl mx-auto mb-6">Artificial intelligence makes it fast easy to create content for your blog, social media, website, and more!</p>

                        <Link to="/contact" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-transparent hover:bg-amber-400 border-gray-100 dark:border-gray-800 hover:border-amber-400 dark:hover:border-amber-400 text-slate-900 dark:text-white hover:text-white rounded-md">Contact Us</Link>
                    </div>

                    <div className="lg:col-span-8 md:mt-0 mt-8">
                        {accordionData.map((item,index)=>{
                            return(
                                <div className="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden mt-4" key={index}>
                                    <h2 className="text-base font-semibold" id="accordion-collapse-heading-1">
                                        <button type="button" onClick={()=>setActiveIndex(item.id)} className={`${activeIndex === item.id ? "bg-gray-50 dark:bg-slate-800 text-amber-400" : ""} flex justify-between items-center p-5 w-full font-medium text-start`}>
                                            <span>{item.title}</span>
                                            <MdKeyboardArrowDown className={`${activeIndex === item.id ? "rotate-180" : ""} w-4 h-4 shrink-0`}/>
                                        </button>
                                    </h2>
                                    <div className={activeIndex === item.id ? "" : "hidden"}>
                                        <div className="p-5">
                                            <p className="text-slate-400 dark:text-gray-400">{item.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div> 
        </>
    )
}