import React from 'react';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react'
import configureStore from 'redux-mock-store';
import TrackList from './TrackList';
import { initialState } from './store/store';
import axios from 'axios';
jest.mock("axios");

import { SELECT_TRACK, FETCH_SELECTED_TRACK, FETCH_TRACK_LIST, parseTracks } from './store/actions';

const mockTracksResponse = {
	"100": {
		"track_title": "Without me",
		"artist": "Halsey"
	},
	"101": {
		"track_title": "Bad guy",
		"artist": "Billie Eilish"
	},
	"102": {
		"track_title": "Wow",
		"artist": "Post Malone"
	},
	"103": {
		"track_title": "Talk",
		"artist": "Khalid"
	}
}

const mockStore = configureStore([thunk]);

describe('TrackList tests', () => {
    beforeAll(() => {
        axios.get.mockImplementation(() => Promise.resolve({ data: { tracks: mockTracksResponse }}));
        axios.post.mockImplementation(() => Promise.resolve({ data: { track: { track_title: "Wow",
		artist: "Post Malone"} }}));

    })
    
    it('should render a spinner if the track list is currently fetching', () => {
        const store = mockStore({ ...initialState, fetchingTrackList: true });
        render(
            <Provider store={store}>
              <TrackList />
            </Provider>
        );
        expect(screen.getByTestId('spinner')).toBeTruthy();
    });

    it('should render a track table if the track list is not currently fetching', () => {
        const store = mockStore({ ...initialState, fetchingTrackList: false, trackList: parseTracks(mockTracksResponse) });
        render(
            <Provider store={store}>
              <TrackList />
            </Provider>
        );
        expect(screen.getByTestId('track-table')).toBeTruthy()
        expect(screen.getByText('Without me')).toBeTruthy();
        expect(screen.getByText('Halsey')).toBeTruthy();
    });

    it('should dispatch an action to fetch the track list when the component first renders', () => {
        const store = mockStore({ ...initialState });
        render(
            <Provider store={store}>
              <TrackList />
            </Provider>
        );
        expect(store.getActions()).toEqual([{ type: FETCH_TRACK_LIST }]);
    })

    it('should dispatch an action to select a track when a row is clicked', async () => {
        const store = mockStore({ ...initialState, trackList: parseTracks(mockTracksResponse) });
        render(
            <Provider store={store}>
              <TrackList />
            </Provider>
        );
        screen.getByText('Halsey').click()
        expect(store.getActions()).toEqual([
            { type: FETCH_TRACK_LIST },
            { type: SELECT_TRACK, payload: "100" },
            { type: FETCH_SELECTED_TRACK }
        ]);
    });
})