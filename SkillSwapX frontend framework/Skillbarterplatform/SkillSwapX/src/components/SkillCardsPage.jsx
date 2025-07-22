import React, { useState } from 'react';
import axios from 'axios';
import SkillCard from './SkillCard';

const SkillCardsPage = () => {
  const [offerSearch, setOfferSearch] = useState('');
  const [needSearch, setNeedSearch] = useState('');
  const [filteredSkills, setFilteredSkills] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!offerSearch && !needSearch) return;

    setLoading(true);
    try {
      const response = await axios.post('http://localhost:8000/api/match/', {
        offers: offerSearch,
        needs: needSearch,
      });

      if (response.data.matches) {
        setFilteredSkills(response.data.matches);
      } else {
        setFilteredSkills([]);
      }
    } catch (error) {
      console.error('Error fetching matches:', error);
      setFilteredSkills([]);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setOfferSearch('');
    setNeedSearch('');
    setFilteredSkills(null);
  };

  const displayedSkills = filteredSkills ?? [];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">Skill Connect Hub</h2>

      {/* Search Inputs */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8">
        <input
          type="text"
          placeholder="What do you offer?"
          value={offerSearch}
          onChange={(e) => setOfferSearch(e.target.value)}
          className="px-4 py-2 w-64 border rounded-lg focus:outline-none"
        />
        <input
          type="text"
          placeholder="What do you need?"
          value={needSearch}
          onChange={(e) => setNeedSearch(e.target.value)}
          className="px-4 py-2 w-64 border rounded-lg focus:outline-none"
        />
        <button
          onClick={handleSearch}
          className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          Search
        </button>
        <button
          onClick={handleReset}
          className="bg-gray-300 text-gray-800 font-medium px-4 py-2 rounded-lg hover:bg-gray-400 transition"
        >
          Reset
        </button>
      </div>

      {/* Skill Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          <p className="col-span-full text-center text-gray-500">Loading matches...</p>
        ) : displayedSkills.length > 0 ? (
          displayedSkills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))
        ) : filteredSkills !== null ? (
          <p className="col-span-full text-center text-gray-600">No matching skills found.</p>
        ) : null}
      </div>
    </div>
  );
};

export default SkillCardsPage;

