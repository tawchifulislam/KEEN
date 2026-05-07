import Friends from '../components/Friends';
import { FaPlus } from 'react-icons/fa';

const Home = () => {
  return (
    <section className="bg-[#f8fafc] min-h-screen flex flex-col items-center py-10 md:py-16">
      <div className="text-black max-w-4xl text-center px-4 md:px-6 mb-10">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl mb-4 leading-tight md:whitespace-nowrap">
          Friends to keep close in your life
        </h1>
        <p className="mb-8 text-sm md:text-base lg:text-lg opacity-80 max-w-md mx-auto">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
        <button className="btn bg-[#244D3F] hover:bg-[#1a3a2f] border-none px-6 py-3 rounded-md text-white flex items-center gap-2 mx-auto transition-all shadow-md">
          <FaPlus />
          Add a Friend
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full max-w-6xl px-4 md:px-8">
        <div className="bg-white shadow-sm border border-gray-100 rounded-xl p-6 text-center text-black flex flex-col justify-center transition-transform">
          <h2 className="font-bold text-2xl md:text-3xl text-[#244D3F]">10</h2>
          <p className="text-gray-600 text-sm font-medium">Total Friends</p>
        </div>
        <div className="bg-white shadow-sm border border-gray-100 rounded-xl p-6 text-center text-black flex flex-col justify-center transition-transform">
          <h2 className="font-bold text-2xl md:text-3xl text-[#244D3F]">4</h2>
          <p className="text-gray-600 text-sm font-medium">On Track</p>
        </div>
        <div className="bg-white shadow-sm border border-gray-100 rounded-xl p-6 text-center text-black flex flex-col justify-center transition-transform">
          <h2 className="font-bold text-2xl md:text-3xl text-[#244D3F]">6</h2>
          <p className="text-gray-600 text-sm font-medium">Need Attention</p>
        </div>
        <div className="bg-white shadow-sm border border-gray-100 rounded-xl p-6 text-center text-black flex flex-col justify-center transition-transform">
          <h2 className="font-bold text-2xl md:text-3xl text-[#244D3F]">12</h2>
          <p className="text-gray-600 text-sm font-medium">
            Interactions This Month
          </p>
        </div>
      </div>

      <div className="w-full max-w-6xl px-4 md:px-8 mt-12">
        <Friends />
      </div>
    </section>
  );
};

export default Home;
