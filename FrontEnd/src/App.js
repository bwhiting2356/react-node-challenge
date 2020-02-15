import React from 'react';
import TrackList from './TrackList';
import TrackDetails from './TrackDetails';
import { Grid, Container, Header } from 'semantic-ui-react';
import { Provider } from 'react-redux';
import store from './store/store'

function App() {
  return (
    <Provider store={store}>
      <Container className="padded-container">
        <Header  as='h1'>Music Tracks Demo App</Header>
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <TrackList />
            </Grid.Column>
            <Grid.Column>
              <TrackDetails />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Provider>
  );
}

export default App;
