import { useNavigate, Link } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const userEmail = localStorage.getItem("userEmail");

  const savedScore = localStorage.getItem("quizScore");

  function handleLogout() {
    localStorage.removeItem("userEmail");

    navigate("/login");
  }

  return (
    <div className="p-8 min-h-screen bg-gray-100">

      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold text-slate-800">
            Student Dashboard
          </h1>

          <p className="text-gray-500 mt-2">
            Welcome, {userEmail}
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      <div className="mt-8 bg-white p-6 rounded-xl shadow">
        <h2 className="text-2xl font-semibold">
          Last Quiz Score: {savedScore || 0}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

        <Link to="/quiz">
          <div className="bg-blue-100 p-6 rounded-xl shadow hover:scale-105 transition cursor-pointer">
            <h2 className="text-2xl font-bold">
              Aptitude Quiz
            </h2>

            <p className="mt-2 text-gray-600">
              Practice placement aptitude questions.
            </p>
          </div>
        </Link>
        <Link to="/code">
  <div className="bg-purple-100 p-6 rounded-xl shadow hover:scale-105 transition cursor-pointer">
    <h2 className="text-2xl font-bold">Code Practice</h2>
    <p className="mt-2 text-gray-600">
      Practice Java, Python, C++, JavaScript.
    </p>
  </div>
</Link>
        <Link to="/java-quiz">
  <div className="bg-red-100 p-6 rounded-xl shadow hover:scale-105 transition cursor-pointer">
    <h2 className="text-2xl font-bold">Java Quiz</h2>
    <p className="mt-2 text-gray-600">
      Practice Java MCQ questions for placements.
    </p>
  </div>
</Link>

        <div className="bg-green-100 p-6 rounded-xl shadow hover:scale-105 transition cursor-pointer">
          <h2 className="text-2xl font-bold">
            Coding Practice
          </h2>

          <p className="mt-2 text-gray-600">
            Prepare DSA and coding interview questions.
          </p>
        </div>

        <Link to="/resume">
          <div className="bg-yellow-100 p-6 rounded-xl shadow hover:scale-105 transition cursor-pointer">
            <h2 className="text-2xl font-bold">
              Resume Builder
            </h2>

            <p className="mt-2 text-gray-600">
              Create ATS-friendly resumes.
            </p>
          </div>
        </Link>

      </div>
    </div>
  );
}

export default Dashboard;