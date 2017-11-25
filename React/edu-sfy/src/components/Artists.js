import React, {Component} from 'react';
import {connect} from 'react-redux';
import ArtistCard from '../components/ArtistCard';
import SearchBar from '../components/SearchBar';

export class Artists extends Component {


  renderArtists() {
    const chunk = 5;
    const {dispatch} = this.props; // Obtain the dispatch function from the store object passed to the App component by the 'Provider' parent component
    const {items} = this.props.artists;
    const {input} = this.props.inputs;

    let result = [];

    for (let i = 0; i < items.length; i += chunk) {
      let artistCards = items
        .slice(i, i + chunk)
        .map((artist, idx) => {
          return <ArtistCard key={artist.id} artist={artist} />
      });

      if (artistCards.length < chunk) {
        for (let j = 0; j < chunk - artistCards.length + 1; j++) {
          artistCards.push(<div className="col-md-2" key={'artist-placeholder-' + j}></div>);
        }
      }

      result.push(<div className="row equal" key={'songs-row-' + i}>{artistCards}</div>);
    }

    if (!result || result.length === 0) {
      return <SearchBar dataType="artists" dispatch={dispatch} value={input} />;
    }

    return result;
  }

  render() {
    return (
      <div>
        {this.renderArtists()}
      </div>
    );
  }
}

/*
* This function injects some of the fields of the application state into this component props.
*/
function mapStateToProps(state) {
  const {artists, inputs} = state;
  return {
    artists: artists.toJS(), // Esta função injeta alguns dos campos do estado da aplicação neste suporte de componentes.
    inputs: inputs.toJS() // Entradas que contém um campo: 'input'
  };
}

export const ArtistsContainer = connect(mapStateToProps)(Artists);