import React from 'react';

const SearchesChart = ({ data }) => {
  const getEthnicityOptions = () => {
    let ethnicityOptions = Array.from(
      new Set(data.map(({ self_defined_ethnicity }) => self_defined_ethnicity))
    );
    setEthnicityOptions(ethnicityOptions);
    return ethnicityOptions;
    getEthnicityData();
  };

  // const getEthnicityData = () => {
  //   return ethnicityOptions.map((ethnicity) => {
  //     //console.log(ethnicity);
  //     const size = data.filter(
  //       (item) => item.self_defined_ethnicity === ethnicity
  //     ).length;
  //     return size;
  //   });
  // };

  useEffect(() => {
    if (data.length) {
      getEthnicityOptions();
    }
  }, [data]);

  return <div>Chart goes here</div>;
};

export default SearchesChart;
