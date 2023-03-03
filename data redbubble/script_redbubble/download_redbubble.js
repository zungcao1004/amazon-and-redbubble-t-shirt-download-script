// Get the title
const txtTitle = document
  .querySelector(
    "#app > div > div.ds-theme-find-your-thing.App__dsWrapper--1kexh > main > div > div > div:nth-child(2) > div > div.DesktopProductPage__primaryContent--1YKfZ > div.DesktopProductPage__right--2GOKS > div > div:nth-child(1) > div > div:nth-child(1) > div > h1"
  )
  .textContent.replace(/[/\\?%*:|"<>]/g, "")
  .replace(/\s+/g, " ");

// Get site URL
const siteUrl = window.location.href;
console.log(siteUrl);

// Get the image elements
const imgMockup = document.querySelector(
  "#app > div > div.ds-theme-find-your-thing.App__dsWrapper--1kexh > main > div > div > div:nth-child(2) > div > div.DesktopProductPage__primaryContent--1YKfZ > div.DesktopProductPage__left--pm9Mt > div:nth-child(1) > div > div.PreviewGallery__leftColumn--2hwog > div:nth-child(1) > div > div.PreviewGallery__preview--1j5cr.GalleryImage__preview--232Xd > img"
);

const imgThumbnail = document.querySelector(
  "#styleSelector > div > div > ul > li > div.styles__listMedia--3UHvh > img"
);

const imgDesign = document.querySelector(
  "#app > div > div.ds-theme-find-your-thing.App__dsWrapper--1kexh > main > div > div > div:nth-child(2) > div > div.DesktopProductPage__primaryContent--1YKfZ > div.DesktopProductPage__left--pm9Mt > div:nth-child(1) > div > div.PreviewGallery__leftColumn--2hwog > div:nth-child(2) > div > div.PreviewGallery__preview--1j5cr.GalleryImage__preview--232Xd > img"
);

// Get the values of the 'src' attribute
const srcMockup = imgMockup.src;
const srcThumbnail = imgThumbnail.src;
const srcDesign = imgDesign.src;

// Create a string with the values separated by '\' character
const data = `${txtTitle}\\${siteUrl}\\${srcMockup}\\${srcThumbnail}\\${srcDesign}`;

// Create a Blob object with the data
const blob = new Blob([data], { type: "text/plain" });

// Create a link element to download the file
const link = document.createElement("a");
link.download = "data redbubble.txt";

// Create a URL for the Blob object and set it as the link's href
link.href = URL.createObjectURL(blob);

// Click the link to download the file
link.click();
