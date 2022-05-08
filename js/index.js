let images = ['img/image1.jpeg', 'img/image2.jpeg', 'img/image3.jpeg']

let image = document.getElementById('bg');

let index = 0;

setInterval(() => {
    index = (index+1)%3;
    image.style.backgroundImage = `url(${images[index]})`
    image.style.transition = 'all 0.5s ease';
},3000)