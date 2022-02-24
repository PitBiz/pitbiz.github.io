const activeClass = 'active';
const images = document.querySelectorAll('.flex-card-container');

function addClass($event){
const elm = document.querySelector(`.${activeClass}`);
const target = $event.currentTarget;

if(elm) {
elm.classList.remove(activeClass);
}

if (!target.className.includes('active'))
return target.classList.add(activeClass);

}

images.forEach(image => {
  image.addEventListener('click', addClass);
})