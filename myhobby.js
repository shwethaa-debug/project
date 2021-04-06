function setvideo(src) {
    document.getElementById('div_video').innerHTML = '<video autoplay controls id="video_ctrl" style=" width: 100%;"><source src="'+src+'" type="video/mp4"></video>';
    document.getElementById('video_ctrl').play();
}