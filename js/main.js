// MENU SHOW AND HIDE
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close'),

      skillsNo = document.querySelectorAll('.skills__number'),
      skillsPro = document.querySelectorAll('.skills__percentage');



//PERSENTSGE BAR SHRINKS AND GROWS when visible
    const observer = new IntersectionObserver(obj => {
      
      obj.forEach(item => {
      
        if(item.isIntersecting) {
          
          arrayObj.name.reduce((a,element,index) => {
            if(element === item.target) {
            
            item.target.style.width = skillsNo[index].innerText;
          }
          
        },0)
        return;
          
        }
        item.target.style.width = 1+"%";
      
      });

    });

   const arrayObj = {
      name:[]
   };
//ADD OVSERVER and STORE THE VALUES of SPAN ELEMENT
  
  skillsPro.forEach(value => {
  observer.observe(value);
  arrayObj.name.push(value);
  
});




// MENU SHOW
//validate if constant exists
if(navToggle){
  navToggle.addEventListener('click', ()=> {
    navMenu.classList.add('show-menu')
  })
}
// MENU HIDE
//validate if constant exists
if(navClose){
  navMenu.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

//REMOVE MENU MOBILE
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

//ACCORDION SKILLS
const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills() {
  let itemClass = this.parentNode.className;

   
  for(let i =0; i < skillsContent.length; i++) {
    skillsContent[i].className = 'skills__content skills__close';
  }
  if(itemClass === 'skills__content skills__close')
  this.parentNode.className = 'skills__content skills__open';

}

skillsHeader.forEach(el =>{
  el.addEventListener('click', toggleSkills)
});

// QUALIFICATIONS TABS

const tabs = document.querySelectorAll('[data-target]'),
      tabsReset = document.querySelectorAll('[data-content'),
      tabsContents = document.querySelectorAll('.qualification__sections'),
      tabWork = document.getElementById('work'),
      tabEducation = document.getElementById('education');
    



      

      tabs.forEach(tab =>{
        tab.addEventListener('click', () => {
       //resetuje data-content oraz qualification__active poprzednio kliknietgo buttona
      tabsReset.forEach(key=> {
      key.dataset.content = null;
     
      });
      tabs.forEach(key =>{
        if(key != tab) {
          tabsContents[0].classList.remove('qualification__active');
          key.classList.remove('qualification__active');
          
        }
      })

    if(!tab.className.includes('qualification__active')) {

        tabsContents[0].classList.add('qualification__active');
        tab.classList.add('qualification__active');
       
  
                    
        if(tab.dataset.target ==='#work') {
          tabWork.dataset.content = "show";
          //rozmiar sekcji id=WORK
          const cssObjWork = window.getComputedStyle(tabWork, null);
          let idWork = cssObjWork.getPropertyValue('height');
          document.documentElement.style.setProperty('--qualification-tab-height', idWork);
          
          return;
        }
        if(tab.dataset.target ==='#education') {
          tabEducation.dataset.content = "show";
          //rozmiar sekcji id=EDUCATION
          const cssObjEdu = window.getComputedStyle(tabEducation, null);
          let idEdu = cssObjEdu.getPropertyValue('height');
          document.documentElement.style.setProperty('--qualification-tab-height', idEdu);
          
          return;
        }
      } 
      //else jak juz zawiera qualification__active
      tabsContents[0].classList.remove('qualification__active');
      tab.classList.remove('qualification__active');
      
        });
  });
    
  // SERVICES MODAL
  const modalViews = document.querySelectorAll('.services__modal'),
        modalBtns = document.querySelectorAll('.services__button'),
        modalCloses = document.querySelectorAll('.services__modal-close');

  let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal');
  }
modalBtns.forEach((modalBtn,i) =>{
  modalBtn.addEventListener('click', ()=>{
    modal(i);
   })
})

modalCloses.forEach(modalClose =>{
  modalClose.addEventListener('click', ()=>{
    modalViews.forEach(element => {
      element.classList.remove('active-modal');
    })
  })
})

// SWIPER
let swiper = new Swiper(".portfolio__container", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }
});
// SWIPER Testimonial
let sizeW = 2; //ile kolumn w Testimonilas
let sizeLimit = 768;// od jakies widht ekarnu ma byc zrdukowana liczba kolumn

function changeSize(columns) {

  let swiperTestimonial = new Swiper(".testimonial__container", {
    loop:false,
    grabCursor: true,
    spaceBetween: 18,
    // //slidesPerView: 2,
    slidesPerView: columns,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
   });

}


let sizeWidth = () => {
  
  if(window.outerWidth < sizeLimit) {
      sizeW = 1;
     changeSize(sizeW);
    
  } 
  
  else if(window.outerWidth > (2*sizeLimit)) {
    sizeW = 3;
    changeSize(sizeW);
  }
  
  else {
    sizeW = 2;
    changeSize(sizeW);
  }
}

sizeWidth();

//FIRST ITERATIONS without user interactions

// let swiperTestimonial = new Swiper(".testimonial__container", {
 
//   loop:true,
//   grabCursor: true,
//   spaceBetween: 18,
//   //slidesPerView: 2,
//   slidesPerView: `${sizeW}`,
  
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//     dynamicBullets: true,
//   }

// });

window.addEventListener('resize', sizeWidth);

// SCROLL SECTIONS ACTIVE LINK
/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');
const main = document.querySelector('main');

const scrollT = main.scrollTop;

/*
function scrollActive(){
  const scrollY = window.pageYOffset;
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - window.innerHeight/2;
    const sectionId = current.getAttribute('id');
  
    if(scrollY >= sectionTop && scrollY <= (sectionTop+sectionHeight) ){
//console.log(sectionId, sectionTop, 'scroll', scrollY)
console.log(sectionId, 'Active');
document.querySelector(`.nav__menu a[href*=` + sectionId + `]`).classList.add('active-link');
return;
} 
  //console.log(sectionId, 'NOT Active');
  document.querySelector(`.nav__menu a[href*=` + sectionId + `]`).classList.remove('active-link');
  })
}
window.addEventListener('scroll', scrollActive);
*/

const observerSections = new IntersectionObserver(section => {

  section.forEach(id => {
    const sectionId = id.target.getAttribute('id');
       if(id.isIntersecting) {
    document.querySelector(`.nav__menu a[href*=` + sectionId + `]`).classList.add('active-link');
    return;
    }
    document.querySelector(`.nav__menu a[href*=` + sectionId + `]`).classList.remove('active-link');
  })}
  ,{threshold:0.2});

 sections.forEach(section => {
   observerSections.observe(section);
 })



// CHANGE BACKGROUND HEADER
/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
  const nav = document.getElementById('header');
 // const scrollY = window.pageYOffset;
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 80)
 return nav.classList.add('scroll-header');
 
 nav.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

//SHOW SCROLL BUTTON
/*==================== SHOW SCROLL TOP ====================*/ 
function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
 
  if(this.scrollY >= 260)
   scrollUp.classList.add('show-scroll'); 
  else
  scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp);

//DARK LIGHT THEME
/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme);
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
    
})

//PARALLAX
const parallax = document.querySelector('#parallax');
const bg = document.querySelector('#sky');
const moon = document.querySelector('#moon'),
      homeSection  = document.querySelector('#home__section');
//const road = document.querySelector('#road');
const mountain = document.querySelector('#mountain');
const textMain = document.querySelector('#text__main');
const textDreams = document.querySelector('#text__dreams');
const skyColor = document.querySelector('.sky__color');


function bgChange() {
if (window.outerWidth < 700) {
  mountain.src = mountain.dataset.src1;
  bg.src = bg.dataset.src1;
} else {
  mountain.src = mountain.dataset.src2;
  bg.src = bg.dataset.src2;
}
console.log('gora', mountain.src);
}

bgChange();
window.addEventListener('resize', bgChange);

//rozmiar fontu slowa Dream
const cssObj = window.getComputedStyle(textDreams, null);
let fontS = cssObj.getPropertyValue("font-size");

//rozmiar fontu textu głownego
const cssObjText = window.getComputedStyle(textMain, null);
let fontSizeMain = cssObjText.getPropertyValue("font-size");

//rozmiar sekcji parallax
const cssObjParallax = window.getComputedStyle(bg, null);
let parallaxSize = cssObjParallax.getPropertyValue('height');
let parallaxWidth = cssObjParallax.getPropertyValue('width');

//rozmiar sekcji home z parallax
const cssObjHome = window.getComputedStyle(parallax, null);
let homeHeight = cssObjHome.getPropertyValue('height');
document.documentElement.style.setProperty('--parallax-height', homeHeight);

window.addEventListener('scroll', fontSizeReset);
window.addEventListener('resize', fontSizeReset);

function fontSizeReset() {
let value = window.scrollY;
let fontSize = parseInt(fontS);//fontS.substring(0, fontS.indexOf('p'));
let directionBg = 0.5;
if (window.outerWidth < 700) {
  directionBg = 1.5;

}

//dostosowuje za kazdy razem rozmiar sekcji parallex tak aby dziala overflow:hidden;
homeHeight = cssObjHome.getPropertyValue('height');
//fontSizeMain = cssObjText.getPropertyValue("font-size");

bg.style.top = value * 0.5 + "px";
moon.style.left = -value * 0.5 + "px";
mountain.style.top = -value * 0.15 + "px";
homeSection.style.top = -value * 1.5 + 'px';
//skyColor.style.top =  -value * 0.4 + "px";

let changeH = (parseInt(homeHeight) + (-value*1.5)) + 'px';
if (parseInt(changeH) > 0) {
document.documentElement.style.setProperty('--parallax-height', changeH);

}

let bottomP = (parseInt(cssObjParallax.getPropertyValue('height')) + (-value*0.15)) + 'px';


parallaxSize = cssObjParallax.getPropertyValue('height');


document.documentElement.style.setProperty('--parallax-top', bottomP);
document.documentElement.style.setProperty('--parallax-top-before', parallaxSize );
// road.style.top = value *0.15+"px";
textMain.style.top = value * 1.1 + "px";
textDreams.style.top = -value * 0.5 + "px";
textDreams.style.left = value * directionBg + "px";

let parallaxTopBg = -(parseInt(cssObjParallax.getPropertyValue('top'))-(value*0.4)) + 'px';
document.documentElement.style.setProperty('--parallax-top-bg', parallaxTopBg);

if (value > 3) {
textDreams.style.fontSize = ((fontSize)+(value * .5)) + "px";
textMain.style.opacity = 1 - (value*0.005);
} else if (value < 3 ) {

  fontSizeMain = cssObjText.getPropertyValue("font-size");
  textDreams.style.fontSize = fontSizeMain;
  textMain.style.opacity = 1;


}
}

fontSizeReset();
// STARS

//const stars = document.querySelector('#stars');
//const starsN = 150;

// for(let i =0; i < starsN; i++) {
// stars.innerHTML += `<div class="star"></div>`;
// }

//const starsArray = stars.getElementsByClassName('star');
let screenWidth = parallaxWidth.substring(0,parallaxWidth.indexOf('p'));
let screenHeight = parallaxSize.substring(0,parallaxSize.indexOf('p'));
//let colorsArray = [getComputedStyle(document.documentElement).getPropertyValue("--stars-color-white"), getComputedStyle(document.documentElement).getPropertyValue("--stars-color-blue"), getComputedStyle(document.documentElement).getPropertyValue("--stars-color-red")];


//window.addEventListener('resize', createStars);

function createStars() {

for(let i =0; i < starsN; i++) {
  stars.innerHTML += `<div class="star"><img src="/img/star.svg" alt="" /></div>`;
  starsArray[i].style.willChange = 'transform, scale, opacity';
  let starsSpeed = Math.ceil(Math.random()*10) + 's';
  
  document.documentElement.style.setProperty('--stars-speed', starsSpeed);
  starsArray[i].style.top = Math.floor(Math.random()*300) + 'px';
  starsArray[i].style.left = Math.floor(Math.random()*screenWidth) + 'px';
  starsArray[i].style.animation = `star ${starsSpeed} infinite alternate linear`;
  // starsArray[i].style.background = colorsArray[0];
  }
  
}

//createStars();

//STARS JS

const canvas = document.querySelector('canvas');

//viewport
let height = parseInt(parallaxSize)*0.7; //window.innerWidth;
let width = screen.width;//parseInt(parallaxWidth); //window.innerHeight;

//setting the w and h of canvas to viewport
canvas.width = width ;
canvas.height = height;

//call the getContext method to draw 2d shape
const ctx = canvas.getContext('2d');

//creating template for balls via classes ES6

class Ball {
  constructor(x, y, velx, vely, size, color) {
this.x = x; //The x-coordinate of the center of the circle
this.y = y;//The y-coordinate of the center of the circle
this.velx = velx; // velocity x add to coordinate x when we animate our ball
this.vely = vely; // velociy added to coordinte y;
this.size = size; // is the radius of the ball
this.color = color; // fill ball with color
  }

  //create a draw function
  drawBall() {
    ctx.beginPath(); //start drawing, start Path
    ctx.fillStyle = this.color;
    //drawing a circle, .arc method
    ctx.arc(this.x, this.y, this.size, 0, 2*Math.PI);
    ctx.fill(); //Paths , stop drawing, filling the object
  }

//creat update function, bounce form the borders of the viewport
updateBall(){
//bouncing
this.size = random(minS, maxS);
}

shootingStar() {
 

  if((this.x +this.size) >= width || (this.x - this.size) <= 0) {
    //this.velx = -this.velx;
    this.x = 0;
    this.size = sizeSs;
  }
  if((this.y +this.size) >= height || (this.y - this.size) <= 0) {
   // this.vely = -this.vely;
   this.y = 10;
   this.size = sizeSs;
  }
  //bouncing
  this.x += this.velx*speedStar;
  this.y += this.vely;
  this.size = random(maxSs, maxSs*2);
    
}


}
//create random genarator function
function random(min, max) {
  const num = Math.floor(Math.random() * (max - min+1)) + min;
  return num;
}
let minS = 0.1;
let maxS = 1;
let size = random(minS,maxS);

let minSs = 1.5;
let maxSs = 3;
let sizeSs = random(minSs,maxSs);
let speedStar = 3;

const shoootingStar = new Ball(
  random(sizeSs, width-sizeSs),
  random(sizeSs, height-sizeSs),
  random(minSs, maxSs),
  random(minSs, maxSs),
  sizeSs,
  `rgba(${random(255,255)},${random(255,255)},${random(255,255)},${random(0,1)})`
)


//create array of balls with defined number /counter
const ballsArray = [];
const ballsCounter = 355;
while (ballsArray.length < ballsCounter) {
const ball = new Ball(
  random(10, width-10),
  random(10, height-10),
  random(minS, maxS),
  random(minS, maxS),
  size,
  `rgba(${random(255,255)},${random(255,255)},${random(255,255)},${random(0,1)})`
)
ballsArray.push(ball);
}

//loop function to animate / bounce the balls
function loop(){
  
  //to cover the previous frame of drawing before the next one is drawn
  ctx.fillStyle = 'rgba(0,0,0,.1)'; // color of the bg
  ctx.fillRect(0, 0, width, height); // bg
 // ctx.clearRect(0, 0, width, height);

for(let i=0; i<ballsArray.length; i++){
  ballsArray[i].drawBall();
  ballsArray[i].updateBall();
}
shoootingStar.drawBall();
shoootingStar.shootingStar();
//smoth animation and over and over function
//setInterval(loop,100);
requestAnimationFrame(loop);
}

//starting the loop function
requestAnimationFrame(loop);
