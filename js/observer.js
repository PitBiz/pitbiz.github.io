const section = document.querySelectorAll('section');
var lazyImages = document.querySelectorAll('img.lazy');


const observerMain = new IntersectionObserver(item => {
  
  item.forEach(image => {
//    console.log(image.target.dataset.src);  
    if(image.intersectionRatio) {
     
       // set the src attribute to trigger a load
       image.target.src = image.target.dataset.src;
      
    }

  })
  
})

lazyImages.forEach(key => {
  //console.log('key', key.dataset);
  observerMain.observe(key);
})