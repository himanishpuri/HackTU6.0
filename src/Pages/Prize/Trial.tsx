import React, { useState } from "react";

interface Section {
  label: string;
  prize: string;
}

const PrizeSections: React.FC = () => {
  const [activeSection, setActiveSection] = useState<number | null>(0); // Default to 1st section
  const sections: Section[] = [
    { label: "1st", prize: "70,000" },
    { label: "2nd", prize: "50,000" },
    { label: "3rd", prize: "30,000" },
    { label: "1st year", prize: "20,000" },
    { label: "All girls", prize: "15,000" },
  ];

  const handleClick = (index: number) => {
    setActiveSection(activeSection === index ? null : index);
  };

  return (
    <div className="flex items-center overflow-hidden w-2/3">
      {sections.map((section, index) => (
        <button
          key={section.label}
          className={`flex relative flex-col items-center justify-center h-32 rounded-lg cursor-pointer transition-all duration-500 ease-in-out z-[100] ${
            activeSection === index
              ? "flex-[5] shadow-slab-shadow bg-teal-400 text-dark-blue"
              : "flex-1 bg-dark-blue text-white"
          }`}
          onClick={() => handleClick(index)}
        >
          {activeSection === index && (
            <div className="text-5xl font-bold">{section.prize}</div>
          )}
          <div
            className={`absolute text-lg font-bold transition-transform duration-500 ${
              activeSection === index
                ? "rotate-0 bottom-0 right-3"
                : "-rotate-90 bottom-6 left-0"
            }`}
          >
            {section.label}
          </div>
        </button>
      ))}
    </div>
  );
};

export default PrizeSections;
