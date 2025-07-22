// // src/components/SkillCard.jsx
import React from "react";

const SkillCard = ({ skill }) => {
  return (
    <div className="border border-gray-400 rounded-xl p-5 shadow hover:shadow-lg transition-all duration-300 bg-white">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mt-1">{skill.name}</h2>
        </div>
        {/* Optional bookmark icon placeholder */}
        <div className="text-gray-400 hover:text-gray-600 cursor-pointer">
          🔖
        </div>
      </div>
      
      {/*<div className="text-sm text-gray-600 mb-2">
        <span className="font-semibold text-gray-800">Name</span> {skill.name}
      </div>*/}

      <div className="text-sm text-gray-600 mb-2">
        <span className="font-semibold text-gray-800">Offers:</span> {skill.offers}
      </div>

      <div className="text-sm text-gray-600 mb-4">
        <span className="font-semibold text-gray-800">Needs:</span> {skill.needs}
      </div>

      {/* Show similarity score if available */}
      {skill.similarity_score !== undefined && (
        <div className="text-sm text-pink-600 font-semibold mb-4">
          Match Percentage: {skill.match_percent}
        </div>
      )}

      <button className="bg-pink-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
        Connect
      </button>
    </div>
  );
};

export default SkillCard;