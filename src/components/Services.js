// WorkExperiencePage.js
import { React, useState } from "react";
import { Link } from "react-scroll";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

import vietvuong2 from "../assets/work/vietvuong2.jpeg";
import fpt from "../assets/work/fsoft.png";
import paris from "../assets/work/parislevaindark.png";
import cplus from "../assets/icons/CPP.svg";
import react from "../assets/icons/React-Dark.svg";
import java from "../assets/icons/Java-Dark.svg";
import spring from "../assets/icons/Spring-Dark.svg";
import mysql from "../assets/icons/MySQL-Dark.svg";
import javas from "../assets/icons/JavaScript.svg";
import micword from "../assets/work/micword.png";
import micpow from "../assets/work/micpowerpoint.png";
import micexcel from "../assets/work/micexcel.png";
import insta from "../assets/work/instagram.png";
import facebook from "../assets/work/facebook.png";
import py from "../assets/icons/Python-Dark.svg";
import mongodb from "../assets/icons/MongoDB.svg";

const workExperiences = [
  {
    pic: vietvuong2,
    jobTitle: "System Consultant Intern",
    company: "Viet Vuong 2 Co., LTD",
    duration: "Jun. 2023 - Aug. 2023",
    skill: [micexcel, javas, react, py, mongodb],
    description: [
      "Interviewed and worked at different departments in week-long intervals to understand the needs and pain points of the company.",
      "Shadow the CEO and CFO to customize a software program that alleviates their workload and enhance their performance.",
      "Collaborated with the IT team to create a finance software program that efficiently and accuratley calculates the salary for production workers.",
    ],
  },
  {
    pic: fpt,
    jobTitle: "Software Developer Intern",
    company: "FPT Software",
    duration: "May 2022 - Aug. 2022",
    skill: [java, javas, react, spring, mysql],
    description: [
      "Developed 4 databases, 5 site maps, and 2 use cases for management system, increasing performance by 5%.",
      "Created web server for management system through React JS and Spring Boot.",
      "Recruited administrators and users to utilize server, growing rate by 10% each month.",
      "Performed daily stand up meetings to give progress updates.",
      "Presented the final web server to the team lead and customer.",
      "Partnered with full time employees to fine tune the web server.",
    ],
  },
  {
    pic: paris,
    jobTitle: "Sales Manager",
    company: "Paris Levain Bakery",
    duration: "Dec. 2020 - Jan 2021",
    skill: [micword, micpow, micexcel, insta, facebook],
    description: [
      "Surveyed group of 30 patrons to determine popular pastries and calculated daily production need.",
      "Managed English portion of Instagram and Facebook page.",
      "Researched the Vietnamese bakery market; conducted 3 marketing activities to facilitate company growth.",
      "Analyzed food trend in Vietnam to capture more revenue.",
    ],
  },
  // Add more work experiences as needed
];

const WorkExperiencePage = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleHover = (index) => {
    setHoveredIndex(index);
  };

  const handleLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <section className="work-experience-page" id="services">
      <motion.div
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="flex-1"
      >
        <h2 className="h2 text-[#ddffbb]">My Experience</h2>
        <h3 className="h3 mb-4">Swipe Right For More</h3>
      </motion.div>
      <motion.div
        variants={fadeIn("left", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="work-experience-container"
      >
        {workExperiences.map((experience, index) => (
          <div
            key={index}
            className={`work-experience-box ${
              hoveredIndex === index ? "active" : "inactive"
            }`}
            onMouseEnter={() => handleHover(index)}
            onMouseLeave={handleLeave}
          >
            <div className="work-experience-header">
              <div className="image-container">
                <img
                  src={experience.pic}
                  alt="Profile"
                  className="profile-image"
                />
              </div>
              <h2 className="text-[30px]">{experience.jobTitle}</h2>
              <p className="text-[20px] text-bold">{experience.company}</p>
              <p className="text-[15px]">{experience.duration}</p>
              <div className="skill-icons">
                {experience.skill.map((skill, index) => (
                  <div key={index} className="skill-icon">
                    <img src={skill} alt="" />
                  </div>
                ))}
              </div>
            </div>
            <div
              className={`font-secondary leading-tight text-[15px] work-experience-description`}
            >
              <ul className="description-scroll text-[20px]">
                {Array.isArray(experience.description) ? (
                  experience.description.map((sentence, sentenceIndex) => (
                    <li key={sentenceIndex}>
                      <span className="bullet-point">&#9679;</span> {sentence}
                    </li>
                  ))
                ) : (
                  <li>
                    <span className="bullet-point">&#9679;</span>{" "}
                    {experience.description}
                  </li>
                )}
              </ul>
              {/* <p className="description-scroll">{description}</p> */}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default WorkExperiencePage;

// import React, { useState } from "react";
// import { Link } from "react-scroll";

// // service data
// const services = [
//   {
//     name: "System Consulting Intern",
//     date: "May. 2023 - Aug. 2023",
//     company: "Viet Vuong 2",
//     description: [
//       "Interviewed and worked at different departments in week-long intervals to understand the needs and pain points of the company.",
//       "Shadow the CEO and CFO to customize a software program that either alleviates their workload or enhance their performance.",
//       "Collaborated with the IT team to create a finance software program that efficiently and accuratley calculates the salary for production workers.",
//     ],
//     link: "Learn more",
//   },
//   {
//     name: "Software Developer Intern",
//     date: "May. 2022 - Aug. 2022",
//     company: "FPT Software",
//     description: [
//       "Developed 4 databases, 5 site maps, and 2 use cases for management system, increasing performance by 5%.",
//       "Created web server for management system through React JS and Spring Boot.",
//       "Recruited administrators and users to utilize server, growing rate by 10% each month.",
//       "Performed daily stand up meetings to give progress updates.",
//       "Presented the final web server to the team lead and customer.",
//       "Partnered with full time employees to fine tune the web server.",
//     ],
//     // "Created web server for management system through React.js and SpringBoot.\n Partnered with full time employees to fine tune the web server.",
//     link: "Learn more",
//   },
//   {
//     name: "Sales Manager",
//     date: "Dec. 2020 - Jan. 2021",
//     company: "Paris Levain Bakery",
//     description: [
//       "Surveyed group of 30 patrons to determine popular pastries and calculated daily production need.",
//       "Managed English portion of Instagram and Facebook page.",
//       "Researched the Vietnamese bakery market; conducted 3 marketing activities to facilitate company growth.",
//       "Analyzed food trend in Vietnam to capture more revenue.",
//     ],
//     link: "Learn more",
//   },
// ];

// // ... (import statements and service data remain the same)

// const Services = () => {
//   const [currentServiceIndex, setCurrentServiceIndex] = useState(0);

//   const handleNextService = () => {
//     setCurrentServiceIndex((prevIndex) =>
//       prevIndex < services.length - 1 ? prevIndex + 1 : prevIndex
//     );
//   };

//   const handlePrevService = () => {
//     setCurrentServiceIndex((prevIndex) =>
//       prevIndex > 0 ? prevIndex - 1 : prevIndex
//     );
//   };

//   return (
//     <section className="section" id="services">
//       <div className="container mx-auto">
//         <div className="flex flex-col lg:flex-row">
//           {/* services */}
//           <div className="flex-1">
//             <div className="services-scroll-container">
//               {services.map((service, index) => {
//                 const isCurrentService = index === currentServiceIndex;

//                 return (
//                   <div
//                     className={`service ${
//                       isCurrentService ? "current-service" : ""
//                     }`}
//                     key={index}
//                   >
//                     {/* ... (your service content rendering code) */}
//                   </div>
//                 );
//               })}
//             </div>
//             <div className="service-navigation">
//               <button onClick={handlePrevService}>&lt; Prev</button>
//               <button onClick={handleNextService}>Next &gt;</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;

// import React, { useState } from "react";
// import { Link } from "react-scroll";

// // service data
// const services = [
//   {
//     name: "System Consulting Intern",
//     date: "May. 2023 - Aug. 2023",
//     company: "Viet Vuong 2",
//     description: [
//       "Interviewed and worked at different departments in week-long intervals to understand the needs and pain points of the company.",
//       "Shadow the CEO and CFO to customize a software program that either alleviates their workload or enhance their performance.",
//       "Collaborated with the IT team to create a finance software program that efficiently and accuratley calculates the salary for production workers.",
//     ],
//     link: "Learn more",
//   },
//   {
//     name: "Software Developer Intern",
//     date: "May. 2022 - Aug. 2022",
//     company: "FPT Software",
//     description: [
//       "Developed 4 databases, 5 site maps, and 2 use cases for management system, increasing performance by 5%.",
//       "Created web server for management system through React JS and Spring Boot.",
//       "Recruited administrators and users to utilize server, growing rate by 10% each month.",
//       "Performed daily stand up meetings to give progress updates.",
//       "Presented the final web server to the team lead and customer.",
//       "Partnered with full time employees to fine tune the web server.",
//     ],
//     // "Created web server for management system through React.js and SpringBoot.\n Partnered with full time employees to fine tune the web server.",
//     link: "Learn more",
//   },
//   {
//     name: "Sales Manager",
//     date: "Dec. 2020 - Jan. 2021",
//     company: "Paris Levain Bakery",
//     description: [
//       "Surveyed group of 30 patrons to determine popular pastries and calculated daily production need.",
//       "Managed English portion of Instagram and Facebook page.",
//       "Researched the Vietnamese bakery market; conducted 3 marketing activities to facilitate company growth.",
//       "Analyzed food trend in Vietnam to capture more revenue.",
//     ],
//     link: "Learn more",
//   },
// ];

// const Services = () => {
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   const handleMouseEnter = (index) => {
//     setHoveredIndex(index);
//   };

//   const handleMouseLeave = () => {
//     setHoveredIndex(null);
//   };

//   return (
//     <section className="section" id="services">
//       <div className="container mx-auto">
//         <div className="flex flex-col lg:flex-row">
//           {/* text & image */}
//           <div className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0">
//             <h2 className="h2 text-[#ddffbb] mb-6">Experience.</h2>
//             <h3 className="h3 max-w-[455px] mb-16">
//               My internships and leadership involvements so far.
//             </h3>
//             <Link to="work" activeClass="active" smooth={true} spy={true}>
//               <button className="btn btn-sm">See my work</button>
//             </Link>
//           </div>
//           {/* services */}
//           <div className="flex-1">
//             {/* service first */}
//             <div>
//               {services.map((service, index) => {
//                 // destructuring service
//                 const { name, description, link, date, company } = service;
//                 const isHovered = index === hoveredIndex;

//                 return (
//                   <div
//                     className={`border-b border-white/20 h-[180px] mb-[38px] flex overflow-hidden ${
//                       isHovered ? "brighten pop" : "dim"
//                     }`}
//                     key={index}
//                     onMouseEnter={() => handleMouseEnter(index)}
//                     onMouseLeave={handleMouseLeave}
//                   >
//                     <div className="max-w-[580px]">
//                       <div className="flex flex-col lg:flex-row justify-between items-center">
//                         <h4 className="text-[15px] tracking-wider font-primary font-semibold mb-6">
//                           {name}
//                           <p className="text-[8px]">{company}</p>
//                         </h4>
//                         <p className="text-[15px]">{date}</p>
//                       </div>
//                       <div
//                         className={`font-secondary leading-tight text-[15px] services-container ${
//                           isHovered ? "scroll-active" : ""
//                         }`}
//                       >
//                         <ul className="description-scroll">
//                           {Array.isArray(description) ? (
//                             description.map((sentence, sentenceIndex) => (
//                               <li key={sentenceIndex}>
//                                 <span className="bullet-point">&#9679;</span>{" "}
//                                 {sentence}
//                               </li>
//                             ))
//                           ) : (
//                             <li>
//                               <span className="bullet-point">&#9679;</span>{" "}
//                               {description}
//                             </li>
//                           )}
//                         </ul>
//                         {/* <p className="description-scroll">{description}</p> */}
//                       </div>
//                       {/* <p className={`font-secondary leading-tight services-container description-scroll ${
//                         isHovered ? 'scroll-active' : ''}`}>{description}</p> */}
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;
