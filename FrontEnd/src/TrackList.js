import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { Table, Header } from 'semantic-ui-react';
import { fetchTrackList, selectTrack } from './store/actions';
import SpinnerSection from './SpinnerSection';

export const TrackTable = ({ trackList, selectedTrackId, selectTrack }) => (
    <Table celled padded data-testid="track-table">
        <Table.Header>
        <Table.Row>
            <Table.HeaderCell>#</Table.HeaderCell>
            <Table.HeaderCell>Title</Table.HeaderCell>
            <Table.HeaderCell>Artist</Table.HeaderCell>
        </Table.Row>
        </Table.Header>

        <Table.Body>
        { trackList.map(({ id, artist, track_title }) => (
            <Table.Row className="track-row" key={id} active={selectedTrackId === id} onClick={() => selectTrack(id)}>
                <Table.Cell>{ id }</Table.Cell>
                <Table.Cell>{ artist }</Table.Cell>
                <Table.Cell>{ track_title }</Table.Cell>
            </Table.Row>
        ))}
        </Table.Body>
    </Table>
);

const TrackList = ({ fetchTrackList, fetching, trackList, selectTrack, selectedTrackId }) => {
    useEffect(() => {
        fetchTrackList();
    }, [fetchTrackList]);

    return (
        <Fragment>
            <Header as='h2'>
                <Header.Content>
                Tracks
                </Header.Content>
            </Header>
            { fetching ? <SpinnerSection /> : (
            <TrackTable trackList={trackList} selectedTrackId={selectedTrackId} selectTrack={selectTrack} />
            )}
        </Fragment>
    )
}

const mapStateToProps = state => ({
    fetching: state.fetchingTrackList,
    trackList: state.trackList,
    selectedTrackId: state.selectedTrackId
})

export default connect(mapStateToProps, { fetchTrackList, selectTrack })(TrackList);