import React, { useState } from "react";

const About = () => {
  const [activeTab, setActiveTab] = useState("Education");

  return (
    <div className="bg-black text-white min-h-screen flex justify-center items-center p-10">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Section - Image */}
        <div className="flex justify-center">
          <img
            src="/profile.png" // replace with your image path
            alt="Profile"
            className="w-72 h-80 object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Right Section - About Content */}
        <div>
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-gray-400 mb-6">
            I am a motivated and detail-oriented Junior Data Scientist with a strong foundation in data analysis, statistical modeling, and machine learning. Skilled in Python, SQL, and essential libraries such as Pandas, NumPy, Scikit-learn, and Matplotlib, I enjoy working with data to uncover insights and build predictive models. With hands-on experience in data preprocessing, visualization, and exploratory analysis.
          </p>

          {/* Tabs */}
          <div className="flex space-x-6 border-b border-gray-700 mb-6">
            {["Skills", "Experience", "Education"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 text-lg ${
                  activeTab === tab
                    ? "border-b-2 border-red-500 text-red-500"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div>
            {activeTab === "Skills" && (
              <ul className="space-y-2 text-gray-300">
                <li>Statistical & Analytical Skills</li>
                <li>Programming & Technical Skills</li>
                <li>Data Communication & Visualization</li>
              </ul>
            )}

            {activeTab === "Experience" && (
              <ul className="space-y-2 text-gray-300">
                <li>
                  <span className="text-red-500">Present:</span> MERN Stack Intern at Arch Technologies
                  
                </li>
                <li>
                  <span className="text-red-500">2025:</span> Intern at Skills4u
                  
                </li>
                <li>
                  <span className="text-red-500">2025:</span> Health System Innovation Hackathon
                  
                </li>
              </ul>
            )}

            {activeTab === "Education" && (
              <ul className="space-y-2 text-gray-300">
                <li>
                  <span className="text-red-500">Present:</span> BSCS from University of Punjab
                  
                </li>
                <li>
                  <span className="text-red-500">2022:</span> F.Sc from Rawilpindi Board
                  
                </li>
                <li>
                  <span className="text-red-500">2020:</span> Matric from Rawilpindi Board
                  
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
