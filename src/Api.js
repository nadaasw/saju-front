import axios from "axios";

const API_BASE_URL = "https://saju-back.onrender.com"; // FastAPI 서버 주소

export const getSaju = async (birthDate, birthTime, name, birthPlace) => {
    try {
        console.log("API 요청 전송:", { birthDate, birthTime, name, birthPlace }); // 디버깅 로그
        const response = await axios.post(`${API_BASE_URL}/saju/`, {
            birth_date: birthDate,
            birth_time: birthTime,
            name: name,
            birth_place: birthPlace
        }, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        console.log("API 응답:", response.data); // 응답 확인
        return response.data;
    } catch (error) {
        console.error("API 요청 오류:", error);
        return { error: "사주 풀이를 가져오지 못했습니다." };
    }
};