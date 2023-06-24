const buttonLeft = document.querySelector(".buttonLeft");
const buttonRight = document.querySelector(".buttonRight");
const tile1 = document.querySelector(".tile1");

tile1.style.backgroundImage = "images/desktop-image-hero-1.jpg";

const tile2BigText = document.querySelector("h1");
const tile2SmallText = document.querySelector(".text1");

const slide1MobilePic = "images/mobile-image-hero-1.jpg";
const slide2MobilePic = "images/mobile-image-hero-2.jpg";
const slide3MobilePic = "images/mobile-image-hero-3.jpg";
const picArrayMobile = [slide1MobilePic, slide2MobilePic, slide3MobilePic];

const slide1DesktopPic = "images/desktop-image-hero-1.jpg";
const slide2DesktopPic = "images/desktop-image-hero-2.jpg";
const slide3DesktopPic = "images/desktop-image-hero-3.jpg";
const picArrayDesktop = [slide1DesktopPic, slide2DesktopPic, slide3DesktopPic];

const slide1BigText = "Discover innovative ways to decorate";
const slide2BigText = "We are available all across the globe";
const slide3BigText = "Manufactured with the best materials";
const bigTextArray = [slide1BigText, slide2BigText, slide3BigText];

const slide1SmallText = "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.";
const slide2SmallText = "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.";
const slide3SmallText = "Our modern furniture store provides a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry.";
const smallTextArray = [slide1SmallText, slide2SmallText, slide3SmallText];

let currentSlide = 0;
let currentBigText = 0;
let currentSmallText = 0;
let picArray = [];

function updateSlideContent() {
  tile1.style.backgroundImage = `url("${picArray[currentSlide]}")`;
  tile2BigText.innerHTML = bigTextArray[currentBigText];
  tile2SmallText.innerHTML = smallTextArray[currentSmallText];
}

function updateSlide(direction) {
  if (direction === "next" && currentSlide < picArray.length - 1) {
    currentSlide++;
    currentBigText++;
    currentSmallText++;
  } else if (direction === "prev" && currentSlide > 0) {
    currentSlide--;
    currentBigText--;
    currentSmallText--;
  }
  updateSlideContent();
}

function handleButtonNext() {
  updateSlide("next");
}

function handleButtonPrev() {
  updateSlide("prev");
}

buttonRight.addEventListener("click", handleButtonNext);
buttonLeft.addEventListener("click", handleButtonPrev);

// Update image sources based on screen width
if (window.innerWidth < 1300) {
  picArray = picArrayMobile;
} else {
  picArray = picArrayDesktop;
}

updateSlideContent();

