let caption = "";

function getInput() {
    caption = prompt("Enter your caption for your meme");
}

function createMeme(videoSrc) {
    let output = document.getElementById("output-memes");

    let div = document.createElement("div");
    div.style.margin = "10px";
    div.style.textAlign = "center";

    // Caption
    let pTag = document.createElement("p");
    pTag.innerHTML = caption;
    pTag.style.color = "white";

    // Video
    let video = document.createElement("video");
    video.src = videoSrc;
    video.autoplay = true;
    video.muted = true;
    video.loop = true;
    video.width = 400;

    // Edit button
    let editBtn = document.createElement("button");
    editBtn.innerHTML = "Edit";
    editBtn.style.backgroundColor = "blue";
    editBtn.style.color = "white";
    editBtn.addEventListener("click", function () {
        let newCaption = prompt("Enter your new caption for this meme");
        pTag.innerHTML = newCaption;
    });

    // Delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.style.backgroundColor = "red";
    deleteBtn.style.color = "white";
    deleteBtn.addEventListener("click", function () {
        div.remove();
    });

    div.appendChild(pTag);
    div.appendChild(video);
    div.appendChild(editBtn);
    div.appendChild(deleteBtn);

    output.appendChild(div);
}


const memeButtons = [
    { class: "parama", src: "./assets/video2.mp4" },
    { class: "mersal", src: "./assets/video4.mp4" },
    { class: "nesam", src: "./assets/video1.mp4" },
    { class: "joke", src: "./assets/video6.mp4" },
    { class: "kambi", src: "./assets/video5.mp4" },
    { class: "ambi", src: "./assets/video8.mp4" },
    { class: "vivek", src: "./assets/video3.mp4" },
    { class: "nattu", src: "./assets/video7.mp4" }
];

memeButtons.forEach(item => {
    let btn = document.getElementsByClassName(item.class)[0];
    btn.addEventListener("click", function () {
        getInput();  
        createMeme(item.src); 
    });
});
