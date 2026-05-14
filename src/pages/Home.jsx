import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center text-white">

      <div className="text-center max-w-2xl p-10 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20">

        <h1 className="text-5xl font-bold">
          PlacePrep AI 🚀
        </h1>

        <p className="text-xl mt-5 text-gray-200">
          Smart Placement Preparation Portal for Aptitude, Coding,
          Resume Builder and Interview Practice.
        </p>

        <button
          onClick={() => navigate("/portfolio")}
          className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg"
        >
          Get Started
        </button>

      </div>

    </div>
  );
}

export default Home;