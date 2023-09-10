import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";
import resume from "../assets/thu-nguyen.pdf";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  const handleResDownload = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "thu-nguyen-resume.pdf";
    link.click();
  };
  return (
    <section className="section" id="about">
      <div className="container mx-auto" ref={ref}>
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-[#ddffbb]">About me.</h2>
            <h3 className="h3 mb-4">
              I am a senior at Vanderbilt University studying Computer Science,
              Economics, and Engineering Management.
            </h3>
            <p className="text-[17px] mb-6">
              {" "}
              In a world transformed by technology's influence on every industry, my journey as 
              a senior majoring in Computer Science has kindled an unwavering passion for the 
              captivating junction between technology and business. With a versatile skill set that 
              combines technical expertise and business acumen, I'm well-equipped to make an impact 
              in any industry. I thrive in dynamic environments, where I excel at problem-solving and 
              collaborating with diverse teams. I believe my strong communication skills and 
              ability to listen and share ideas contribute to effective teamwork and quality work 
              to be produced. I am always driven to stay adaptive with the market trends and emerging new 
              technologies to come up with the most innovative and efficient solution possible. The power 
              and potentials of technology and business are endless and with 
              my growth mindset and dedication to continuous learning, I'm ready to tackle new challenges 
              and use them to make a positive contribution to the success of any organization in any industry.

              {/* Technology has revolutionized every industry, and as a senior in
              college majoring in Computer Science, I'm passionate about the
              intersection of technology and business. With a versatile skill
              set that combines technical expertise and business acumen, I'm
              well-equipped to make an impact in any industry. I thrive in
              dynamic environments, where I excel at problem-solving and
              collaborating with diverse teams. My strong communication skills
              and ability to listen and share ideas contribute to effective
              teamwork. I'm driven to find innovative solutions, leverage
              emerging technologies, and adapt to evolving market trends. With a
              growth mindset and a dedication to continuous learning, I'm ready
              to tackle new challenges and make a positive contribution to the
              success of any organization in any industry. <br /> */}
            </p>
            {/* stats */}
            {/* <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={13} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br />
                  Experience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={13} duration={3} /> : null}
                  k+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br />
                  Completed
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={13} duration={3} /> : null}
                  k+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Satisfied <br />
                  Clients
                </div>
              </div>
            </div> */}
            <div className="flex gap-x-8 items-center">
              <Link to="contact" activeClass="active" smooth={true} spy={true}>
                <button className="btn btn-lg">Contact me</button>
              </Link>
              <a className="text-gradient btn-link" onClick={handleResDownload}>
                Download Resume
              </a>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[500px] 
          mix-blend-lighten bg-top"
          >
            {/* image */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
