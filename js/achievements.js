let images1 = ['../img/achievement1.jpeg', '../img/achievement2.jpeg', '../img/achievement3.jpeg']

let images2 = ['../img/image_por1.jpeg', '../img/image_por2.jpeg', '../img/image_por3.jpeg']

let image = document.getElementById('bg');

let index = 0;

if(window.innerHeight > window.innerWidth) {
    index = 0;
    setInterval(() => {
        index = (index+1)%3;
        image.style.backgroundImage = `url(${images2[index]})`
        image.style.transition = 'all 0.5s ease';
    },3000)
} else {
    index = 0;
    setInterval(() => {
        index = (index+1)%3;
        image.style.backgroundImage = `url(${images1[index]})`
        image.style.transition = 'all 0.5s ease';
    },3000)
}