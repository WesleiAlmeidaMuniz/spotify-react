import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Main from "./components/Main";
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <Sidebar />
      <div className="main-container">
        <Header onSearch={setSearchTerm} />
        <Main searchTerm={searchTerm} />
      </div>
      <Footer />
    </>
  );
}

export default App;
