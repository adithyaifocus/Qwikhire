import React from "react";
import { Link } from "react-router-dom";

import { blogData } from "../data/data";

import {FiClock, FiCalendar} from '../assets/icons/vander'

export default function Blogs(){
    let blogdata=blogData;
    console.log(blogdata)
    return(
        <>
        <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-6 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Research says</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Come lets explore the latest news related to the AI virtual Interviews</p>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
                    {blogdata.slice(0,3).map((item,index) => {
                        return(
                            <div className="relative bg-white dark:bg-slate-900 p-4 rounded-md shadow dark:shadow-gray-700" key={index}>
                                <a href={item.link} target="_blank"><img src={item.image} className="h-40 w-full rounded-md shadow dark:shadow-gray-700 object-cover" alt=""/></a>
                                <div className="pt-4">
                                    <div className="flex justify-between items-center">
                                        <div className="space-x-1">
                                            <Link to="" className="bg-amber-400/10 text-amber-500 dark:text-amber-400 text-[12px] font-semibold px-2.5 py-0.5 rounded h-5">AI</Link>
                                            <Link to="" className="bg-amber-400/10 text-amber-500 dark:text-amber-400 text-[12px] font-semibold px-2.5 py-0.5 rounded h-5">Technology</Link>
                                        </div>

                                        <span className="flex items-center"><FiClock className="h-4 w-4"/><span className="ms-1 text-slate-400">5 min read</span></span>
                                    </div>

                                    <div className="mt-5">
                                        <Link to={`/blog-detail/${item.id}`} className="text-lg font-semibold hover:text-amber-400">{item.title}</Link>
                                    </div>

                                    <div className="mt-5 flex justify-between items-center">
                                        <span className="flex items-center">
                                            {/* <img src={item.client} className="h-7 w-7 rounded-full" alt=""/> */}
                                            <Link to="" className="ms-1 text-slate-400 hover:text-amber-400">{item.author}</Link>
                                        </span>

                                        <span className="flex items-center"><FiCalendar className="h-4 w-4"/><span className="ms-1 text-slate-400">{item.date}</span></span>
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