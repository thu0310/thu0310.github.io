import React from "react";

const ProjectPopup = ({ selectedProject, closePopup }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2 className="h2 text-[#000000]">{selectedProject.title}</h2>
        <p className="text-[#000000]">{selectedProject.description}</p>
        <div className="popup-content">
          <div className="top-section">
            <div className="text-and-images">
              <p className="text-[#000000] smaller-paragraph">
                {selectedProject.p1}
              </p>
              <img src={selectedProject.image2} alt="" />
              <img src={selectedProject.image3} alt="" />
            </div>
          </div>
          <div className="bottom-section">
            <img src={selectedProject.image1} alt="" />
          </div>
        </div>
        <button onClick={closePopup}>Close</button>
      </div>
    </div>
  );
};

export default ProjectPopup;
