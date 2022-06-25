import express from 'express';
// import * as path from 'path';


const app = express();
const port = 3000;

app.use(function(req, res, next) {
  res.header("Cross-Origin-Embedder-Policy", "require-corp");
  res.header("Cross-Origin-Opener-Policy", "same-origin");
  next();
});


// app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/', express.static('./public'));

app.listen(port, () => {
  console.log(`ffmpegHls2Mp4 app listening on http://localhost:${port}`)
})