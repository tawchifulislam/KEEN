import { Link } from 'react-router';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-5">
      <div className="max-w-6xl w-full flex flex-col items-center justify-center text-center gap-6">
        <h1 className="text-7xl md:text-8xl lg:text-9xl font-black text-[#244d3f]">
          404
        </h1>

        <div className="flex flex-col items-center gap-2">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#244d3f]">
            Opps! Page Not Found.
          </h2>
        </div>

        <Link to="/">
          <button className="btn bg-[#244d3f] hover:bg-[#1a3a2f] text-white border-none shadow-lg px-8 lg:px-10">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
