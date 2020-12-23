import React from 'react';
import { useState, useEffect } from 'react';
import useData from '../hooks/useData';

const ForceSummary = ({ selected }) => {
  const [data, isLoading, isError] = useData('data/hero-data.json');
  console.log('data: ' + data + 'loading: ' + isLoading + 'error: ' + isError);

 
  return <React.Fragment>force summary</React.Fragment>;
};
export default ForceSummary;
