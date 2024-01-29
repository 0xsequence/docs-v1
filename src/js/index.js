/* used for custom js code*/

// for create click handlers on video preview images
function stopVideo(videoElement) {
    videoElement.pause();
    videoElement.currentTime = 0;
}

function isVideoPlaying(videoElement) {
    return !videoElement.paused && videoElement.readyState === 4;
}

// window.addEventListener('load', function() {
//     var iframe = document.querySelector('.video-frame');
//         if (iframe) {
//             var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
//             var video = innerDoc.querySelector('video');

//             if (video && isVideoPlaying(video)) {
//                 console.log('stopping video')
//                 stopVideo(video);
//                 video.removeAttribute('autoplay');
//                 clearInterval(innerInterval)
//             } else {

//             }
//         }
// });

const videoFunctions = () => {
let interval = setInterval(() => {
    // let innerInterval = setTimeout(() => {
    //     var iframe = document.querySelector('.video-frame');
    //     if (iframe) {
    //         var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
    //         var video = innerDoc.querySelector('video');

    //         if (video && isVideoPlaying(video)) {
    //             console.log('stopping video')
    //             stopVideo(video);
    //             video.removeAttribute('autoplay');
    //             clearInterval(innerInterval)
    //         } else {

    //         }
    //     }
    // }, 0)

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