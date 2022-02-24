const primaryNav = document.querySelector('.primary-navigation'),
      navToggle = document.querySelector('.mobile-nav-toggle');

console.log(primaryNav);

navToggle.addEventListener('click', ()=>{
const visibility = primaryNav.getAttribute('data-visible');
console.log(visibility);

// if(primaryNav.dataset.visible != 'true') {
// primaryNav.dataset.visible = 'true';
// return;
// }

// primaryNav.dataset.visible = 'false';

if (visibility !== 'true') {
navToggle.setAttribute('aria-expanded', true);
return primaryNav.setAttribute('data-visible', true);
}

navToggle.setAttribute('aria-expanded', false);
primaryNav.setAttribute('data-visible', false);

})