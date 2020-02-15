const app = require('./app');
const supertest = require('supertest');
const request = supertest(app);
const tracks = require('./api/routes/tracks.json')

it('should return the list of tracks', async () => {
    const res = await request.get('/all_tracks');
    expect(res.body.tracks).toEqual(tracks);
});

it('should return an individual track by id', async () => {
    const res = await request.post('/track').send({ id: 100 });
    expect(res.body.track).toEqual({ track_title: 'Without me', artist: 'Halsey' })
});

it('should throw an error for a nonexistent track', async () => {
    const res = await request.post('/track').send({ id: 5 });
    expect(res.body).toEqual({ error: { message: 'Track not found.' } })
    expect(res.status).toBe(500);
});