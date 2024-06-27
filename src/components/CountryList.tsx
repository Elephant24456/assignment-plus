// import { useEffect, useState } from "react";
// import { getData } from '../api/countries'


// function CountryList() {
//     const [countryList, setCountryList] = useState([])

//     useEffect(() => {
//         const getCountryList = async () => {
//             const response       
//         }
//     }, []) //  <<<< 의존성배열 빈배열이면 => 첫 렌더링에만 동작

//     return (<></>);
// }

// export default CountryList;
import { useEffect, useState } from "react";
import { getData } from '../api/countries'
import { Countrytype } from "../types/countrytype";

function CountryList() {
    const [countryList, setCountryList] = useState<Countrytype[]>([]);

    useEffect(() => {
        const getCountryList = async () => {
            const countryInfo = await getData();
            setCountryList(countryInfo);
        };
        getCountryList();
    }, [])

    return (
        <div>
            {countryList.map((country, index) => (
                <div key={index}>
                    <img src={country.flags.png} />
                    <h3>{country.name.common}</h3>
                    <p>{country.capital}</p>
                </div>
            ))}
        </div>
    );
}

export default CountryList;