import "./App.css";
import Jobs from "./components/jobs";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Jobs />
        <Footer />
      </div>
    </>
  );
}

export default App;
