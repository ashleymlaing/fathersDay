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

  (function () {
  var canvas = $('canvas')[0];
  var ctx = canvas.getContext('2d');
  var width = canvas.width = window.innerWidth;
  var height = canvas.height = window.innerHeight;
  var particleCount = 100;
  var particles = [];

  function init() {
    for (var i = 0; i < particleCount; i++) {
      createParticle();
    }
  }

  function createParticle() {
    var newParticle = new Particle();
    newParticle.initialize();
    particles.push(newParticle);
  }

  function Particle() {
    this.initialize = function() {
      this.x = Math.random() * width;
      this.y = Math.random() * height + height;
      this.v = 5 + Math.random() * 5;
      this.s = 5 + Math.random() * 5;
    }

    this.update = function () {
      this.x += Math.sin(this.s);
      this.s -= 0.1;
      this.y -= this.v * 0.5;
      if (this.isOutOfBounds()) {
        this.initialize();
      }
    }

    this.draw = function () {
      ctx.fillRect(this.x, this.y, this.s, this.s);
      ctx.fillStyle = "#FFF";
      ctx.fill();
    }

    this.isOutOfBounds = function () {
      return ((this.x < 0) || (this.x > width) || (this.y < 0) || (this.y > height));
    }
  }

  function render() {
    ctx.clearRect(0, 0, width, height);
    for (var i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
    }
    requestAnimationFrame(render);
  }

  window.addEventListener('resize', resize);
  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  init();
  render();
})();

  hideText();
  addImages();
  changeImage();
  changeText();
});
