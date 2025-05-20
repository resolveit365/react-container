import Student from "./Student.jsx";

function App() {
  return (
    <>
      <Student name="Brad Peyton" age={54} isStudent={false} />
      <Student name="Johnna Peyton" age={51} isStudent={false} />
      <Student name="Blake Peyton" age={25} isStudent={true} />
      <Student name="Ashlan Jackson" age="29" isStudent={false} />
    </>
  );
}

export default App;
