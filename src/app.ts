import express from 'express';

const app = express();

app.get('/:number?');

export default app;
