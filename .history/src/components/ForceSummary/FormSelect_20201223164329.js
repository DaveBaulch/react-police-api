const ForceSummary = () => {
  const [term, setTerm] = useState('');

  const onSelectChange = (event) => {
    setTerm(event.target.value);
    onFilterSelectChange(event);
  };

  return <React.Fragment>force summary</React.Fragment>;
};
export default ForceSummary;
