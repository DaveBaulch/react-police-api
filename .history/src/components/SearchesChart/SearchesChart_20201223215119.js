import React from 'react';
import { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import Breakpoints from '../../config/Breakpoints';

const SearchesChart = ({ data }) => {
  // const [ethnicityOptions, setEthnicityOptions] = useState([]);
  // const [ethnicityData, setEthnicityData] = useState([]);

  const ethnicityOptions = Array.from(
    new Set(data.map(({ self_defined_ethnicity }) => self_defined_ethnicity))
  );

//   const ethnicityData = ethnicityOptions.map((ethnicity) => {
//     const size = data.filter(
//       (item) => item.self_defined_ethnicity === ethnicity
//     ).length;
//     return size;
//   });

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

  // useEffect(() => {
  //   const ethnicityOptions = Array.from(
  //     new Set(data.map(({ self_defined_ethnicity }) => self_defined_ethnicity))
  //   );
  //   setEthnicityOptions(ethnicityOptions);
  // }, [data]);

  // useEffect(() => {
  //   const ethnicityData = ethnicityOptions.map((ethnicity) => {
  //     const size = data.filter(
  //       (item) => item.self_defined_ethnicity === ethnicity
  //     ).length;
  //     return size;
  //   });
  //   setEthnicityData(ethnicityData);
  // }, [data, ethnicityOptions]);

  return <div>{showGraph()}</div>;
};

export default SearchesChart;
