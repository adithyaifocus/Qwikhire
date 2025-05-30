import React from "react";
import { Link } from "react-router-dom";
import Client1 from '../assets/images/client/01.jpg'
import Client2 from '../assets/images/client/02.jpg'
import Client3 from '../assets/images/client/03.jpg'
import Client4 from '../assets/images/client/04.jpg'
import Client5 from '../assets/images/client/05.jpg'
import Client6 from '../assets/images/client/06.jpg'
import Client7 from '../assets/images/client/07.jpg'
import Client8 from '../assets/images/client/08.jpg'

export default function ClientsTwo() {
    let testimonials = [
        {
            name: "Aarav Mehta",
            role: "User",
            review: "The AI interview platform has reduced our screening time by over 60%. It shortlists the right candidates quickly and gives us detailed insights we never had before"
        },
        {
            name: "Sanya Kapoor",
            role: "User",
            review: "We were initially skeptical, but the automated video interviews and AI scoring turned out to be a game-changer. It’s like having an extra recruiter working 24/7."
        },
        {
            name: "Rohan Deshmukh",
            role: "User",
            review: "The structured AI feedback helps us identify high-potential candidates we might have otherwise overlooked. It adds an unbiased layer to our decision-making process"
        },
        {
            name: "Priya Nair",
            role: "User",
            review: "What I love is how fast and data-driven the interviews have become. We can now fill roles faster, with better fit, and a lot less back-and-forth."
        },
        {
            name: "Karan Malhotra",
            role: "User",
            review: "The AI Interview Platform helped us streamline our hiring process. We could screen 50+ candidates in half the time, without compromising quality. Truly a game-changer!"
        },
        {
            name: "Neha Verma",
            role: "User",
            review: "I was initially skeptical, but the voice-based interviews felt surprisingly human. The fluency and clarity scoring gave me great insight into each candidate’s communication skills."
        },
        {
            name: "Vikram Joshi",
            role: "User",
            review: "The coding section is fantastic. Real-time execution, test case validation, and detailed feedback helped us assess technical skills more objectively than ever before."
        },
        {
            name: "Hemanth kumar",
            role: "User",
            review: "From culture fit estimation to conversational assessments, the platform made it easier to identify top talent. We saw a 30% increase in hiring efficiency!"
        },
        
    ]
    return (
        <>
            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-6 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">What Our Users Say</h3>

                    {/* <p className="text-slate-400 max-w-xl mx-auto">Artificial intelligence makes it fast easy to create content for your blog, social media, website, and more!</p> */}
                </div>
            </div>

            <div className="container-fluid relative overflow-hidden">
                <div className="grid grid-cols-1 mt-6">
                    <div className="slider relative overflow-hidden m-auto mb-4 before:content-[''] before:absolute before:top-0 before:start-0 before:z-2 after:content-[''] after:absolute after:top-0 after:end-0 after:z-2">

                        <div className="slide-track flex items-center">
                            {testimonials.map((item, index) => {
                                return (
                                    <div className="slide h-auto md:w-[500px] w-72 m-2">
                                        <div className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-amber-400">
                                            <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                                <img src={Client1} className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt="" />

                                                <div className="ps-4">
                                                    <Link to="" className="text-lg hover:text-amber-400 duration-500 ease-in-out">{item.name}</Link>
                                                    <p className="text-slate-400">{item.role}</p>
                                                </div>
                                            </div>

                                            <div className="mt-6">
                                                <p className="text-slate-400">{item.review}</p>
                                                <ul className="list-none mb-0 text-amber-400 mt-2">
                                                    <li className="inline"><i className="mdi mdi-star"></i></li>
                                                    <li className="inline"><i className="mdi mdi-star"></i></li>
                                                    <li className="inline"><i className="mdi mdi-star"></i></li>
                                                    <li className="inline"><i className="mdi mdi-star"></i></li>
                                                    <li className="inline"><i className="mdi mdi-star"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                            {testimonials.map((item, index) => {
                                return (
                                    <div className="slide h-auto md:w-[500px] w-72 m-2">
                                        <div className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-amber-400">
                                            <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                                <img src={Client1} className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt="" />

                                                <div className="ps-4">
                                                    <Link to="" className="text-lg hover:text-amber-400 duration-500 ease-in-out">{item.name}</Link>
                                                    <p className="text-slate-400">{item.role}</p>
                                                </div>
                                            </div>

                                            <div className="mt-6">
                                                <p className="text-slate-400">{item.review}</p>
                                                <ul className="list-none mb-0 text-amber-400 mt-2">
                                                    <li className="inline"><i className="mdi mdi-star"></i></li>
                                                    <li className="inline"><i className="mdi mdi-star"></i></li>
                                                    <li className="inline"><i className="mdi mdi-star"></i></li>
                                                    <li className="inline"><i className="mdi mdi-star"></i></li>
                                                    <li className="inline"><i className="mdi mdi-star"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}