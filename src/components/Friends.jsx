import React, { useEffect, useState } from 'react';

const Friends = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetch('/friends.json')
      .then(res => res.json())
      .then(data => setFriends(data));
  }, []);

  const getStatusColor = status => {
    if (status === 'on-track') return 'bg-[#244D3F] text-white';
    if (status === 'overdue') return 'bg-[#EF4444] text-white';
    if (status === 'almost due') return 'bg-[#EFAD44] text-black';
    return 'bg-gray-200 text-black';
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4 text-black">Your Friends</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {friends.map(friend => (
          <div
            key={friend.id}
            className="bg-white shadow rounded p-4 text-center"
          >
            <img
              src={friend.picture}
              alt={friend.name}
              className="w-24 h-24 rounded-full container mx-auto mb-3 object-cover"
            />
            <h3 className="font-semibold text-black">{friend.name}</h3>
            <p className="text-sm text-black">
              {friend.days_since_contact}d ago
            </p>
            <div className="flex justify-center gap-2 mb-2">
              {friend.tags.map((tag, ind) => (
                <span
                  key={ind}
                  className="text-xs bg-gray-200 px-2 py-1 rounded text-black"
                >
                  {tag}
                </span>
              ))}
            </div>
            <span
              className={`inline-block px-3 py-1 rounded text-sm ${getStatusColor(friend.status)}`}
            >
              {friend.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Friends;
