// src/components/SkillForm.jsx
import React, { useState } from 'react';

const SkillForm = () => {
  const [skill, setSkill] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Skill submitted:', skill);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <h2 className="text-2xl mb-4">Offer a New Skill</h2>
      <input
        type="text"
        value={skill}
        onChange={(e) => setSkill(e.target.value)}
        placeholder="Enter your skill"
        className="border p-2 rounded w-full"
      />
      <button type="submit" className="mt-2 bg-blue-500 text-white py-1 px-4 rounded">Submit</button>
    </form>
  );
};

export default SkillForm;