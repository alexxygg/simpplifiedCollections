import "./App.css";
import TestAccount from "./TestAccount";
import Header from "./Header";
import Header2 from "./Header2";
import Header3 from "./Header3";
import Notes from "./Notes";
import NewNote from "./NewNote";

function App() {
  return (
    <div className="App">
      <Header />
      <Header2 />
      <Header3 />
      <TestAccount />
      <Notes />
    </div>
  );
}

export default App;
