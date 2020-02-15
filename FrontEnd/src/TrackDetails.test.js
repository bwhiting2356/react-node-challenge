import React from 'react';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react'
import configureStore from 'redux-mock-store';
import TrackDetails from './TrackDetails';
import { initialState } from './store/store';

const mockStore = configureStore([thunk]);

describe('TrackDetails tests', () => {
    it('should render a spinner if the selected track is currently fetching', () => {
        const store = mockStore({ ...initialState, fetchingSelectedTrack: true });
        render(
            <Provider store={store}>
              <TrackDetails />
            </Provider>
        );
        expect(screen.getByTestId('spinner')).toBeTruthy()
    });

    it('should render the info message if there is no selected track and is not fetching', () => {
        const store = mockStore({ ...initialState, selectedTrack: undefined, fetchingSelectedTrack: true });
        render(
            <Provider store={store}>
              <TrackDetails />
            </Provider>
        );
        expect(screen.getByTestId('info-message')).toBeTruthy()
    });

    it('should render a track details card if the selected track is present', () => {
        const store = mockStore({ 
            ...initialState, 
            selectedTrack: {
                artist: 'Halsey',
                track_title: 'Without me'
            }, 
            fetchingSelectedTrack: false 
        });
        render(
            <Provider store={store}>
              <TrackDetails />
            </Provider>
        );
        expect(screen.getByTestId('details-card')).toBeTruthy()
        expect(screen.getByText('Without me')).toBeTruthy();
        expect(screen.getByText('by Halsey')).toBeTruthy();
    });
});