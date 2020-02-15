import React from 'react';
import { Segment, Dimmer, Loader } from 'semantic-ui-react';

const SpinnerSection = () => (
    <Segment data-testid="spinner" padded>
        <Dimmer active inverted><Loader /></Dimmer>
    </Segment>
);

export default SpinnerSection;
