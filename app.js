'use strict';


const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

const carouselEle = document.querySelector('.carousel');
const sliderEle = document.querySelector('.carousel .list');
const thumbnailEle = document.querySelector('.carousel .thumbnail');
const thumbnailItems = thumbnailEle.querySelectorAll('.item');
const time = document.querySelector('.carousel .time')


thumbnailEle.appendChild(thumbnailItems[0]);

nextBtn.addEventListener('click', ()=> {
  showSlider('next');
});
prevBtn.addEventListener('click', ()=> {
  showSlider('prev');
});


let timeRunning = 2000;
let runTimeOut;

function showSlider(type){
  const sliderItems = sliderEle.querySelectorAll('.carousel .list .item');
  const thumbnailItems = document.querySelectorAll('.carousel .thumbnail .item')

  if(type === 'next'){
    sliderEle.appendChild(sliderItems[0]);
    thumbnailEle.appendChild(thumbnailItems[0]);
    carouselEle.classList.add('next');
  }else{
    sliderEle.prepend(sliderItems[sliderItems.length - 1]);
    thumbnailEle.prepend(thumbnailItems[thumbnailItems.length - 1]);
    carouselEle.classList.add('prev');
    console.log(thumbnailItems.length);
  }

  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(()=> {
    carouselEle.classList.remove('next')
    carouselEle.classList.remove('prev')
  },timeRunning);
}
