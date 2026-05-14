function About() {
  return (
    <div className="p-10 min-h-screen bg-gray-100">

      <div className="bg-white p-8 rounded-2xl shadow-lg">

        <h1 className="text-4xl font-bold text-slate-800">
          About PlacePrep AI
        </h1>

        <p className="mt-6 text-lg text-gray-600 leading-8">
          PlacePrep AI is a smart placement preparation portal
          developed using React and Tailwind CSS.

          The platform helps students prepare for placements
          through aptitude quizzes, resume building,
          coding preparation, and interview practice.

          Users can log in, attend quizzes,
          track scores, and generate ATS-friendly resumes.

          The project focuses on improving placement readiness
          using modern web technologies and interactive UI design.
        </p>

        <div className="mt-10">

          <h2 className="text-2xl font-bold">
            Technologies Used
          </h2>

          <ul className="list-disc ml-8 mt-4 text-gray-700 text-lg">
            <li>React JS</li>
            <li>Tailwind CSS</li>
            <li>React Router</li>
            <li>JavaScript</li>
            <li>Local Storage</li>
            <li>jsPDF</li>
          </ul>

        </div>

      </div>
    </div>
  );
}

export default About;