import { createStore, applyMiddleware, compose } from 'redux';
import {
    SELECT_TRACK,
    FETCH_TRACK_LIST,
    FETCH_TRACK_LIST_SUCCESS,
    FETCH_SELECTED_TRACK,
    FETCH_SELECTED_TRACK_SUCCESS
} from './actions';
import thunk from 'redux-thunk';

export const initialState = {
    fetchingTrackList: false,
    trackList: [],
    selectedTrackId: undefined,
    fetchingSelectedTrack: false,
    selectedTrack: undefined,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_TRACK:
            return { ...state, selectedTrackId: action.payload }
        case FETCH_TRACK_LIST: 
            return { ...state, fetchingTrackList: true }
        case FETCH_TRACK_LIST_SUCCESS:
            return { ...state, trackList: action.payload, fetchingTrackList: false }
        case FETCH_SELECTED_TRACK:
            return { ...state, fetchingSelectedTrack: true }
        case FETCH_SELECTED_TRACK_SUCCESS:
            return { ...state, selectedTrack: action.payload, fetchingSelectedTrack: false }
        default:
            return state;
    }

}
const store = createStore(
    reducer, 
    compose(
        applyMiddleware(thunk)
    )
  );
export default store;