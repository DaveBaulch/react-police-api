import React from 'react';
import { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import Breakpoints from '../../config/Breakpoints';

const SearchesChart = ({ data }) => {
  const [ethnicityOptions, setEthnicityOptions] = useState([]);
  const [ethnicityData, setEthnicityData] = useState([]);

  const showGraph = () => {
    if (window.innerWidth > Breakpoints.config.md) {
      return (
        <Bar
          options={{
            scales: {
              xAxes: [
                {
                  ticks: {
                    autoSkip: false
                  }
                }
              ]
            },
            responsive: true
          }}
          data={{
            labels: ethnicityOptions,
            datasets: [
              {
                label: 'Searchs by ethnicity',
                data: ethnicityData,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2
              }
            ]
          }}
        />
      );
    }
  };

  useEffect(() => {
    if (data.length) {
      getEthnicityOptions();
    }
  }, [data, getEthnicityOptions]);

  return <div>{showGraph()}</div>;
};

export default SearchesChart;
