import init from './main/app';
const port = process.env.PORT || 8081;

init().then((app) =>
  app.listen(port, () => console.log(`listening on port ${port}`)),
);
