import './App.css'
import CountryCard from './components/CountryCard';
import CountryList from './components/CountryList';
import { useState } from 'react';
import { Countrytype } from './types/countrytype';

function App() {
  const [favoriteCountries, setFavoriteCountries] = useState<Countrytype[]>([]);

  // 국가를 좋아하는 국가에 추가하는 함수
  const addToFavorites = (country: Countrytype) => {
    // 이미 추가된 국가인지 확인
    if (!favoriteCountries.some(c => c.name.common === country.name.common)) {
      // 목록에 새로운 국가를 추가
      setFavoriteCountries([...favoriteCountries, country]);
    }
  };

  // 국가를 좋아하는 국가에서 제거하는 함수
  const removeFromFavorites = (country: Countrytype) => {
    // 해당 국가를 제거
    setFavoriteCountries(favoriteCountries.filter(c => c.name.common !== country.name.common));
  };

  return (
    <div>
      {/* 좋아하는 국가 목록 */}
      <h2>Favorite Countries</h2>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px'
      }}>
        {favoriteCountries.map((country, index) => (
          <CountryCard key={index} country={country} onRemove={removeFromFavorites} isFavorite={true} />
        ))}
      </div>
      {/* 전체 국가 목록 */}
      <h2>Countries</h2>
      <CountryList onAdd={addToFavorites} favoriteCountries={favoriteCountries} />
    </div>
  )
}

export default App
