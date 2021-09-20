import React, { useEffect, useMemo, useState } from "react";
import CountriesRequest from "./components/API/CountriesRequest";
import Header from "./components/header";
import ModalWindow from "./components/ModalWindow/ModalWindow";
import Table from "./components/Table";
import MyInput from "./components/UI/MyInput";
import "./styles/App.css";

export const SORT_TYPES = {
  DEFAULT: "Default",
  TOTAL: "TotalConfirmed",
  COUNTRY: "Country",
};

function App() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState();
  const [sortType, setSortType] = useState(SORT_TYPES.DEFAULT);
  const [searchValue, setSearchValue] = useState("");
  console.log(searchValue);

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    const response = await CountriesRequest.getCountries();
    setCountries(response);
  }

  const createModal = (selectCountry) => {
    setSelectedCountry(selectCountry);
  };

  const sortByCountry = () => {
    return [...countries].sort((a, b) =>
      a[SORT_TYPES.COUNTRY]
        .toString()
        .localeCompare(b[SORT_TYPES.COUNTRY].toString())
    );
  };

  const sortByTotalConfirmed = () => {
    return [...countries].sort((a, b) =>
      Number(b[SORT_TYPES.TOTAL] - Number(a[SORT_TYPES.TOTAL]))
    );
  };

  const getSortedItems = () => {
    switch (sortType) {
      case SORT_TYPES.TOTAL:
        return sortByTotalConfirmed();
      case SORT_TYPES.COUNTRY:
        return sortByCountry();
      default:
        return countries;
    }
  };

  const items = getSortedItems();

  const filtredCountries = useMemo(
    () =>
      items.filter((country) =>
        country.Country.toLowerCase().includes(searchValue.toLowerCase(), 0)
      ),
    [items, searchValue]
  );

  return (
    <div className='App'>
      <ModalWindow
        createModal={createModal}
        selectedCountry={selectedCountry}
      ></ModalWindow>
      <div className='header-container'>
        <Header />
        <MyInput setSearchValue={setSearchValue} />
      </div>
      <div className='table-container'>
        <Table
          applySort={setSortType}
          createModal={createModal}
          countries={filtredCountries}
        />
      </div>
    </div>
  );
}

export default App;
