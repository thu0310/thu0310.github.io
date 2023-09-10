import React from "react";
import Images from "../assets/avatar.svg";
import Image from "../assets/profile.png";
import {
  FaGithub,
  FaYoutube,
  FaDribbble,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";
import resume from "../assets/thu-nguyen.pdf";

const Banner = () => {
  const handleResDownload = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "thu-nguyen-resume.pdf";
    link.click();
  };

  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
          >
            {/* Image */}
            <img
              src={Image}
              alt=""
              className="w-[400px] h-[500px] rounded-full"
            />
          </motion.div>
          <div className="flex-1 text-center font-secondary lg:text-left">
            {/* Text */}
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="text-[55px] font bold leading-[0.8] ig:text-[110px]"
            >
              THU <span>NGUYEN</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary
            font-semibold uppercase leading-[1]"
            >
              <span className="text-white mr-4">I am a </span>
              <TypeAnimation
                sequence={[
                  "Web Developer",
                  2000,
                  "Software Engineer",
                  2000,
                  "Project Manager",
                  2000,
                ]}
                speed={50}
                className="text-[#ddffbb]"
                // wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="mb-8 max-w-lg x-auto lg:mx-0"
            >
              Hi! I am a college senior interested in pursuring a career in
              technology, finance, or management.
            </motion.p>
            {/* Professional */}
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="flex gap-x-6 max-w-max items-center mb-12 mx-auto lg:mx-0"
            >
              <Link to="contact" activeClass="active" smooth={true} spy={true}>
                <button className="btn btn-lg">Contact me</button>
              </Link>
              <a className="text-gradient btn-link" onClick={handleResDownload}>
                Download Resume
              </a>
            </motion.div>
            {/* Socials */}
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a
                href="https://www.linkedin.com/in/thunguyen310"
                target="_blank"
              >
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/thu0310/" target="_blank">
                <FaInstagram />
              </a>
              <a href="https://github.com/thu0310" target="_blank">
                <FaGithub />
              </a>
            </motion.div>
          </div>
          {/* <div>
            <img src={Image} alt="" className="w-[400px] h-[500px]" />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Banner;
