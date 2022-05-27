document.querySelector('.gray-img').setAttribute('draggable','false')
document.querySelector('.white-img').setAttribute('draggable','false')


// const siteMenu = document.querySelector('.c-site-menu');
// const siteHeader = document.querySelector('.l-site-header');
// siteMenu.addEventListener('click', function() {
// 	siteMenu.classList.toggle('js-active');
// });



const videoPlayer = document.querySelector('.video-player')
const video = videoPlayer.querySelector('.video')
const playButton = videoPlayer.querySelector('.play-button')


playButton.addEventListener('click', () => {
    video.play();
})

