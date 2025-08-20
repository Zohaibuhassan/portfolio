import React from "react";
import { FaChartBar, FaRobot, FaChartPie } from "react-icons/fa";
import { TbVectorBezier2 } from "react-icons/tb";

const Service = () => {
  const services = [
    {
      id: 1,
      title: "Business Insights & Decision Support",
      description:
        "I help businesses turn raw data into actionable insights that guide smarter decisions. This includes reducing risks, optimizing strategies, and driving sustainable growth through data-driven recommendations.",
      icon: <FaChartBar size={32} />,
      color: "bg-red-500",
    },
    {
      id: 2,
      title: "Data Visualization & Reporting",
      description:
        "I transform complex data into clear, interactive dashboards and reports. By highlighting trends, KPIs, and performance metrics, I make it easier for businesses to quickly understand and act on their data.",
      icon: <FaChartPie size={32} />,
      color: "bg-gray-800",
    },
    {
      id: 3,
      title: "Model Deployment & Automation",
      description:
        "I deploy machine learning models into real-world applications and automate workflows for seamless performance. My focus is on ensuring scalable, reliable, and efficient solutions that deliver continuous value.",
      icon: <FaRobot size={32} />,
      color: "bg-gray-800",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-10">My Services</h2>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`p-8 rounded-xl shadow-lg hover:scale-105 transform transition-all duration-300 cursor-pointer ${
                index === 0 ? "bg-red-500 text-white" : "bg-gray-900"
              }`}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-300 mb-4">{service.description}</p>
            
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
