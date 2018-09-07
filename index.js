const SCALE = 2;

let height = document.documentElement.clientHeight;
let width = document.documentElement.clientWidth;
const center = {
  x: width / 2,
  y: height / 2
};
const boundary = {
  x: center.x / SCALE,
  y: center.y / SCALE
};

window.addEventListener('resize', _ => {
  height = document.documentElement.clientHeight;
  width = document.documentElement.clientWidth;
  center.x = width / 2;
  center.y = height / 2;
  boundary.x = center.x / SCALE;
  boundary.y = center.y / SCALE;
});

window.addEventListener('mousedown', event => {
  if (document.body.style.transform) {
    document.body.style.transform = '';
    document.body.style.overflow = 'auto';
  } else {  
    document.body.style.overflow = 'hidden';
    document.body.style.transition = '0.5s';
    let translateX = center.x - event.clientX;
    let translateY = center.y - event.clientY;
    translateX = translateX < boundary.x ? translateX > - boundary.x ? translateX : - boundary.x : boundary.x;
    translateY = translateY < boundary.y ? translateY > - boundary.y ? translateY : - boundary.y : boundary.y;
    document.body.style.transform = `scale(${SCALE}) translate(${translateX}px, ${translateY}px)`;
  }
});