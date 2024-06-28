import React from 'react';
import { Countrytype } from "../types/countrytype";

// 국가 카드 컴포넌트의 props 인터페이스
interface CountryCardProps {
    country: Countrytype; // 국가 데이터
    onRemove: (country: Countrytype) => void; // 즐겨찾기에서 제거하는 함수
    isFavorite: boolean; // 즐겨찾기 여부
}

// CountryCard 컴포넌트
const CountryCard: React.FC<CountryCardProps> = ({ country, onRemove, isFavorite }) => {
    // 즐겨찾기에서 제거하는 함수
    const handleRemoveFromFavorites = () => {
        onRemove(country);
    }

    // 국가 카드 렌더링
    return (
        <div
            onClick={handleRemoveFromFavorites} // 클릭하면 즐겨찾기에서 제거
            style={{
                width: '150px', // 카드 크기 설정
                height: '200px',
                cursor: 'pointer', // 마우스 커서를 포인터로 변경
                padding: '10px',
                borderRadius: '5px', // 카드 모서리 둥글게
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // 그림자 효과
                border: isFavorite ? '2px solid green' : 'none', // 즐겨찾기 여부에 따라 테두리 스타일 변경
                display: 'flex', // 카드 내부 요소 정렬
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <img src={country.flags.svg} style={{ maxWidth: '100px', maxHeight: '100px' }} /> {/* 국기 이미지 */}
            <h3 style={{ marginTop: '10px' }}>{country.name.common}</h3> {/* 국가 이름 */}
            <p style={{ marginTop: '5px' }}>{country.capital}</p> {/* 수도 */}
        </div>
    );
};

export default CountryCard;
