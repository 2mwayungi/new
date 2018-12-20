// Select DOM Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));

    // Set Menu State
    showMenu = false;
  }
}
///////////////////////////////
const tl = new TimelineMax({
    repeat: -1
})

const svg = document.querySelector('svg')

const scene1 = {
    wrapper: svg.querySelector('.scene1'),
    arm: svg.querySelector('#arm_3_'),
    face: svg.querySelector('.face'),
    bag: svg.querySelector('#bag_1_'),
    body: svg.querySelector('.body'),
    deerHead: svg.querySelector('#head_1_'),
    armLeft: svg.querySelector('#arm_4_'),
    armRight: svg.querySelector('#arm2_1_'),
    deerBody: svg.querySelector('#body_2_')
}

// Deer
tl.from(scene1.deerHead, 0.75, {
    rotation: '+=5deg',
    transformOrigin: '80% 50%',
    repeat: 1,
    repeatDelay: 0.25,
    yoyo: true,
    ease: Linear.easeNone
}, 0)

tl.from(scene1.deerHead, 0.5, {
    x: '-=2',
    y: '+=2',
    transformOrigin: '80% 40%',
    repeat: 3,
    yoyo: true,
    ease: Linear.easeNone
}, 0)

tl.from(scene1.armLeft, 1, {
    rotation: '+=15deg',
    transformOrigin: '100% 80%',
    repeat: 1,
    yoyo: true,
    ease: Linear.easeNone
}, 0)

tl.from(scene1.armRight, 1, {
    rotation: '-=10deg',
    transformOrigin: '100% 80%',
    repeat: 1,
    yoyo: true,
    ease: Linear.easeNone
}, 0)

tl.from(scene1.deerBody, 1, {
    y: '+=5',
    rotation: '-=5',
    transformOrigin: '40% 80%',
    repeat: 1,
    yoyo: true,
    ease: Linear.easeNone
}, 0)

// Santa
tl.from(scene1.arm, 1, {
    rotation: '+=10deg',
    transformOrigin: '80% 40%',
    repeat: 1,
    yoyo: true,
    ease: Linear.easeNone
}, 0)

tl.from(scene1.face, 1, {
    rotation: '+=5deg',
    transformOrigin: '80% 40%',
    repeat: 1,
    yoyo: true,
    ease: Linear.easeNone
}, 0.2)

tl.from(scene1.face, 0.5, {
    x: '+=10',
    transformOrigin: '80% 40%',
    repeat: 3,
    yoyo: true,
    ease: Linear.easeNone
}, 0.2)

tl.from(scene1.bag, 1, {
    rotation: '-=2deg',
    transformOrigin: '30% 0%',
    repeat: 1,
    yoyo: true,
    ease: Linear.easeNone
}, 0.2)

tl.from(scene1.body, 0.5, {
    y: '+=3',
    transformOrigin: '30% 0%',
    repeat: 3,
    yoyo: true,
    ease: Linear.easeNone
}, 0.2)

tl.timeScale(1.55);


// Sound
var sound = new Howl({
  src: ['https://d3vv6lp55qjaqc.cloudfront.net/items/1m2v060s0q3C0r1s3Y2U/song.mp3?X-CloudApp-Visitor-Id=1390331'],
  autoplay: true,
  loop: true
});