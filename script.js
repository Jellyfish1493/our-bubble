const PASSWORD = "Jellyfish";

function showLogin(){

    const welcomeScreen = document.getElementById("welcome");
    const loginScreen = document.getElementById("login");

    welcomeScreen.style.opacity = "0";
    welcomeScreen.style.transform = "translateY(-10px)";

    setTimeout(() => {

        welcomeScreen.classList.add("hidden");

        loginScreen.classList.remove("hidden");

        loginScreen.style.opacity = "0";
        loginScreen.style.transform = "translateY(10px)";

        requestAnimationFrame(() => {

            loginScreen.style.opacity = "1";
            loginScreen.style.transform = "translateY(0)";

        });

    }, 500);

}

function login(){

const input=document.getElementById("password").value;

if(input===PASSWORD){

document.getElementById("login").classList.add("hidden");
document.getElementById("letters").classList.remove("hidden");

}else{

document.getElementById("error").innerText="That's not our secret ❤️";

}

}

const letters={

miss:{
title:"Open when you miss me ❤️",
body:`
<p>If you're reading this, I wish I could give you the biggest hug.</p>

<p>Until I can, remember that no amount of distance changes how much I care about you.</p>

<p>Think about one of our favorite memories together and know there are so many more waiting for us.</p>

<p>I love you. Always.</p>
`
},

sad:{
title:"Open when you've had a bad day 🌸",
body:`
<p>Cha Mimi! I'm really proud of you.</p>

<p>Even on the days when you don't feel strong, you're still trying—and that matters.</p>

<p>Tomorrow is another chance, and I'll always be cheering for you.</p>

<p>Now go drink some water, take a deep breath, and remember how amazing you are. ❤️</p>
`
},

sleep:{
title:"Open when you can't sleep 🌙",
body:`
<p>I hope you're wrapped up somewhere cozy.</p>

<p>Imagine we're lying under the stars talking about absolutely nothing until we both fall asleep. Or watching a really good K Drama side by side until our eyes close</p>

<p>Goodnight, beautiful.</p>

<p>Sweet dreams. ❤️</p>
`
},

happy:{
title:"Open when you're celebrating 🎉",
body:`
<p>Have an amazing day!</p>

<p>You deserve every good thing that's coming your way.</p>

<p>Now remember the moments and promise me we'll celebrate them all together again soon. ❤️</p>
`
}

}

let currentLetter = "";

function openLetter(id, envelope){

    if(envelope.classList.contains("open")){

        envelope.classList.remove("open");

        return;

    }

    envelope.classList.add("open");
    envelope.dataset.letter = id;
}

function showLetter(event){

    event.stopPropagation();

    const envelope = event.currentTarget.closest(".envelope");
    const id = envelope.dataset.letter;

    if(!id) return;

    document.getElementById("title").innerHTML = letters[id].title;
    document.getElementById("content").innerHTML = letters[id].body;

    const modal = document.getElementById("letterModal");
    modal.style.display = "flex";

    setTimeout(() => {
        modal.style.opacity = "1";
    }, 50);
}

function closeLetter(){

    document.getElementById("letterModal").style.display="none";

}

