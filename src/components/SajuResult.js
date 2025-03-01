import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getSaju } from "../Api";
import ReactMarkdown from "react-markdown";
import "../App.css";

const SajuResult = () => {
    const location = useLocation();
    const navigate = useNavigate(); // ✅ 페이지 이동을 위한 navigate 추가
    const { birthDate, birthTime, name, birthPlace } = location.state || {};
    const [sajuResult, setSajuResult] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log("전달된 데이터:", { birthDate, birthTime, name, birthPlace });

        if (birthDate && birthTime && name && birthPlace) {
            getSaju(birthDate, birthTime, name, birthPlace).then((data) => {
                setSajuResult(data.saju_result);
                setLoading(false);
            });
        }
    }, [birthDate, birthTime, name, birthPlace]);

    return (
        <div className="container">
            <h1 className="title">사주 풀이 결과</h1>
            {loading ? (
                <p className="loading">사주 풀이 중...</p>
            ) : (
                <>
                    <div className="result-text">
                        <ReactMarkdown>{sajuResult}</ReactMarkdown>
                    </div>
                    
                    {/* ✅ 처음으로 돌아가기 버튼 추가 */}
                    <div className="button-container">
                        <button className="button" onClick={() => navigate("/")}>처음으로</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default SajuResult;
