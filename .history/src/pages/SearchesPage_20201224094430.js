import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Loading from '../components/Loading';
import SearchesChart from '../components/SearchesChart';
import SearchesItemDetail from '../components/SearchesItemDetail';
import Modal from 'react-modal';
import useData from '../hooks/useData';

const SearchesPage = ({ match, location }) => {
  const [data, isLoading, isError] = useData(
    `/stops-force?force=${match.params.id}`
  );

  const [selectedSearchItem, setSelectedSearchItem] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)'
    }
  };

  const renderedSearches = () => {
    if (!data.length) {
      return <div>No search details available for this force.</div>;
    }

    return data.map((search, index) => {
      return (
        <li
          key={`searches-${index}`}
          className="ui segment search-item no-bullets"
          onClick={() => onSearchItemSelect(search)}
        >
          Gender: {search.gender}, <br />
          Age range: {search.age_range}, <br />
          Search type: {search.object_of_search}
        </li>
      );
    });
  };

  const onSearchItemSelect = (search) => {
    setSelectedSearchItem(search);
    openModal();
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return (
      <div className="loading-error">
        <p>Oops - something went wrong ...</p>
      </div>
    );
  }

  return (
    <div>
      <div className="ui container">
        {/*<h1>{match.params.id} searches for the last month</h1>*/}
        <Link to={'/'} className="ui button primary">
          Back to homepage
        </Link>

        <div className="ui segment">
          <div className="ui grid">
            <div className="ui row">
              <div className="sixteen wide column">
                <h2>Self-defined ethnicity</h2>

                <div className="mobile-hidden">
                  {data && <SearchesChart data={data} />}
                </div>

                <h3>Click on an item for more detail</h3>
                <ul className="no-padding">{renderedSearches()}</ul>

                <Modal
                  isOpen={modalIsOpen}
                  onAfterOpen={afterOpenModal}
                  onRequestClose={closeModal}
                  style={customStyles}
                  contentLabel="Example Modal"
                >
                  <button onClick={closeModal}>close</button>
                  <h2>Search details</h2>
                  <SearchesItemDetail selectedSearchItem={selectedSearchItem} />
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchesPage;
