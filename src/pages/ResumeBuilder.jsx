import { useState } from "react";
import jsPDF from "jspdf";

function ResumeBuilder() {
  const [name, setName] = useState("");
  const [skills, setSkills] = useState("");
  const [education, setEducation] = useState("");

  function downloadResume() {
    const doc = new jsPDF();

    doc.setFontSize(22);
    doc.text(name || "Your Name", 20, 20);

    doc.setFontSize(16);
    doc.text("Skills", 20, 40);

    doc.setFontSize(12);
    doc.text(skills || "No skills added", 20, 50);

    doc.setFontSize(16);
    doc.text("Education", 20, 70);

    doc.setFontSize(12);
    doc.text(education || "No education added", 20, 80);

    doc.save("resume.pdf");
  }

  return (
    <div className="p-8 bg-gray-100 min-h-screen">

      <h1 className="text-4xl font-bold text-slate-800">
        Resume Builder
      </h1>

      <div className="grid md:grid-cols-2 gap-10 mt-10">

        <div className="bg-white p-6 rounded-xl shadow">

          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border rounded-lg mb-4"
          />

          <input
            type="text"
            placeholder="Enter Skills"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            className="w-full p-3 border rounded-lg mb-4"
          />

          <input
            type="text"
            placeholder="Enter Education"
            value={education}
            onChange={(e) => setEducation(e.target.value)}
            className="w-full p-3 border rounded-lg mb-6"
          />

          <button
            onClick={downloadResume}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Download Resume PDF
          </button>

        </div>

        <div className="bg-white p-6 rounded-xl shadow">

          <h2 className="text-3xl font-bold">
            {name || "Your Name"}
          </h2>

          <div className="mt-6">
            <h3 className="text-xl font-semibold">
              Skills
            </h3>

            <p className="text-gray-600 mt-2">
              {skills || "Your skills will appear here"}
            </p>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold">
              Education
            </h3>

            <p className="text-gray-600 mt-2">
              {education || "Your education will appear here"}
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default ResumeBuilder;