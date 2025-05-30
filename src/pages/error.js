import React from "react";
import { Link } from "react-router-dom";

import logoLight from "../assets/images/logo-light.png"
import logoDark from "../assets/images/logo-dark.png"
import errorImg from "../assets/images/error.svg"
import Switcher from "../components/switcher";

export default function Error() {
  return (
    <>
      <section className="min-h-screen flex items-center justify-center bg-amber-400/5 dark:bg-amber-400/10 px-4">
        <div className="max-w-3xl w-full text-center">

          {/* Logo */}
          <Link to="/" className="inline-block mb-6">
            <img src={logoDark} className="mx-auto block dark:hidden h-14 md:h-16" alt="logo" />
            <img src={logoLight} className="mx-auto hidden dark:block h-14 md:h-16" alt="logo" />
          </Link>

          {/* Image */}
          <img
            src={errorImg}
            className="mx-auto w-40 md:w-60 h-40 md:h-60 object-contain mb-6"
            alt="404 Error"
          />


          {/* Text */}
          <h5 className="text-3xl md:text-5xl font-bold tracking-wide mb-4">
            Page Not Found
          </h5>
          <p className="text-slate-500 dark:text-white/70 max-w-xl mx-auto text-base md:text-lg leading-relaxed">
            Artificial intelligence makes it fast and easy to create content for your blog, social media, website, and more!
          </p>

          {/* Button */}
          <div className="mt-6">
            <Link
              to="/"
              className="inline-block px-6 py-2 text-white font-semibold text-base rounded-md bg-amber-400 hover:bg-amber-500 border border-amber-400 hover:border-amber-500 transition"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>


      <Switcher />
    </>
  )
}