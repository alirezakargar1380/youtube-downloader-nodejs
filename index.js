const express = require("express");
const ytdl = require("ytdl-core");
const app = express();
const fs = require("fs")
app.use('/static', express.static('./static'));

app.get('/videoFormat', async (req, res) =>
{
  // const videoURL = "https://www.youtube.com/watch?v=075AzM2G_1E&ab_channel=ARIAKEOXER";
  const videoURL = "https://www.youtube.com/watch?v=hS5CfP8n_js&ab_channel=Mr.Monk";
  var info = await ytdl.getBasicInfo(videoURL)
  console.log(info.formats[1].url)
  const {title} = info.videoDetails
  console.log(title)
  // console.log(info)
  console.log("< --------------------------------------------------------------------------------------------------------------------- >")
  return
  var ids;
  ids = ddddd.formats.map((item) => { return item.itag })
  return console.log(ids)

})

app.get("/videoInfo",async function(request,response){
  const videoURL = "https://www.youtube.com/watch?v=075AzM2G_1E&ab_channel=ARIAKEOXER";
  // const info = await ytdl.getInfo(videoURL);
  var ddddd = await ytdl.getBasicInfo(videoURL)
  // var formats = await ytdl.videoFormat(videoURL)
  // let format = ytdl.chooseFormat(info.formats, { quality: '134' });
  // var ids;
  // ids = ddddd.formats.map((item) => { return item.itag })
  // const {title} = ddddd.videoDetails
  // console.log(title)
  // response.header("Content-Disposition", 'attachment;  filename="fdg.mp4');
  // return console.log(ids)
  // return response.redirect(format.url)
  response.status(200).send(ddddd.formats);
});

app.get('/download', async (req, res) => {
  // var url = "https://www.youtube.com/watch?v=hS5CfP8n_js&ab_channel=Mr.Monk";
  var url = "https://www.youtube.com/watch?v=075AzM2G_1E&ab_channel=ARIAKEOXER";
  const info = await ytdl.getInfo(url);
  // console.log(info)
  var {title} = info.videoDetails
  // console.log(title.test())
  title = "helo"
  console.log(title)
  let format = ytdl.chooseFormat(info.formats, { quality: '134' });
  res.header("Content-Disposition", `attachment;  filename="${title}.mp4`);
  return res.redirect(format.url)
  // ytdl(url, {
  //   format: 'mp4',
  //   // quality: '137'
  // })
  //     .pipe(res);
      // .pipe(fs.createWriteStream('videossssss.mp4'));

});

app.listen(3000, () => {
  console.log("It Works!");
});