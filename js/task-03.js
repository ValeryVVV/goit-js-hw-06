const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryList = document.querySelector(".gallery");

galleryList.style.listStyleType = "none";
galleryList.style.display = "flex";
galleryList.style.justifyContent = "space-between";
galleryList.style.backgroundColor = "#eaf0f0";
galleryList.style.border = "2px solid #00e4ff";
galleryList.style.padding = "20px";

const imageMarkup = images
  .map(({ url, alt }) => {
    return `<li><img src="${url} alt="${alt} width="350" height="200"/></li>`;
  })
  .join("");

galleryList.insertAdjacentHTML("afterbegin", imageMarkup);
