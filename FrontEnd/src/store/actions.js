import axios from 'axios';

export const SELECT_TRACK = 'SELECT_TRACK';
export const FETCH_TRACK_LIST = 'FETCH_TRACK_LIST';
export const FETCH_TRACK_LIST_SUCCESS = 'FETCH_TRACK_LIST_SUCCESS';
export const FETCH_SELECTED_TRACK = 'FETCH_SELECTED_TRACK';
export const FETCH_SELECTED_TRACK_SUCCESS = 'FETCH_SELECTED_TRACK_SUCCESS';

const fetchTrackListSuccess = tracks => ({
    type: FETCH_TRACK_LIST_SUCCESS,
    payload: tracks
});

const fetchSelectedTrackSuccess = track => ({
    type: FETCH_SELECTED_TRACK_SUCCESS,
    payload: track
})

export const selectTrack = id => async dispatch => {
    dispatch({ type: SELECT_TRACK, payload: id });
    dispatch({ type: FETCH_SELECTED_TRACK });
    
    const track = (await axios.post('/track', { id })).data.track;
    return dispatch(fetchSelectedTrackSuccess(track));
}

export const parseTracks = tracksObj => {
    return Object.keys(tracksObj).map(key => ({ id: key, ...tracksObj[key]}));
}
export const fetchTrackList = () => async dispatch => {
    dispatch({ type: FETCH_TRACK_LIST })
    const trackList = (await axios.get('/all_tracks')).data.tracks;
    return dispatch(fetchTrackListSuccess(parseTracks(trackList)));
}