import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const SajuForm = () => {
    const [birthDate, setBirthDate] = useState("");
    const [birthTime, setBirthTime] = useState("");
    const [name, setName] = useState("");
    
    const [birthPlace, setBirthPlace] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/result", { state: { birthDate, birthTime, name, birthPlace } });
    };

    return (
        <div className="container">
            <h1 className="title">사주풀이</h1>
            <form onSubmit={handleSubmit} className="saju-form">
                <label>생년월일:</label>
                <input type="date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} required />
                <label>생시:</label>
                <input type="time" value={birthTime} onChange={(e) => setBirthTime(e.target.value)} required />
                <label>이름:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                
                <label>출생지:</label>
                <input type="text" value={birthPlace} onChange={(e) => setBirthPlace(e.target.value)} required />
                <button type="submit">사주 보기</button>
            </form>
        </div>
    );
};
export default SajuForm;