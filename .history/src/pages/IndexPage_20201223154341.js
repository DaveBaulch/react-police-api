import React from 'react';
import { Link } from 'react-router-dom';
import useData from '../hooks/useData';
import Dropdown from '../components/Dropdown';
import policeapi from '../apis/policeapi';

const IndexPage = () => {

  //   forces: [],
  //   selectedForce: null,
  //   selectedForceName: '',
  //   selectedForceUrl: '',
  //   selectedForceDescription: ''
  // };

  onSelectChange = (event) => {
    //console.log('Changed');
    const selectedForce =
      event.target.options[event.target.selectedIndex].value;
    //console.log(selectedForce);
    if (selectedForce === '') {
      this.setState({ selectedForce: null });
      this.setState({ selectedForceName: '' });
      this.setState({ selectedForceUrl: '' });
      this.setState({ selectedForceDescription: '' });
      return;
    }

    this.setState({ selectedForce: selectedForce });

    policeapi
      .get(`/forces/${selectedForce}`)
      .then((response) => {
        console.log(response.data);
        this.setState({ selectedForceName: response.data.name });
        this.setState({ selectedForceUrl: response.data.url });
        this.setState({ selectedForceDescription: response.data.description });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  componentDidMount() {
    policeapi
      .get('/forces')
      .then((response) => {
        console.log(response.data);
        this.setState({ forces: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <div className="ui container">
          <h1>UK force data API</h1>

          <div className="ui segment">
            <div className="ui grid">
              <div className="ui row">
                <div className="twelve wide column">
                  <h2>Select a force:</h2>

                  <Dropdown
                    forces={this.state.forces}
                    onSelectChange={this.onSelectChange}
                  />

                  {this.state.selectedForce && (
                    <h3>Selected force: {this.state.selectedForce}</h3>
                  )}
                  {this.state.selectedForceName && (
                    <h3>Selected force name: {this.state.selectedForceName}</h3>
                  )}
                  {this.state.selectedForceUrl && (
                    <h3>
                      Selected force URL:{' '}
                      <a href={this.state.selectedForceUrl}>
                        {this.state.selectedForceUrl}
                      </a>
                    </h3>
                  )}
                  <div
                    dangerouslySetInnerHTML={{
                      __html: this.state.selectedForceDescription
                    }}
                  ></div>

                  <br />

                  {this.state.selectedForce && (
                    <Link
                      to={{
                        pathname: `/officers/${this.state.selectedForce}`,
                        state: {
                          selectedForceName: this.state.selectedForceName
                        }
                      }}
                      className="ui button primary mb-10"
                    >
                      View officer data for this force
                    </Link>
                  )}

                  {this.state.selectedForce && (
                    <Link
                      to={{
                        pathname: `/searches/${this.state.selectedForce}`,
                        state: {
                          selectedForceName: this.state.selectedForceName
                        }
                      }}
                      className="ui button primary"
                    >
                      View search data for this force
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default IndexPage;
