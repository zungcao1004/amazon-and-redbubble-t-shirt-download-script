// Get the image element
const img = document.querySelector("#unrolledImgNo0 > div > img");

// Get the value of the 'alt' attribute
const altValue = document
  .querySelector("#productTitle")
  .textContent.trim()
  .replace(/[/\\?%*:|"<>]/g, "");

// Get the value of the 'src' attribute
const srcValue = img.src;

// Create a string with the values separated by '\' character
const data = `${altValue}\\${srcValue}`;

// Create a Blob object with the data
const blob = new Blob([data], { type: "text/plain" });

// Create a link element to download the file
const link = document.createElement("a");
link.download = "data merch.txt";

// Create a URL for the Blob object and set it as the link's href
link.href = URL.createObjectURL(blob);

// Click the link to download the file
link.click();
