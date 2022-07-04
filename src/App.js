import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap.bundle.min.js";
import 'bootstrap/dist/js/bootstrap.bundle'

import 'bootstrap-icons/font/bootstrap-icons.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import Home from "./pages/home/Home";
import "./style/Style.scss";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import AddNewStudents from "./pages/addNewStudents/AddNewStudents";
import AllStudents from "./pages/allStudents/AllStudents";
import { Footer } from "./components/footer/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main" style={{ flex: '10 auto' }}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="addNewStudents" element={<AddNewStudents />} />
          {/* <Route path="/" element={<App />} /> */}
          <Route path="allStudents" element={<AllStudents />} />
        </Routes>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;