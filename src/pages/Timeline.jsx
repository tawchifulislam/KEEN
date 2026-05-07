import { useContext, useState } from 'react';
import { DialContext } from '../context/DialContext';
import { IoIosCall, IoIosText } from 'react-icons/io';
import { FaVideo } from 'react-icons/fa';

const Timeline = () => {
  const { interactions } = useContext(DialContext);
  const [filterType, setFilterType] = useState('All');

  const icons = {
    Call: <IoIosCall />,
    Text: <IoIosText />,
    Video: <FaVideo />,
  };

  const filteredInteractions = interactions.filter(item => {
    return filterType === 'All' || item.interactionMethod === filterType;
  });

  return (
    <div className="min-h-screen bg-[#f8fafc] text-black py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-[#1f2937]">Timeline</h2>

        <div className="mb-10">
          <select
            className="select select-bordered w-full max-w-xs bg-white text-gray-700 focus:outline-none"
            onChange={e => setFilterType(e.target.value)}
            value={filterType}
          >
            <option value="All">Filter Timeline</option>
            <option value="Call">Call</option>
            <option value="Text">Text</option>
            <option value="Video">Video</option>
          </select>
        </div>

        <div className="space-y-4">
          {filteredInteractions.map((interaction, ind) => (
            <div
              key={ind}
              className="flex items-center justify-between p-5 rounded-xl bg-white border border-gray-100 shadow-sm"
            >
              <div className="flex items-center gap-3">
                {icons[interaction.interactionMethod]}
                <h2 className="font-bold text-lg text-gray-800 capitalize">
                  {interaction.interactionMethod} with {interaction.name}
                </h2>
              </div>
              <p className="text-sm font-bold text-gray-400">
                {interaction.interactionDate}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
