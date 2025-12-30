
// click toggle play videos
// document.addEventListener("DOMContentLoaded", () => {
//   document.querySelectorAll("video.click-video").forEach((video) => {
//     video.addEventListener("click", (e) => {
//       e.preventDefault();      // stops link navigation
//       e.stopPropagation();     // stops bubbling to <a>

//       if (video.paused) {
//         video.play().catch(console.warn);
//       } else {
//         video.pause();
//       }
//     });
//   });
// });

// click toggle mute on auto play videos
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("video.click-video").forEach(video => {

    // Ensure autoplay actually starts
    video.play().catch(() => {});

    video.addEventListener("pointerdown", (e) => {
      e.preventDefault();
      e.stopPropagation();

      if (video.muted) {
        video.muted = false;
        video.volume = 1;
      } else {
        video.muted = true;
      }

      // Safety: ensure it's playing
      if (video.paused) {
        video.play().catch(console.warn);
      }
    });

    // Optional: pause others when one unmutes
    video.addEventListener("volumechange", () => {
      if (!video.muted) {
        document.querySelectorAll("video.click-video").forEach(v => {
          if (v !== video) v.muted = true;
        });
      }
    });

  });
});