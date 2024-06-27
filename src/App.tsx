import './App.css'
import { getData } from './api/countries'
import CountryCard from './components/CountryCard';
import CountryList from './components/CountryList';

function App() {
  getData();

  return (
    <div>
      <p>Favorite Countries</p>
      <CountryCard />
      <h2>Countries</h2>
      <CountryList />
    </div>
  )
}

export default App
