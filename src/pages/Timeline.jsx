import React, { useEffect, useState } from 'react';

const Timeline = () => {
  const [entries, setEntries] = useState([]);
  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('');
  const [sortOrder, setSortOrder] = useState('Newest First');

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('timeline') || '[]');
    setEntries(saved);
  }, []);

  const filteredEntries = entries
    .filter(e => (filter ? e.type === filter : true))
    .filter(e => e.friend.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) =>
      sortOrder === 'Newest First'
        ? new Date(b.date) - new Date(a.date)
        : new Date(a.date) - new Date(b.date),
    );

  return (
    <div className="min-h-screen bg-[#f8fafc] p-6">
      <h1 className="text-2xl font-bold mb-6 text-black">Timeline</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <select
          value={filter}
          onChange={e => setFilter(e.target.value)}
          className="border rounded px-3 py-2 text-sm text-black"
        >
          <option value="">Filter Timeline</option>
          <option value="Call">Call</option>
          <option value="Text">Text</option>
          <option value="Video">Video</option>
        </select>

        <input
          type="search"
          placeholder="Search"
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="border rounded px-3 py-2 text-sm text-black"
        />

        <select
          value={sortOrder}
          onChange={e => setSortOrder(e.target.value)}
          className="border rounded px-3 py-2 text-sm text-black"
        >
          <option>Newest First</option>
          <option>Oldest First</option>
        </select>
      </div>

      <div className="bg-white border rounded p-4 shadow">
        {filteredEntries.length === 0 ? (
          <p className="text-sm text-black text-center">No interactions yet.</p>
        ) : (
          <ul className="divide-y">
            {filteredEntries.map((entry, idx) => (
              <li key={idx} className="py-3 flex justify-between items-center">
                <span className="text-sm font-medium text-black">
                  {entry.type} with {entry.friend}
                </span>
                <span className="text-xs text-black">{entry.date}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Timeline;
