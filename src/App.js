// 📌 라우팅 설정 (App.js)
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SajuForm from "./components/SajuForm";
import SajuResult from "./components/SajuResult";
import "./App.css";

const App = () => {
    return (
        <Router>
            <div className="app-container">
                <Routes>
                    <Route path="/" element={<SajuForm />} />
                    <Route path="/result" element={<SajuResult />} />
                </Routes>
            </div>
        </Router>
    );
};
export default App;
