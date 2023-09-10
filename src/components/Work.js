import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Img1 from "../assets/projects/VTracker.png";
import VandyTracker1 from "../assets/work/VandyTracker1.png";
import VandyTracker2 from "../assets/work/VandyTracker2.png";
import VandyTracker3 from "../assets/work/VandyTracker3.png";
import Img2 from "../assets/portfolio-img2.png";
import Img3 from "../assets/portfolio-img3.png";
import ProjectPopup from "../components/mini-components/ProjectPopup";

const Work = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openPopup = (project) => {
    setSelectedProject(project);
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
    setSelectedProject(null);
  };

  const projects = [
    {
      image: Img1,
      title: "Smart Traffic Visualizer",
      description: "MERN Stack, Rest APIs, Flask, AWS, Cloud-Based",
      p1: [
        "The project is a cloud-based occupancy visualizer of popular locations on Vanderbilt Campus. ",
        "AWS Beanstalk was utilized in order to deploy the application on the cloud and keeping it fuly automated. ",
        "Along with it, React.js was used to build the front end and Flask was used to create back-end API to communicate with the MongoDB database.",
      ],
      image1: VandyTracker1,
      image2: VandyTracker2,
      image3: VandyTracker3,
    },
    {
      // image: Img2,
      // image: Img2,
      // title: "Learning Management System",
      // description: "React.js, MySQL, Spring Framework",
    },
    // Add more projects to the array
  ];

  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex-1"
        >
          <h2 className="h2 leading-tight text-[#ddffbb]">
            My
            <br />
            Projects.
          </h2>
          <p className="max-w-sm mb-16">
            Click on the different projects for more information.
            <br />
            <br />
          </p>
        </motion.div>
        <div className="flex flex-col lg:flex-row gap-x-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
            >
              <div
                className="group relative overflow-hidden border-2 border-white/50 rounded-x1"
                onClick={() => openPopup(project)}
              >
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                <img
                  className="group-hover:scale-125 transition-all duration-500"
                  src={project.image}
                  alt=""
                />
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 ">
                  <span className="text-gradient">{project.title}</span>
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-3x1 text-white">
                    {project.description}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
          {popupOpen && selectedProject && (
            <ProjectPopup
              selectedProject={selectedProject}
              closePopup={closePopup}
            />
            // <div className="popup-overlay">
            //   <div className="popup-content">
            //     <h2>{selectedProject.title}</h2>
            //     <p>{selectedProject.description}</p>
            //     <img src={selectedProject.image} alt="" />
            //     <button onClick={closePopup}>Close</button>
            //   </div>
            // </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Work;

// import React from "react";
// import { motion } from "framer-motion";
// import { fadeIn } from "../variants";
// import Img1 from "../assets/projects/VTracker.png";
// import Img2 from "../assets/portfolio-img2.png";
// import Img3 from "../assets/portfolio-img3.png";

// const Work = () => {
//   return (
//     <section className="section" id="work">
//       <div className="container mx-auto">
//         <div className="flex flex-col lg:flex-row gap-x-10">
//           <motion.div
//             variants={fadeIn("right", 0.2)}
//             initial="hidden"
//             whileInView={"show"}
//             viewport={{ once: false, amount: 0.3 }}
//             className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
//           >
//             {/* text */}
//             <div>
//               <h2 className="h2 leading-tight text-[#ddffbb]">
//                 My <br />
//                 Projects.
//               </h2>
//               <p className="max-w-sm mb-16">
//                 Click on the different projects for more information. <br />
//                 <br />
//               </p>
//               {/* <button className="btn btn-sm">View all projects</button> */}
//             </div>
//             {/* image */}
//             <div
//               className="group relative overflow-hidden border-2
//             border-white/50 rounded-x1"
//             >
//               {/* overlay */}
//               <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
//               {/* img */}
//               <img
//                 className="group-hover:scale-125 transition-all duration-500"
//                 src={Img1}
//                 alt=""
//               />
//               {/* pretitle */}
//               <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 ">
//                 <span className="text-gradient">Smart Traffic Visualizer</span>
//               </div>
//               {/* Title */}
//               <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
//                 <span className="text-3x1 text-white">
//                   MERN Stack, Rest APIs, Flask, AWS, Cloud-Based
//                 </span>
//               </div>
//             </div>
//           </motion.div>
//           <motion.div
//             variants={fadeIn("left", 0.2)}
//             initial="hidden"
//             whileInView={"show"}
//             viewport={{ once: false, amount: 0.3 }}
//             className="flex-1 flex flex-col gap-y-10"
//           >
//             <div
//               className="group relative overflow-hidden border-2
//             border-white/50 rounded-x1"
//             >
//               <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
//               <img
//                 className="group-hover:scale-125 transition-all duration-500"
//                 src={Img2}
//                 alt=""
//               />
//               <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
//                 <span className="text-gradient">Learning Management System</span>
//               </div>
//               <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
//                 <span className="text-3x1 text-white">React.js, MySQL, Spring Framework</span>
//               </div>
//             </div>
//             {/* <div
//               className="group relative overflow-hidden border-2
//             border-white/50 rounded-x1"
//             >
//               <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
//               <img
//                 className="group-hover:scale-125 transition-all duration-500"
//                 src={Img3}
//                 alt=""
//               />
//               <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
//                 <span className="text-gradient">UI/UX Design</span>
//               </div>
//               <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
//                 <span className="text-3x1 text-white">Project Title</span>
//               </div>
//             </div> */}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Work;
