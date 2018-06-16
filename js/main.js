let slideShowImages = ["aaliyah_gc_ashley.jpg", "angie_gc.jpg", "ashley_babygc.jpg", "ashley_gc.jpg", "dad.jpg", "ashley_gcBig.jpg", "ashley_kids.jpg", "ashley_paci_gc.jpg", "baby_dishon.jpg", "babygc.jpg", "beachday.jpg", "dishon_angie.jpg", "dishon.jpg", "dishonFresh.jpg", "gc_drawing.jpg", "gc_ironman.jpg", "gc_juice.jpg", "gc_ribs.jpg", "gc_school.jpg", "gc_young.jpg", "gc.jpg", "granddad.jpg", "grandmahouse.jpg", "laing_girls.jpg", "lil_dishon.jpg", "oldest4.jpg", "oldoldest4.jpg", "sleepgc.jpg", "wholefamily.jpg", "youngest2.jpg", "youngOld4.jpg"]

let picIndex = 1;
let textIndex = 0;

function addImages() {
  for (let i = 0; i < slideShowImages.length; i++) {
    $('.slideshow').append(`<img src='img/${slideShowImages[i]}'/>`)
  }
  $('.slideshow img').hide();
  let slides = $('.slideshow img');
  $(slides[0]).show();
}

function changeImage() {
  let slides = $('.slideshow img');
  setInterval(function(){
    $('.slideshow img').hide();
    $(slides[picIndex]).show();
    if(picIndex < slides.length-1){
      picIndex++;
    } else {
      picIndex = 0;
    }
  },2500);
}

function hideText() {
  $('.testimonial').hide();
  $('.testimonial:nth-of-type(1)').show();
}

function changeText() {
  let text = $('.testimonial');
  setInterval(function(){
    $('.testimonial').hide()
    $(text[textIndex]).show();
    if(textIndex < text.length - 1){
      textIndex++;
    } else {
      textIndex = 0;
    }
  }, 10000)
}

$(document).ready(function(){
  hideText();
  addImages();
  changeImage();
  changeText();
});
