import { useState, useEffect } from 'react';
import axios from 'axios';

const useData = (query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const queryURL = `https://data.police.uk/api${query}`;

  const getData() = async () => {
    setIsError(false);
    setIsLoading(true);

    try {
      const { data } = await axios.get(queryURL);
      setTimeout(() => {
        setData(data);
        setIsLoading(false);
      }, 300);
    } catch (error) {
      setIsError(true);
    }
  };

  useEffect(() => {
    getData(query);
  });

  return [data, isLoading, isError, getData];
};

export default useData;
