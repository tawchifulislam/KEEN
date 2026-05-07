import useFriends from '../hooks/useFriends';
import FriendCard from './FriendCard';

const Friends = () => {
  const { friends, loading } = useFriends();

  console.log(friends, loading);

  return (
    <div className="container mx-auto my-10 px-4 md:px-0">
      <div className="mb-12 text-left">
        <h2 className="font-bold text-2xl">All Friends</h2>
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="text-xl font-semibold text-[#244d3f]">Loading...</div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {friends.map((friend, ind) => {
            return <FriendCard friend={friend} key={ind} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Friends;
