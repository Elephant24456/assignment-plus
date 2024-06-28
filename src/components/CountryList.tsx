import { useEffect, useState } from "react";
import { getData } from '../api/countries'
import { Countrytype } from "../types/countrytype";
import CountryCard from "./CountryCard";

// 컴포넌트의 props 인터페이스 정의
interface CountryListProps {
    onAdd: (country: Countrytype) => void;
    favoriteCountries: Countrytype[];
}

// CountryList 컴포넌트 정의
function CountryList({ onAdd, favoriteCountries }: CountryListProps) {
    // 국가 목록 상태 및 정렬 순서 상태 선언
    const [countryList, setCountryList] = useState<Countrytype[]>([]);
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

    // 컴포넌트 마운트 시 국가 데이터 가져오기
    useEffect(() => {
        const getCountryList = async () => {
            const countryInfo = await getData();
            setCountryList(countryInfo);
        };
        getCountryList();
    }, [])

    // 즐겨찾기에 국가 추가하기
    const handleAddToFavorites = (country: Countrytype) => {
        onAdd(country);
    };

    // 국가 목록 정렬하기
    const handleSortCountries = () => {
        setCountryList(prevCountryList => {
            const sortedCountries = [...prevCountryList].sort((a, b) => {
                if (a.name.common < b.name.common) return sortOrder === 'asc' ? -1 : 1;
                if (a.name.common > b.name.common) return sortOrder === 'asc' ? 1 : -1;
                return 0;
            });
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
            return sortedCountries;
        });
    };

    // 렌더링
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px'
        }}>
            <button onClick={handleSortCountries}>
                Sort by Name ({sortOrder === 'asc' ? 'Ascending' : 'Descending'})
            </button>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '20px'
            }}>
                {countryList.filter(country => !favoriteCountries.some(favorite => favorite.name.common === country.name.common)).map((country, index) => (
                    <CountryCard
                        key={index}
                        country={country}
                        onRemove={handleAddToFavorites}
                        isFavorite={favoriteCountries.some(favorite => favorite.name.common === country.name.common)}
                    />
                ))}
            </div>
        </div>
    );
}

export default CountryList;
