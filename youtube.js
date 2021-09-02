let div = document.getElementById("videoDiv");
async function searchVideos() {
  div.innerHTML = "";
  //AIzaSyCfDRFGOPbIJBlpB56pRElBx3xDnrKVMfw
  let video = document.getElementById("video").value;
  let res = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?q=${video}&type=video&key=AIzaSyCfDRFGOPbIJBlpB56pRElBx3xDnrKVMfw&maxResults=20`
  );

  let data = await res.json();
  console.log(data);
  for ({
    id: { videoId },
  } of data.items) {
    let video_frame = document.createElement("iframe");
    // console.log(videoId);
    video_frame.src = `https://www.youtube.com/embed/${videoId}`;
    video_frame.allow = "fullscreen";
    div.append(video_frame);
  }
}
