const progress_bar = document.getElementById('music-length-present');
const progress_div = document.getElementById('music-length-total');
const current_time = document.getElementById('current-time');
const total_time = document.getElementById('total-time');
const music = document.querySelector('audio');
const volume = document.getElementById('volume-length-total');
const current_volume = document.getElementById('volume-length-present');
const play = document.getElementById('play')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const songs_image_list = document.getElementsByClassName('song-image-list');
const heart1 = document.getElementById('heart1');
const heart2 = document.getElementById('heart2');
const heart3 = document.getElementById('heart3');
const heart4 = document.getElementById('heart4');
const heart5 = document.getElementById('heart5');
const music_logo = document.getElementById('music-album-image');
const music_name = document.getElementById('A_name');
const artist_name = document.getElementById('music_artist_name');
const description = document.getElementById('description');
const quote = document.getElementById('quote');
const play_pause = document.getElementById('Play_Pause_Button');
music.volume = 0.5;
// let btn = document.querySelectorAll('#track #play_pause');
// let song = document.querySelectorAll('#music');
// music.play();
let song_index = 0;
let song_status = false;
let heart1_active = false;
let heart2_active = false;
let heart3_active = false;
let heart4_active = false;
let heart5_active = false;

const songs_list = [{
        name: "Shape Of You",
        artist: "Ed Sheeran",
        song: "songs/1.mp3",
        img: "song_img/song_img1.jpg",
        description: "Shape Of You is a song by English singer-songwritter Ed Sheeran. It was released as a digital download on 6 January 2017.",
        quote: "Life is one grand sweet song so start the music"
    },
    {
        name: "7 Rings",
        artist: "Ariana Grande",
        song: "songs/2.mp3",
        img: "song_img/song_img2.jpg",
        description: "7 Rings is a song recorded by American singer Ariana Grande for her 5th studio album Thank U, Next (2019).",
        quote: "Music expression that which cannot be put into words and that which cannot remain silent"
    },
    {
        name: "You & I",
        artist: "One Direction",
        song: "songs/3.mp3",
        img: "song_img/song_img3.jpg",
        description: "You & I is a song recorded by English-Irish boy band One Direction, taken from their third studio album Midnight Memories (2013)",
        quote: "Music is a part of every known society, past and present, and is common to all human cultures across the globe"
    },
    {
        name: "Love Story",
        artist: "Taylor Swift",
        song: "songs/4.mp3",
        img: "song_img/song_img4.jpg",
        description: "Love Story is a song written and recorded by American singer-songwriter Taylor Swift. It was released on September 12, 2008",
        quote: "Music, once admitted to the soul, bocomes a sort of spirit, and never dies"
    },
    {
        name: "Everything I Wanted",
        artist: "Billie Eilish",
        song: "songs/5.mp3",
        img: "song_img/song_img5.jpg",
        description: "Everything I Wanted is a song by American singer and songwriter Billie Eilish, and co-writter by Eilish and her brother Finneas O'Connell. It was released on November 13, 2019",
        quote: "Music is the only thing I've ever known that doesn't have any rules at all"
    }
]

heart1.addEventListener('click', (e) => {
    e.preventDefault();
    if (!heart1_active) {
        heart1.classList.replace('bx', 'fa')
        heart1.classList.replace('bx-heart', 'fa-heart')
        heart1.style.color = ' rgb(4 255 0)';
        heart1_active = true;
    } else {
        heart1.classList.replace('fa', 'bx')
        heart1.classList.replace('fa-heart', 'bx-heart')
        heart1.style.color = '#ccc';
        heart1_active = false;
    }
})
heart2.addEventListener('click', (e) => {
    e.preventDefault();
    if (!heart2_active) {
        heart2.classList.replace('bx', 'fa')
        heart2.classList.replace('bx-heart', 'fa-heart')
        heart2.style.color = ' rgb(4 255 0)';
        heart2_active = true;
    } else {
        heart2.classList.replace('fa', 'bx')
        heart2.classList.replace('fa-heart', 'bx-heart')
        heart2.style.color = '#ccc';
        heart2_active = false;
    }
})
heart3.addEventListener('click', (e) => {
    e.preventDefault();
    if (!heart3_active) {
        heart3.classList.replace('bx', 'fa')
        heart3.classList.replace('bx-heart', 'fa-heart')
        heart3.style.color = ' rgb(4 255 0)';
        heart3_active = true;
    } else {
        heart3.classList.replace('fa', 'bx')
        heart3.classList.replace('fa-heart', 'bx-heart')
        heart3.style.color = '#ccc';
        heart3_active = false;
    }
})
heart4.addEventListener('click', (e) => {
    e.preventDefault();
    if (!heart4_active) {
        heart4.classList.replace('bx', 'fa')
        heart4.classList.replace('bx-heart', 'fa-heart')
        heart4.style.color = ' rgb(4 255 0)';
        heart4_active = true;
    } else {
        heart4.classList.replace('fa', 'bx')
        heart4.classList.replace('fa-heart', 'bx-heart')
        heart4.style.color = '#ccc';
        heart4_active = false;
    }
})
heart5.addEventListener('click', (e) => {
    e.preventDefault();
    if (!heart5_active) {
        heart5.classList.replace('bx', 'fa')
        heart5.classList.replace('bx-heart', 'fa-heart')
        heart5.style.color = ' rgb(4 255 0)';
        heart5_active = true;
    } else {
        heart5.classList.replace('fa', 'bx')
        heart5.classList.replace('fa-heart', 'bx-heart')
        heart5.style.color = '#ccc';
        heart5_active = false;
    }
})

const playMusic = () => {
    song_status = true;
    music.play()
    play_pause.classList.replace('bx-play', 'bx-pause');
    play.classList.replace('fa-play', 'fa-pause');
    play.classList.replace('fa-play-circle', 'fa-pause-circle');
    play.title = 'Pause';
    // console.log(songs_image_list[song_index]);
    songs_image_list[song_index].classList.add('anime');
    music_logo.classList.add('anime');
}

const pauseMusic = () => {
    song_status = false;
    music.pause()
    play_pause.classList.replace('bx-pause', 'bx-play');
    play.classList.replace('fa-pause', 'fa-play');
    play.classList.replace('fa-pause-circle', 'fa-play-circle');
    play.title = 'Play';
    songs_image_list[song_index].classList.remove('anime');
    music_logo.classList.remove('anime');
}

play.addEventListener('click', () => {
    if (song_status) {
        pauseMusic()
    } else {
        playMusic()
    }
});
play_pause.addEventListener('click', () => {
    if (song_status) {
        pauseMusic()
    } else {
        playMusic()
    }
});

play.addEventListener('mouseenter', () => {
    if (!song_status) {
        play.classList.replace('fa-play', 'fa-play-circle');
        play.style.fontSize = '4vw';
    } else {
        play.classList.replace('fa-pause', 'fa-pause-circle');
        play.style.fontSize = '4vw';
    }
});
play.addEventListener('mouseleave', () => {
    if (!song_status) {
        play.classList.replace('fa-play-circle', 'fa-play');
        play.style.fontSize = '2vw';
    } else {
        play.classList.replace('fa-pause-circle', 'fa-pause');
        play.style.fontSize = '2vw';
    }
});

const loadSong = e => {
    music.src = e.song;
    music_logo.src = e.img;
    music_name.innerHTML = e.name;
    artist_name.innerHTML = e.artist;
    description.innerHTML = e.description;
    quote.innerHTML = e.quote;
}

const nextSong = () => {
    songs_image_list[song_index].classList.remove('anime');
    song_index = (song_index + 1) % songs_list.length;
    loadSong(songs_list[song_index]);
    playMusic()
}

const prevSong = () => {
    songs_image_list[song_index].classList.remove('anime');
    song_index = (song_index - 1 + songs_list.length) % songs_list.length;
    loadSong(songs_list[song_index])
    playMusic()
}
progress_div.addEventListener('click', (e) => {
    music.currentTime = (e.offsetX / e.srcElement.clientWidth) * music.duration
})

music.addEventListener('ended', nextSong);
next.addEventListener('click', nextSong)
prev.addEventListener('click', prevSong)

// btn.forEach((btn, index) => {
//     btn.addEventListener('click', function() {

//         if (song_index == 1) {
//             document.querySelector(".active_song").pause();
//             document.querySelector(".active_song").classList.remove("active_song");
//             document.querySelector(".active_btn").innerHTML = "<i class='bx bx-play'></i>";
//             document.querySelector(".active_btn").classList.remove("active_btn");
//         } else {
//             song_index = 1;
//         }

//         song[index].classList.add("active_song");
//         this.classList.add("active_btn");

//         song[index].currentTime = 0;

//         if (song_status == 0) {
//             song[index].play();
//             song_status = 1;
//             setInterval(update_second, 1000);
//             index_no = index;
//             this.innerHTML = "<i class='bx bx-pause'></i>";
//         } else {
//             song[index].pause();
//             this.innerHTML = "<i class='bx bx-play'></i>";
//             song_status = 0;
//         }

//     });
// });

/*This function will be execute in Every Second*/
// function update_second() {
//     if (song[index_no].ended) {
//         btn[index_no].innerHTML = "<i class='bx bx-play'></i>";
//         clearInterval(update_second);
//     }
// }


/*side menu*/
function menu_action() {
    let side_nav = document.querySelector('.side_menu');
    side_nav.classList.toggle("side_nav_active");
}

/*main menu*/
function open_close_menu() {
    let nav_content = document.querySelector('.nav_content');
    nav_content.classList.toggle("active_top_navbar");
}



// Function execute When the user scrolls the page
window.onscroll = () => {

    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("Bar").style.width = scrolled + "%";
}

music.addEventListener('timeupdate', (e) => {
    let current = e.srcElement.currentTime
    let duration = e.srcElement.duration
    let progress_time = (current / duration) * 100;
    progress_bar.style.width = `${progress_time}%`;
    if (duration) {
        if ((duration % 60) < 10) {
            total_time.textContent = `${Math.floor(duration / 60)}:0${Math.floor(duration % 60)}`;
        } else {
            total_time.textContent = `${Math.floor(duration / 60)}:${Math.floor(duration % 60)}`;
        }
    }
    if ((current % 60) < 10) {
        current_time.textContent = `${Math.floor(current / 60)}:0${Math.floor(current % 60)}`;
    } else {
        current_time.textContent = `${Math.floor(current / 60)}:${Math.floor(current % 60)}`;
    }
});
volume.addEventListener('click', (e) => {
    // console.log(e);
    current_volume.style.width = `${(e.offsetX / e.srcElement.clientWidth) * 100}%`;
    // console.log(current_volume.style.width);
    music.volume = e.offsetX / e.srcElement.clientWidth;
})