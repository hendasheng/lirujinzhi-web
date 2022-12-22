// let video = document.getElementById("video");

// function play() {
//   video.play();
// }

// window.onload = function () {
//   play();
//   console.log(video);
// };

let videos = document.getElementsByTagName("video");
videos = Array.from(videos);

function play() {
  videos.forEach(el => {
     el.play();
    // console.log(el)
  });
}

window.onload = function () {
  play();
};
