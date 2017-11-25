import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';
import reducer from '../../src/reducers/ArtistsReducer';

const ARTISTS_FIXTURE = require('../fixtures/artists').artists;
const SINGLE_ARTIST_FIXTURE = require('../fixtures/artist');

describe('Artists reducer',  () => {
  it('handles the RECEIVE_ARTISTS action', () => {
    const initialState = Map();
    const action = {
      type: 'RECEIVE_ARTISTS',
      artists: ARTISTS_FIXTURE,
    };

    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      isFetching: false,
      items: ARTISTS_FIXTURE.items
    }));
  });

  it('handles the REQUEST_ARTISTS action', () => {

    const initialState = Map();
    const action = {
      type: 'REQUEST_ARTISTS'
    };

    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      isFetching: true
    }));
  });

  it('handles the RECEIVE_ARTIST_DETAILS action', () => {
    const initialState = Map();
    const action = {
      type: 'RECEIVE_ARTIST_DETAILS',
      artist: SINGLE_ARTIST_FIXTURE
    };

    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      isFetching: false,
      details: SINGLE_ARTIST_FIXTURE
    }))
  });

  it('handles the REQUEST_ARTIST_DETAILS action', () => {
    const initialState = Map();
    const action = {
      type: 'REQUEST_ARTIST_DETAILS'
    };

    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      isFetching: true
    }));
  });

  it('returns the same state when an unregistered action is provided', () => {
    const initialState = Map();

    const action = {
      type: 'INVENT'
    };

    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(initialState);
  });

  it('returns an initial state when no state is provided', () => {
    const action = {
      type: 'INVENT'
    };

    const nextState = reducer(undefined, action);

    expect(nextState).to.equal(fromJS({
      isFetching: false,
      items: [],
      details: {}
    }));
  });
});