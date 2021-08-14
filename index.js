const express = require("express");
const ytdl = require("ytdl-core");
const app = express();
app.use('/static', express.static('./static'));

app.get('/download', (req, res) => {
  var url = "https://www.youtube.com/watch?v=hS5CfP8n_js&ab_channel=Mr.Monk";
  res.header("Content-Disposition", 'attachment;\  filename="Video.mp4');
  ytdl(url, {format: 'mp4'}).pipe(res);
});

app.listen(3000, () => {
  console.log("It Works!");
});