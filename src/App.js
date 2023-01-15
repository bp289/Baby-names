import logo from "./logo.svg";
import "./App.css";
import Search from "./Components/Search";
import Names from "./Components/names.js";
import { useState } from "react";
let ImpData = require("./Data/babyNamesData.json");
ImpData.sort((a, b) => {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();
  if (nameA < nameB) {
    return -1;
  } else {
    return nameA > nameB ? 1 : 0;
  }
});
function App() {
  const [data, setData] = useState(ImpData);
  const [query, setQuery] = useState("");
  const handleSearch = (currentSearch) => {
    setQuery(currentSearch);
  };
  const handleGenderChange = (gender) => {
    console.log(gender);
    if (gender === "m") {
      setData(ImpData.filter((e) => e.sex === "m"));
    } else if (gender === "f") {
      setData(ImpData.filter((e) => e.sex === "f"));
    } else if (gender === "all") {
      setData(ImpData);
    }
  };

  return (
    <div className="App">
      <Search handleSearch={handleSearch} />
      <div onChange={(e) => handleGenderChange(e.target.value)}>
        <input type="radio" value="m" name="gender" /> m
        <input type="radio" value="f" name="gender" /> f
        <input type="radio" value="all" name="gender" /> All
      </div>
      <Names query={query} data={data} />
    </div>
  );
}

export default App;
