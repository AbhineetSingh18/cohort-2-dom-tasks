const users = [
    {
        fullname: "Aarav Sharma",
        profession: "Frontend Developer",
        description: "Passionate about building responsive and user-friendly web interfaces using modern JavaScript frameworks.",
        img: "./images/diego-hernandez-MSepzbKFz10-unsplash.jpg"
    },
    {
        fullname: "Priya Verma",
        profession: "Backend Developer",
        description: "Experienced in designing scalable server-side applications and RESTful APIs.",
        img: "./images/pexels-doquyen-1520760.jpg"
    },
    {
        fullname: "Rohan Gupta",
        profession: "Full Stack Developer",
        description: "Skilled in both frontend and backend technologies with a focus on performance and clean architecture.",
        img: "./images/pexels-alef-morais-336305364-29881401.jpg"
    },
    {
        fullname: "Neha Singh",
        profession: "UI/UX Designer",
        description: "Creative designer focused on crafting intuitive user experiences and visually appealing interfaces.",
        img: "./images/pexels-pixabay-415829.jpg"
    }
];

var sum = '';
var body = document.body

users.forEach(function(elem){
    sum = sum + `<div class="card">
        <img src="${elem.img}" alt="image unavailable">
        <h2>${elem.fullname}</h2>
        <h3>${elem.profession}</h3>
        <p>${elem.description}</p>
    </div>`
})

body.innerHTML = sum