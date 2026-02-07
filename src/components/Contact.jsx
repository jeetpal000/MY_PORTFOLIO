import { BiMailSend } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { MdCall } from "react-icons/md";
import { IoAtOutline } from "react-icons/io5";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {toast} from "react-toastify"
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm("service_zxw0lm3", "template_5w6952m", form.current, {
        publicKey: "K0ZyX9H86vnE7KMY5",
      })
      .then(
        () => {
          form.current.reset();
         toast.success("Message sent successfully.", { position: "top-right", autoClose: 3000 });
        toast.info("I'll connect shortly", { position: "top-right", autoClose: 4000 });
          setLoading(false)
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("❌ Error Message not send", {position: "top-right", autoClose: 3000})
          setLoading(false);
        }
      );
  };

  return (
    <div className="max-w-360 max-sm:flex-col max-sm:gap-5 px-4 max-sm:px-0 mx-auto flex justify-between items-center">
      <div data-aos="fade-up" class="lg:w-3/4 max-sm:order-2 ">
        <div class="flex flex-col gap-5 max-sm:gap-3 lg:gap-9">
          <p data-aos="fade-up"  class="text-sm md:text-xl flex items-center gap-3">
            <span className="bg-[#8b98a5] text-gray-800 cursor-pointer hover:scale-110 duration-100 p-3 max-sm:p-2 rounded-full text-xl">
              <IoAtOutline />
            </span>
            <span>chandrajeetcare2019@gmail.com</span>
          </p>
          <p data-aos="fade-up"  class="text-sm md:text-xl flex items-center gap-3">
            <span className="bg-[#8b98a5] text-gray-800 cursor-pointer hover:scale-110 duration-100 p-3 max-sm:p-2 rounded-full text-xl">
              <MdCall />
            </span>
            <span>+918726156494, +918726150194</span>
          </p>
          <p data-aos="fade-up"  class="text-sm md:text-xl flex items-center gap-3">
            <span className="bg-[#8b98a5] text-gray-800 cursor-pointer hover:scale-110 duration-100 p-3 max-sm:p-2 rounded-full text-xl">
              <CiLocationOn />
            </span>
            <span>Kamasin, Kaserawan Jaunpur Uttar Pradesh - 222165</span>
          </p>
        </div>
        <div data-aos="fade-up"  class="mt-8 lg:mt-16 flex items-center gap-5 lg:gap-10 max-sm:justify-between">
          <a 
            className="bg-[#8b98a5] p-4 max-sm:p-3 rounded-full text-gray-800 text-2xl hover:bg-[#16F2B3] duration-100 hover:scale-105"
            target="_blank"
            href="https://www.instagram.com/jeetpal000/"
          >
            <FaInstagram />
          </a>
          <a
            className="bg-[#8b98a5] p-4 max-sm:p-3 rounded-full text-gray-800 text-2xl hover:bg-[#16F2B3] duration-100 hover:scale-105"
            target="_blank"
            href="https://www.github.com/jeetpal000"
          >
            <FaGithub />
          </a>
          <a
            className="bg-[#8b98a5] p-4 max-sm:p-3 rounded-full text-gray-800 text-2xl hover:bg-[#16F2B3] duration-100 hover:scale-105"
            target="_blank"
            href="https://www.linkedin.com/in/jeetpal000/"
          >
            <FaLinkedinIn />
          </a>
          <a
            className="bg-[#8b98a5] p-4 max-sm:p-3 rounded-full text-gray-800 text-2xl hover:bg-[#16F2B3] duration-100 hover:scale-105"
            target="_blank"
            href="https://twitter.com/"
          >
            <FaXTwitter />
          </a>
        </div>
      </div>
      <div  className="max-w-3xl mt-10 text-white rounded-lg border border-[#464c6a] p-3 lg:p-5">
        <p className="text-sm text-[#d3d8e8]">
          If you have any questions or concerns, please don't hesitate to
          contact me. I am open to any work opportunities that align with my
          skills and interests.
        </p>
        <form ref={form} onSubmit={sendEmail}>
          <div className="mt-6 max-sm:mt-3 flex flex-col gap-4 max-sm:gap-2">
            <div data-aos="fade-up"  className="flex flex-col gap-2 max-sm:gap-0">
              <label className="text-base">Your Name: </label>
              <input
                className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
                type="text"
                maxlength="100"
                required="true"
                name="name"
              ></input>
            </div>
            <div data-aos="fade-up"  className="flex flex-col gap-2 max-sm:gap-0">
              <label className="text-base">Your Email: </label>
              <input
                className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
                type="email"
                maxlength="100"
                required=""
                name="email"
              ></input>
            </div>
            <div data-aos="fade-up"  className="flex flex-col gap-2 max-sm:gap-0">
              <label className="text-base">Your Message: </label>
              <textarea
                className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
                maxlength="500"
                name="message"
                required
                rows="4"
              ></textarea>
            </div>
            <div className="flex flex-col items-center gap-3 max-sm:gap-0">
              <button data-aos="fade-up" 
              disabled={loading}
                className="flex items-center gap-1 hover:gap-3 cursor-pointer rounded-full bg-linear-to-r from-pink-500 to-violet-600 px-5 md:px-12 py-2.5 md:py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
                role="button" type="submit"
              >
                <span className="flex items-center gap-1">{loading ? "Sending..." : "Send Message"} </span>
                <span className="text-2xl">
                  <BiMailSend />
                </span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
