let slideIndex = 1;
const slides = [
  {
    id: 1,
    imageType: "watch",
    thumbnailImage: "images/1.png",
    bannerImage: "images/banner1.png",
    logo: "images/logo1.png",
    timeDurations: "1h 40m - Sci-Fi - ACTION - ADVENTURE - ",
    banner__description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
  },
  {
    id: 2,
    imageType: "watch",
    thumbnailImage: "images/2.png",
    bannerImage: "images/banner2.png",
    logo: "images/logo2.png",
    timeDurations: "1h 40m • Sci-Fi • ACTION • ADVENTURE 22222",
    banner__description:
      "2222 team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
  },
  {
    id: 3,
    imageType: "watch",
    thumbnailImage: "images/3.png",
    bannerImage: "images/banner1.png",
    logo: "images/logo1.png",
    timeDurations: "1h 40m • Sci-Fi • ACTION • ADVENTURE 33333",
    banner__description:
      "3333 team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
  },
  {
    id: 4,
    imageType: "watch",
    thumbnailImage: "images/4.png",
    bannerImage: "images/banner2.png",
    logo: "images/logo2.png",
    timeDurations: "1h 40m • Sci-Fi • ACTION • ADVENTURE 4444",
    banner__description:
      "A 4444 team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
  },
  {
    id: 5,
    imageType: "watch",
    thumbnailImage: "images/5.png",
    bannerImage: "images/banner1.png",
    logo: "images/logo1.png",
    timeDurations: "1h 40m • Sci-Fi • ACTION • ADVENTURE 5555",
    banner__description:
      "A 55555 team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
  },
  {
    id: 6,
    imageType: "watch",
    thumbnailImage: "images/6.png",
    bannerImage: "images/banner2.png",
    logo: "images/logo2.png",
    timeDurations: "1h 40m • Sci-Fi • ACTION • ADVENTURE 6666",
    banner__description:
      "A 6666 team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
  },
  {
    id: 7,
    imageType: "watch",
    thumbnailImage: "images/7.png",
    bannerImage: "images/banner1.png",
    logo: "images/logo1.png",
    timeDurations: "1h 40m • Sci-Fi • ACTION • ADVENTURE 7777",
    banner__description:
      "A 7777 team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
  },
];

(function () {
  "use strict";
  window.addEventListener(
    "load",
    function () {
      console.log("functions is called");
      let banner = document.getElementById("slide-show");
      console.log("banner====>", banner.style);
      banner.style.transform = 'translate("-100%")';

      document.getElementById("logo").src = slides[0].logo;
      document.getElementById("textTime").innerHTML = slides[0].timeDurations;
      document.getElementById("desc").innerHTML = slides[0].banner__description;
      let thumbnailList = document.getElementById("thumbnail-list");
      for (let i = 0; i < slides.length; i++) {
        let imgBanner = document.createElement("img");
        imgBanner.src = slides[i].bannerImage;
        imgBanner.className = "banner_images";
        banner.appendChild(imgBanner);

        let div = document.createElement("div");
        div.className = "movie-list-item";
        if (i === 0) div.className += " active";
        let img = document.createElement("img");
        img.className = "movie-list-item-img";
        // console.log("img ==>", img);
        img.setAttribute("onclick", `showSlides(${i})`);
        img.src = slides[i].thumbnailImage;
        div.appendChild(img);
        thumbnailList.appendChild(div);
      }
    },
    false
  );
})();

function showSlides(n) {
  let i;
  let thumbnailList = document.getElementsByClassName("movie-list-item");
  let classNameLogo = document.getElementsByClassName("logo");
  let logo = document.getElementById("logo");
  let text = document.getElementById("text-wrapper");
  let button = document.getElementById("banner-button");

  logo.src = slides[n].logo;
  document.getElementById("textTime").innerHTML = slides[n].timeDurations;
  document.getElementById("desc").innerHTML = slides[n].banner__description;

  let banner = document.getElementById("slide-show");
  banner.style.transform = `translate(-${n * 100}%)`;
  logo.style.transition = "all 0.6s ease";
  logo.style.transform = "translateY(-150%)";

  // text.className += " fade";
  text.style.transition = "all 0.6s ease";
  text.style.transform = "translateY(30%)";
  text.style.textShadow = "1px 1px 2px black, 0 0 25px yellow, 0 0 5px white";
  button.style.boxShadow = "10px 30px 5px #e0e0e0 ";

  for (i = 0; i < thumbnailList.length; i++) {
    thumbnailList[i].className = thumbnailList[i].className.replace(
      " active",
      ""
    );
  }
  thumbnailList[n].className += " active";

  // // logo.style.transform = `translateY(-${slideIndex * 100}%)`;
  // // slides[slideIndex - 1].style.transform = `translateX(-${slideIndex * 100}%)`;
  // document.getElementById("banner").src = slides[n].bannerImage;
  // logo.style.translate = "all 1s ease";
  // // logo.style.transform = "translateY(-130%)";
  // // classNameLogo.style.transform = "translateY(-130%)";
  // logo.style.backgroundColor = "yellow";
  // // logo.style.transform = "scale(1, 2, 2, 3,2, 1)";
  // // text.style.translate = "all 3s ease-in-out";
  // text.style.transform = "translateY(30%)";
  setTimeout(() => {
    (text.style.transform = "none"), (logo.style.transform = "none");
    text.style.textShadow = "none";
    button.style.boxShadow = "none";
    // logo.style.transform = "scale(.7)";
  }, 1000);
}
