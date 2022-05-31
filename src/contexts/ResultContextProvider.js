import React, { createContext, useContext, useState } from "react";

const ResultsContext = createContext();
const baseUrl = "https://google-search3.p.rapidapi.com/api/v1"


const ResultContextProvider = ([children]) => {
    const [results, setResults] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    

  return (
    <div>ResultContextProvider</div>
  )
}


export default ResultContextProvider;