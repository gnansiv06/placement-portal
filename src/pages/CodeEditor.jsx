export default function CodeEditor() {
  return (
    <div style={{
      padding: "40px",
      fontFamily: "Arial",
      background: "#f5f5f5",
      minHeight: "100vh"
    }}>

      {/* HERO SECTION */}
      <div style={{
        background: "white",
        padding: "30px",
        borderRadius: "10px",
        marginBottom: "20px"
      }}>
        <h1>👨‍💻 Java Developer Portfolio</h1>
        <p>Entry-Level Java Developer | React + Java Enthusiast</p>
      </div>

      {/* ABOUT */}
      <div style={{
        background: "white",
        padding: "20px",
        borderRadius: "10px",
        marginBottom: "20px"
      }}>
        <h2>About Me</h2>
        <p>
          I am a passionate Java developer focused on building backend systems,
          problem-solving using DSA, and creating web applications using React + Java.
        </p>
      </div>

      {/* SKILLS */}
      <div style={{
        background: "white",
        padding: "20px",
        borderRadius: "10px",
        marginBottom: "20px"
      }}>
        <h2>Skills</h2>
        <ul>
          <li>Java (Core + OOP)</li>
          <li>Data Structures & Algorithms</li>
          <li>React.js</li>
          <li>Basic Spring Boot</li>
          <li>MySQL</li>
        </ul>
      </div>

      {/* PROJECTS */}
      <div style={{
        background: "white",
        padding: "20px",
        borderRadius: "10px",
        marginBottom: "20px"
      }}>
        <h2>Projects</h2>

        <h3>1. Student Management System</h3>
        <p>Java console app using OOP concepts for managing student data.</p>

        <h3>2. Online Quiz Application</h3>
        <p>Java-based quiz system with scoring logic.</p>

        <h3>3. Library Management System</h3>
        <p>Handles book issue/return using Java classes and objects.</p>
      </div>

      {/* CODE BLOCK */}
      <div style={{
        background: "#111",
        color: "#0f0",
        padding: "20px",
        borderRadius: "10px",
        marginBottom: "20px"
      }}>
        <h2 style={{ color: "white" }}>Java Sample Code</h2>

        <pre>{`
class Main {
    public static void main(String[] args) {
        System.out.println("Hello, I am a Java Developer!");
    }
}
        `}</pre>
      </div>

      {/* CONTACT */}
      <div style={{
        background: "white",
        padding: "20px",
        borderRadius: "10px"
      }}>
        <h2>Contact</h2>
        <p>Email: yourmail@gmail.com</p>
        <p>GitHub: github.com/yourprofile</p>
        <p>LinkedIn: linkedin.com/in/yourprofile</p>
      </div>

    </div>
  );
}