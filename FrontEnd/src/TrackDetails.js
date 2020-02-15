import React, { Fragment } from 'react';
import { connect } from 'react-redux'
import { Header, Message, Card } from 'semantic-ui-react';
import SpinnerSection from './SpinnerSection';

const DetailsCard = ({ artist, title }) => (
    <Card data-testid="details-card">
        <Card.Content header={title} />
        <Card.Content description={`by ${artist}`} />
    </Card>
);

const TrackDetails = ({ fetchingSelectedTrack, selectedTrack }) => (
    <Fragment>
        <Header as='h2'>
            <Header.Content>
                Details
            </Header.Content>
        </Header>
        { fetchingSelectedTrack && <SpinnerSection />}
        { !selectedTrack 
            ? <Message data-testid="info-message" className="info-message">Select a track to view its details</Message> 
            : <DetailsCard artist={selectedTrack.artist} title={selectedTrack.track_title}/>
        }
    </Fragment>
)

const mapStateToProps = state => ({
    selectedTrackId: state.selectedTrackId,
    fetchingSelectedTrack: state.fetchingSelectedTrack,
    selectedTrack: state.selectedTrack,
})
export default connect(mapStateToProps)(TrackDetails);