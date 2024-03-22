const videos = [
  { title: "Video 1", url: "videos/Trent Boults fiery spell vs CSK.mp4" },
  { title: "video 2", url: "videos/video9.mp4" },
  {
    title: "ABD goes 360° against Kolkata Knight Riders",
    url: "videos/ABD goes 360° against Kolkata Knight Riders.mp4",
  },
  {
    title: "ABDs Absolute Demolition Against Rajasthan Royals",
    url: "videos/ABDs Absolute Demolition Against Rajasthan Royals.mp4",
  },
  {
    title: "Chennai Super Kings v Royal Challengers Bangalore",
    url: "videos/Chennai Super Kings v Royal Challengers Bangalore.mp4",
  },
  {
    title: "Kohli, Gayle take RCB upto 2nd spot with thumping win over KXIP",
    url: "videos/Kohli, Gayle take RCB upto 2nd spot with thumping win over KXIP.mp4",
  },
  {
    title: "MI-DD_ Krunal Pandyas blistering knock helps MI win",
    url: "videos/MI-DD_ Krunal Pandyas blistering knock helps MI win.mp4",
  },
  { title: "Pollard Knock _ RCBvMI", url: "videos/Pollard Knock _ RCBvMI.mp4" },
  { title: "Trent Boults fiery spell vs CSK", url: "videos/video10.mp4" },
];
function createVideoElement(video) {
  const videoItem = document.createElement("div");
  videoItem.classList.add("video-item");

  const videoElement = document.createElement("video");
  videoElement.classList.add("video-dl");
  videoElement.src = video.url;

  const titleElement = document.createElement("h3");
  titleElement.classList.add("video-title");
  titleElement.textContent = video.title;

  const main = document.getElementById("main_video");
  const title = document.getElementById("main-title");

  videoItem.addEventListener("click", function () {
    main.src = videoElement.src;
    title.textContent = titleElement.textContent;
    main.play();
  });
  videoItem.appendChild(videoElement);
  videoItem.appendChild(titleElement);
  return videoItem;
}

function initializeVideoList() {
  const videoList = document.getElementById("video-list");
  videos.forEach((video) => {
    const videoElement = createVideoElement(video);
    videoList.appendChild(videoElement);
  });
}
document.addEventListener("DOMContentLoaded", initializeVideoList);

document.addEventListener("DOMContentLoaded", function () {
  const sidebarIcon = document.querySelector(".sidebar-icon");
  const sidebar = document.querySelector(".sidebar");

  sidebarIcon.addEventListener("click", function () {
    if (sidebar.style.display === "block") {
      sidebar.style.display = "none";
    } else {
      sidebar.style.display = "block";
    }
  });
});
