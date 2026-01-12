import React from 'react'
import Contact from "../components/Contact.jsx"

const ContactPage = () => {
  return (
    <section className="mt-30 px-4" id="contact">
        <div className=" w-full h-1 bg-linear-to-r multi-gradient"></div>
         <div className="flex items-center justify-center py-10">
            <span className="w-24 h-[2px] bg-[#1a1443]"></span>
            <span className="bg-[#1a1443] w-fit p-2 px-5 text-2xl rounded-md drop-shadow-[0_0_20px_#1e1463]">Contact Me</span>
            <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
        <Contact />
    </section>
  )
}

export default ContactPage