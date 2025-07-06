import { createContext, useContext, useState } from "react";

const FilterContext = createContext(undefined);
// const FilterContext = createContext("test");

export const FilterProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [minPrice, setMinPrice] = useState(undefined);
  const [maxPrice, setMaxPrice] = useState(undefined);
  const [keyword, setKeyword] = useState("");

  return (
    <FilterContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        selectedCategory,
        setSelectedCategory,
        minPrice,
        setMinPrice,
        maxPrice,
        setMaxPrice,
        keyword,
        setKeyword,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
    // console.log(FilterContext);
  const context = useContext(FilterContext);
//   const context = 1;
  if (context === undefined) {
//   if (context === "test") {
    throw new Error("useFilter must be used within a FilterProvider");
  }
  return context;
};