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
const itemEl = images.map(image => {
  const item = document.createElement("li")
  item.classList = "gallery__item"
  item.style.margin = "15px"
  
  const imageEl = document.createElement("img")
  imageEl.setAttribute("src", `${image.url}`)
  imageEl.setAttribute("alt", `${image.alt}`)
  imageEl.classList = "gallery__image"
  imageEl.style.width = "100%";
  imageEl.style.height = "300px";
  
  item.append(imageEl)

  return item
})
console.log(itemEl)

const listEl = document.querySelector(".gallery")

listEl.style.display = "flex"
listEl.style.flexBasis = "calc((100% - 90px) / 3)"
listEl.style.flexWrap = "wrap";
listEl.style.margin = "-15px";
listEl.style.listStyle = "none";

listEl.append(...itemEl)
