/* used for custom js code*/

const videoFunctions = () => {
    let interval = setInterval(() => {
        var container = document.querySelector('.video-container');
        if(container){
            var image = container.querySelector('.preview-image');
            image.addEventListener('click', function() {
                var container = document.querySelector('.video-container');
                var video = container.querySelector('.video-frame');
                video.style.display = 'block';
                image.style.display = 'none';
                video.src += "?autoplay=1";
                clearInterval(interval)
            });
        }
    }, 1000)
}

module.exports = {
    videoFunctions
}