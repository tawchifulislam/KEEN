import { Link } from 'react-router';

const FriendCard = ({ friend }) => {
  return (
    <Link
      to={`/friend/${friend.id}`}
      className="bg-white rounded-2xl shadow-sm p-8 flex flex-col items-center text-center border border-gray-50 transition-all hover:shadow-md"
    >
      <div className="mb-4">
        <img
          src={friend.picture}
          alt={friend.name}
          className="w-24 h-24 rounded-full object-cover shadow-sm"
        />
      </div>

      <h2 className="text-xl font-bold text-[#1e293b] mb-1">{friend.name}</h2>

      <p className="text-gray-400 text-sm mb-4">
        {friend.days_since_contact}d ago
      </p>

      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {friend.tags.map((tag, index) => (
          <span
            key={index}
            className="bg-[#e8f5f1] text-[#244d3f] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="w-full">
        <span
          className={`
          block w-full py-2 px-4 rounded-full text-white text-sm font-bold capitalize
          ${
            friend.status === 'overdue'
              ? 'bg-red-500'
              : friend.status === 'almost due'
                ? 'bg-yellow-600'
                : 'bg-green-600'
          }
        `}
        >
          {friend.status}
        </span>
      </div>
    </Link>
  );
};

export default FriendCard;
