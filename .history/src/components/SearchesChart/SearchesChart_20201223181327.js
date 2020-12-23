import React from 'react';
import { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import Breakpoints from '../../config/Breakpoints';

const SearchesChart = ({ data }) => {
  const [ethnicityOptions, setEthnicityOptions] = useState([]);
  const [ethnicityData, setEthnicity] = useState([]);

  const getEthnicityOptions = () => {
    let ethnicityOptions = Array.from(
      new Set(data.map(({ self_defined_ethnicity }) => self_defined_ethnicity))
    );
    setEthnicityOptions(ethnicityOptions);
  };

  const getEthnicityData = () => {
    return ethnicityOptions.map((ethnicity) => {
      const size = data.filter(
        (item) => item.self_defined_ethnicity === ethnicity
      ).length;
      return size;
    });
  };

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
                data: getEthnicityData(),
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
