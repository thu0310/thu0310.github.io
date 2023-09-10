import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

import cplus from "../assets/icons/CPP.svg";
import java from "../assets/icons/Java-Dark.svg";
import javascript from "../assets/icons/JavaScript.svg";
import c from "../assets/icons/C.svg";
import python from "../assets/icons/Python-Dark.svg";
import html from "../assets/icons/HTML.svg";
import css from "../assets/icons/CSS.svg";
import react from "../assets/icons/React-Dark.svg";
import mysql from "../assets/icons/MySQL-Dark.svg";
import spring from "../assets/icons/Spring-Dark.svg";
import mongodb from "../assets/icons/MongoDB.svg";
import flask from "../assets/icons/Flask-Dark.svg";
import aws from "../assets/icons/AWS-Dark.svg";
import git from "../assets/icons/Git.svg";
import Kubernetes from "../assets/icons/Kubernetes.svg";

const diffSkills = [
  { pic: cplus, skillName: "C++", proficiency: 80 },
  { pic: java, skillName: "Java", proficiency: 70 },
  { pic: javascript, skillName: "Javascript", proficiency: 80 },
  { pic: c, skillName: "C", proficiency: 30 },
  { pic: python, skillName: "Python", proficiency: 55 },
  { pic: html, skillName: "HTML", proficiency: 40 },
  { pic: css, skillName: "CSS", proficiency: 60 },
  { pic: react, skillName: "React.js", proficiency: 70 },
  { pic: mysql, skillName: "MySQL", proficiency: 25 },
  { pic: spring, skillName: "Spring", proficiency: 50 },
  { pic: mongodb, skillName: "MongoDB", proficiency: 70 },
  { pic: flask, skillName: "Flask", proficiency: 60 },
  { pic: aws, skillName: "Amazon Web Services", proficiency: 15 },
  { pic: git, skillName: "Git", proficiency: 70 },
  { pic: Kubernetes, skillName: "Kubernetes", proficiency: 45 },
];

const SkillBar = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredSkill(index);
  };

  const handleMouseLeave = () => {
    setHoveredSkill(null);
  };

  return (
    <section className="skill-bar" id="skills">
      <motion.div
        variants={fadeIn("down", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="flex-1"
      >
        <h2 className="h2 text-[#ddffbb]">My Skills</h2>
        <h3 className="h3 mb-4">Hover For Percent Profiency</h3>
      </motion.div>
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="skill-icons"
      >
        {diffSkills.map((skill, index) => (
          <div
            key={index}
            className={`skill-icon ${hoveredSkill === index ? "hovered" : ""}`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <img src={skill.pic} alt={skill.skillName} />
            {hoveredSkill === index && (
              <div
                className="overlay"
                style={{ width: `${skill.proficiency}%` }}
              >
                {skill.proficiency}%
              </div>
            )}
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default SkillBar;

// // SkillBar.js
// import React, { useState, useEffect } from 'react';

// const skillCategories = [
//   {
//     categoryName: 'Programming Languages',
//     skills: [
//       { name: 'C++', proficiency: 85 },
//       { name: 'JavaScript', proficiency: 90 },
//       { name: 'Java', proficiency: 80 },
//       { name: 'C', proficiency: 80},
//       { name: 'Python', proficiency: 50},
//       { name: 'HTML/CSS', proficiency: 60},
//     ],
//   },
//   {
//     categoryName: 'Technologies & Framework',
//     skills: [
//       { name: 'React.js', proficiency: 70 },
//       { name: 'MySQL', proficiency: 70},
//       { name: 'Spring', proficiency: 70},
//       { name: 'MongoDB', proficiency: 70},
//       { name: 'Flask', proficiency: 60},
//       { name: 'AWS', proficiency: 30},
//     ],
//   },
//   {
//     categoryName: 'Technical & Professional Skills',
//     skills: [
//       { name: 'Git', proficiency: 80 },
//       { name: 'CLion', proficiency: 65 },
//       { name: 'VSCode', proficiency: 70 },
//       { name: 'Microsoft', proficiency: 80},
//       { name: 'Project Management', proficiency: 60},
//       { name: 'Vietnamese', proficiency: 100},
//     ],
//   },
//   // Add more skill categories as needed
// ];

// const SkillBar = () => {
//     const [animationStarted, setAnimationStarted] = useState(false);

//     useEffect(() => {
//       if (animationStarted) {
//         // If animation has already started, do nothing
//         return;
//       }

//       // Start animation after a short delay for a better effect
//       const animationTimeout = setTimeout(() => {
//         setAnimationStarted(true);
//       }, 200);

//       return () => {
//         clearTimeout(animationTimeout);
//       };
//     }, [animationStarted]);

//     return (
//       <section className="skill-bar-container" id='skills'>
//         <h2 className="h2 text-[#ddffbb]">My Skills</h2>
//         <div className="skill-categories-container">
//           {skillCategories.map((category, index) => (
//             <div key={index} className="skill-category">
//               <h3 className="h3 mb-4">{category.categoryName}</h3>
//               <div className="skills-container">
//                 {category.skills.map((skill, skillIndex) => (
//                   <div key={skillIndex} className="skill-item">
//                     <div className="skill-name">{skill.name}</div>
//                     <div className="progress-bar">
//                       <div
//                         className="progress"
//                         style={{
//                           width: animationStarted ? `${skill.proficiency}%` : '0',
//                           transition: animationStarted ? 'width 2s ease-in-out' : 'none',
//                         }}
//                       ></div>
//                     </div>
//                     <div className="proficiency">{`${skill.proficiency}%`}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     );
// };

// export default SkillBar;

// import React from 'react';

// const skills = [
//   { name: 'JavaScript', proficiency: 'Expert', logo: '/logos/javascript-logo.png' },
//   { name: 'Python', proficiency: 'Intermediate', logo: '/logos/python-logo.png' },
//   { name: 'React', proficiency: 'Advanced', logo: '/logos/react-logo.png' },
//   // Add more skills as needed
// ];

// const SkillPage = () => {
//   return (
//     <section className='experience-section' id='about'>
//         <div className='container'>
//             <div className='section_title center'>
//                 <p>Why Choose Me</p>
//                 <h2>My Experience Area</h2>
//             </div>
//             <div className='experience-items'>
//                 <div className='experience-item'>
//                     <div className='experience-info>'>
//                         <p>C++</p>
//                         <p>90%</p>
//                     </div>
//                     <div className='progress-line' data-percent="90%">
//                         <span style={{width: "90%"}}></span>
//                     </div>
//                 </div>
//                 <div className='experience-item'>
//                     <div className='experience-info>'>
//                         <p>Python</p>
//                         <p>50%</p>
//                     </div>
//                     <div className='progress-line' data-percent="50%">
//                         <span style={{width: "50%"}}></span>
//                     </div>
//                 </div>
//                 <div className='experience-item'>
//                     <div className='experience-info>'>
//                         <p>Java</p>
//                         <p>80%</p>
//                     </div>
//                     <div className='progress-line' data-percent="80%">
//                         <span style={{width: "80%"}}></span>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </section>
//   );
// };

// export default SkillPage;
