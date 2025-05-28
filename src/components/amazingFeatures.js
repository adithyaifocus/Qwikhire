import React from "react";
import { Link } from "react-router-dom";

export default function AmazingFeatures(){
    const featureData = [
        {
            icon:"mdi mdi-account-search-outline ",
            title:'Automated Candidate Screening',
            desc:'The phrasal sequence of the is now so that many campaign and benefit'
        },
        {
            icon:"mdi mdi-email-edit-outline",
            title:'Auto JD creation',
            desc:'The phrasal sequence of the is now so that many campaign and benefit'
        },
        {
            icon:"mdi mdi-chart-bar",
            title:'Real-Time Analytics Dashboard',
            desc:'The phrasal sequence of the is now so that many campaign and benefit'
        },
        {
            icon:"mdi mdi-bookmark-outline",
            title:'Bias Reduction & Fair Hiring',
            desc:'The phrasal sequence of the is now so that many campaign and benefit'
        },
        {
            icon:"mdi mdi-account-check-outline",
            title:'AI-Powered Candidate Scoring',
            desc:'The phrasal sequence of the is now so that many campaign and benefit'
        },
        {
            icon:"mdi mdi-comment-outline",
            title:'Create recruitment content with ease',
            desc:'The phrasal sequence of the is now so that many campaign and benefit'
        },
        {
            icon:"mdi mdi-video",
            title:'Smart Video Interviews',
            desc:'The phrasal sequence of the is now so that many campaign and benefit'
        },
        {
            icon:"mdi mdi-alert-octagon",
            title:'Cheating Detection',
            desc:'The phrasal sequence of the is now so that many campaign and benefit'
        },
        {
            icon:"mdi mdi-file-export",
            title:'Integrate with your ATS',
            desc:'The phrasal sequence of the is now so that many campaign and benefit'
        },
    ]
    return(
        <>
        <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-6 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Amazing Features</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Features are the ones which make complex work easier</p>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
                    {featureData.map((item, index) =>{
                        return(
                            <div className="px-6 py-10 shadow hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 duration-500 rounded-lg bg-white dark:bg-slate-900" key={index}>
                                <i className={`${item.icon} text-4xl bg-gradient-to-tl to-amber-400 from-fuchsia-600 text-transparent bg-clip-text`}></i>
        
                                <div className="content mt-7">
                                    <Link to="" className="title h5 text-lg font-medium hover:text-amber-400 duration-500">{item.title}</Link>
                                    <p className="text-slate-400 mt-3">{item.desc}</p>
                                    
                                    <div className="mt-5">
                                        <Link to="" className="hover:text-amber-400 font-medium duration-500">Read More <i className="mdi mdi-arrow-right align-middle"></i></Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}