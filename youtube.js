let div = document.getElementById("videoDiv");
async function searchVideos() {
  div.innerHTML = "";
  //AIzaSyCfDRFGOPbIJBlpB56pRElBx3xDnrKVMfw
  let video = document.getElementById("video").value;
  let res = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?q=${video}&type=video&key=AIzaSyBjbuX3MP-tjw78q3Dob6oY2swcWGhPpA4&maxResults=50`
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

let divHome = document.getElementById("videoDiv");
async function homeVideos() {
  divHome.innerHTML = "";
  //AIzaSyCfDRFGOPbIJBlpB56pRElBx3xDnrKVMfw

  let res = await fetch(
    " https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&type=video&key=AIzaSyBjbuX3MP-tjw78q3Dob6oY2swcWGhPpA4&maxResults=50"
  );

  let data = await res.json();

  for ({ id: videoId } of data.items) {
    console.log(videoId);
    //console.log(element.id);
    let homeVideo_frame = document.createElement("iframe");

    homeVideo_frame.src = `https://www.youtube.com/embed/${videoId}`;
    homeVideo_frame.allow = "fullscreen";
    divHome.append(homeVideo_frame);
  }
}
homeVideos();
