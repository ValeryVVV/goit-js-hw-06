const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryEl = document.querySelector(".gallery");

galleryEl.style.display = "flex";
galleryEl.style.justifyContent = "center";
galleryEl.style.gap = "30px";
galleryEl.style.listStyleType = "none";
galleryEl.style.backgroundColor = "#eaf0f0";
galleryEl.style.border = "2px solid #00e4ff";
galleryEl.style.padding = "20px";

const imagesRef = images.map(({url, alt}) => {
    return `<li class="image-item"><img src="${url}" alt="${alt}" width="350" height="200"></img></li>`
}).join("");
galleryEl.insertAdjacentHTML("afterbegin", imagesRef)

console.log(galleryEl);
console.log(imagesRef);
