const reels = [
    {
        username: "ankita_sharma",
        isMuted: true,
        likeCount: 1240,
        isLiked: true,
        commentCount: 89,
        caption: "Funky Car Edits #car #edits🔥",
        video: "./videos/video1.mp4",
        userprofile: "./images/image1.jpg",
        shareCount: 45,
        isFollowed: false
    },
    {
        username: "neha.yadav",
        isMuted: true,
        likeCount: 980,
        isLiked: false,
        commentCount: 56,
        caption: "ASMR food reels #reels #asmr ✨",
        video: "./videos/video2.mp4",
        userprofile: "./images/image2.jpg",
        shareCount: 32,
        isFollowed: true
    },
    {
        username: "singwithaman",
        isMuted: true,
        likeCount: 2560,
        isLiked: false,
        commentCount: 142,
        caption: "The Box - Roddy Rich 🔥 #rapsong #hype",
        video: "./videos/video3.mp4",
        userprofile: "./images/image3.jpg",
        shareCount: 78,
        isFollowed: true
    },
    {
        username: "its_sakshi",
        isMuted: true,
        likeCount: 1430,
        isLiked: true,
        commentCount: 64,
        caption: "Late night bike riding is love ❤️ #bikes #riding",
        video: "./videos/video4.mp4",
        userprofile: "./images/image4.jpg",
        shareCount: 41,
        isFollowed: false
    },
    {
        username: "rohit_ok",
        isMuted: true,
        likeCount: 1870,
        isLiked: true,
        commentCount: 97,
        caption: "Mountains are the best for travelling😍 #hills #nature",
        video: "./videos/video5.mp4",
        userprofile: "./images/image5.jpg",
        shareCount: 53,
        isFollowed: false
    },
    {
        username: "ananya.singh",
        isMuted: true,
        likeCount: 720,
        isLiked: false,
        commentCount: 38,
        caption: "I'm the real slim shady, please stand up 😎🎶 #eminem",
        video: "./videos/video6.mp4",
        userprofile: "./images/image6.jpg",
        shareCount: 21,
        isFollowed: false
    },
    {
        username: "devika_arjun",
        isMuted: true,
        likeCount: 3100,
        isLiked: false,
        commentCount: 180,
        caption: "Avengers Assemble ⚛️ #marvel #avengers",
        video: "./videos/video7.mp4",
        userprofile: "./images/image7.jpg",
        shareCount: 110,
        isFollowed: true
    },
    {
        username: "studd_rohit",
        isMuted: true,
        likeCount: 860,
        isLiked: true,
        commentCount: 49,
        caption: "Nature is a blessing 💕 #shorts #reels",
        video: "./videos/video8.mp4",
        userprofile: "./images/image8.jpg",
        shareCount: 27,
        isFollowed: false
    },
    {
        username: "virat_fanpage18",
        isMuted: true,
        likeCount: 2150,
        isLiked: false,
        commentCount: 134,
        caption: "Aggresive Virat Kohli = ❤️ #virat #kohli #cricket",
        video: "./videos/video9.mp4",
        userprofile: "./images/image9.jpg",
        shareCount: 69,
        isFollowed: false
    },
    {
        username: "carlover_223",
        isMuted: true,
        likeCount: 540,
        isLiked: true,
        commentCount: 22,
        caption: "911 what's your emergency, Supraaaaaaa MK4🚨🚨",
        video: "./videos/video10.mp4",
        userprofile: "./images/image10.jpg",
        shareCount: 15,
        isFollowed: true
    }
];

var allReels = document.querySelector('.all-reels')

function addData() {
    var sum = '';
    reels.forEach(function (elem, idx) {
        sum = sum + `<div class="reel">
                    <video autoplay loop ${elem.isMuted ? 'muted' : ''} src="${elem.video}"></video>
                    <div id="${idx}" class="mute">
                    ${elem.isMuted?'<i class="ri-volume-mute-fill"></i>':'<i class="ri-volume-up-fill"></i>'}
                    </div>
                    <div class="bottom">
                        <div class="user">
                            <img src="${elem.userprofile}" alt="">
                            <h4>${elem.username}</h4>
                            <button class="follow" id="${idx}" type="button">${elem.isFollowed ? 'Unfollow' : 'Follow'}</button>
                        </div>
                        <h3>${elem.caption}</h3>
                    </div>
                    <div class="right">
                        <div id="${idx}" class="like">
                            <h4 class="like-icon icon">${elem.isLiked ? '<i class="love ri-heart-3-fill"></i>' : '<i class="ri-heart-3-line"></i>'}</h4>
                            <h6>${elem.likeCount}</h6>
                        </div>
                        <div class="comment">
                            <h4 class="comment-icon icon"><i class="ri-chat-3-line"></i></h4>
                            <h6>${elem.commentCount}</h6>
                        </div>
                        <div class="share">
                            <h4 class="share-icon icon"><i class="ri-share-forward-line"></i></h4>
                            <h6>${elem.shareCount}</h6>
                        </div>
                        <div class="menu">
                            <h4 class="menu-icon icon"><i class="ri-more-2-fill"></i></h4>
                        </div>
                    </div>
                </div>`
    })

    allReels.innerHTML = sum;
}

addData();

allReels.addEventListener('click', function (dets) {
    if (dets.target.className == 'like') {
        if (!reels[dets.target.id].isLiked) {
            reels[dets.target.id].likeCount++;
            reels[dets.target.id].isLiked = true;
        }
        else {
            reels[dets.target.id].likeCount--;
            reels[dets.target.id].isLiked = false;
        }

        addData();
    }
    if (dets.target.className == 'follow') {
        if (!reels[dets.target.id].isFollowed) {
            reels[dets.target.id].isFollowed = true;
        }
        else {
            reels[dets.target.id].isFollowed = false;
        }

        addData();
    }
    if (dets.target.className == 'mute') {
        if (!reels[dets.target.id].isMuted) {
            reels[dets.target.id].isMuted = true;
        }
        else {
            reels[dets.target.id].isMuted = false;
        }

        addData();
    }
})
