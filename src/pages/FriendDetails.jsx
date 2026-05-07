import { useParams } from 'react-router';
import useFriends from '../hooks/useFriends';
import { FaVideo } from 'react-icons/fa';
import { IoIosArchive, IoIosCall, IoIosText } from 'react-icons/io';
import { BiAlarmSnooze } from 'react-icons/bi';
import { MdDelete, MdHistory } from 'react-icons/md';
import { useContext } from 'react';
import { DialContext } from '../context/DialContext';

const FriendDetails = () => {
  const { id } = useParams();
  const { friends, loading } = useFriends();
  const infoFriend = friends.find(friend => String(friend.id) === id);

  const { interactions, setInteractions } = useContext(DialContext);

  if (loading) {
    return (
      <div className="flex h-[60vh] items-center justify-center">
        <div className="text-xl font-semibold text-[#244d3f]">Loading...</div>
      </div>
    );
  }

  const handleInteraction = method => {
    const newInteraction = {
      ...infoFriend,
      interactionMethod: method,
      interactionDate: new Date().toLocaleString(),
    };
    setInteractions([...interactions, newInteraction]);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] p-4 text-black md:p-10">
      <div className="mx-auto grid max-w-6xl grid-cols-12 gap-6">
        <div className="col-span-12 space-y-4 lg:col-span-3">
          <div className="rounded-xl border border-gray-100 bg-white p-4 text-center shadow-sm">
            <div className="avatar mb-2">
              <div className="w-22 mx-auto rounded-full shadow-sm">
                <img src={infoFriend.picture} alt={infoFriend.name} />
              </div>
            </div>
            <h2 className="text-xl font-bold capitalize">{infoFriend.name}</h2>
            <div className="mt-2 flex flex-col items-center gap-2">
              <span
                className={`badge border-none px-4 py-3 text-xs font-bold text-white capitalize ${infoFriend.status === 'overdue' ? 'bg-red-500' : 'bg-green-500'}`}
              >
                {infoFriend.status}
              </span>
              <span className="badge border border-green-100 bg-green-50 px-4 py-2 text-xs font-semibold text-[#244d3f] capitalize">
                {infoFriend.tags.join(', ')}
              </span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-gray-500 italic">
              "{infoFriend.bio}"
            </p>
            <p className="text-xs text-gray-400 capitalize">Preferred: Email</p>
          </div>

          <div className="flex flex-col gap-2">
            <button className="btn btn-outline btn-sm flex items-center gap-2 border-gray-200 bg-white capitalize">
              <BiAlarmSnooze className="text-lg" /> Snooze 2 Weeks
            </button>
            <button className="btn btn-outline btn-sm flex items-center gap-2 border-gray-200 bg-white capitalize">
              <IoIosArchive className="text-lg" /> Archive Friend
            </button>
            <button className="btn btn-outline btn-error btn-sm flex items-center gap-2 bg-white font-bold capitalize">
              <MdDelete className="text-lg" /> Delete
            </button>
          </div>
        </div>

        <div className="col-span-12 space-y-6 lg:col-span-9">
          <div className="grid grid-cols-1 gap-4 text-center md:grid-cols-3">
            <div className="rounded-xl border border-gray-100 bg-white p-8 shadow-sm">
              <h3 className="text-3xl font-bold text-[#244d3f]">
                {infoFriend.days_since_contact}
              </h3>
              <p className="mt-1 text-xs tracking-wide text-gray-500 capitalize">
                Days since contact
              </p>
            </div>
            <div className="rounded-xl border border-gray-100 bg-white p-8 shadow-sm">
              <h3 className="text-3xl font-bold text-[#244d3f]">
                {infoFriend.goal}
              </h3>
              <p className="mt-1 text-xs tracking-wide text-gray-500 capitalize">
                Goal (Days)
              </p>
            </div>
            <div className="rounded-xl border border-gray-100 bg-white p-8 shadow-sm">
              <h3 className="text-3xl font-bold text-[#244d3f]">
                {infoFriend.next_due_date}
              </h3>
              <p className="mt-1 text-xs tracking-wide text-gray-500 capitalize">
                Next due date
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <h4 className="font-bold text-gray-700">Relationship Goal</h4>
              <button className="btn btn-ghost btn-xs border border-gray-200 capitalize">
                Edit
              </button>
            </div>
            <p className="text-base text-gray-600">
              Connect every{' '}
              <span className="font-bold text-black">
                {infoFriend.goal} days
              </span>
            </p>
          </div>

          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <h4 className="mb-6 font-bold text-gray-700">Quick Check-In</h4>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <button
                onClick={() => handleInteraction('Call')}
                className="group flex items-center justify-center gap-3 rounded-xl border border-gray-100 p-6 transition-all hover:bg-gray-50"
              >
                <IoIosCall /> <span className="text-sm font-bold">Call</span>
              </button>
              <button
                onClick={() => handleInteraction('Text')}
                className="group flex items-center justify-center gap-3 rounded-xl border border-gray-100 p-6 transition-all hover:bg-gray-50"
              >
                <IoIosText /> <span className="text-sm font-bold">Text</span>
              </button>
              <button
                onClick={() => handleInteraction('Video')}
                className="group flex items-center justify-center gap-3 rounded-xl border border-gray-100 p-6 transition-all hover:bg-gray-50"
              >
                <FaVideo /> <span className="text-sm font-bold">Video</span>
              </button>
            </div>
          </div>

          <div className="min-h-37.5 flex flex-col rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center justify-between">
              <h4 className="font-bold text-gray-700">Recent Interactions</h4>
              <button className="btn btn-outline text-xs font-bold text-gray-700 transition-colors hover:text-[#244d3f]">
                <MdHistory /> Full History
              </button>
            </div>

            <div className="flex flex-1 flex-col gap-3">
              {interactions.filter(item => item.id === infoFriend.id).length >
              0 ? (
                interactions
                  .filter(item => item.id === infoFriend.id)
                  .map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between border-b border-gray-50 pb-2"
                    >
                      <p className="text-sm font-medium">
                        {item.interactionMethod} on {item.interactionDate}
                      </p>
                    </div>
                  ))
              ) : (
                <div className="flex flex-1 items-center justify-center">
                  <p className="text-sm text-gray-300 italic capitalize">
                    No interactions.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;
