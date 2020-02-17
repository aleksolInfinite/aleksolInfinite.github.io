'use strict'

const body = document.querySelector('body');
const header = document.createElement('div');

header.className = 'top';

header.innerHTML += `
<div class="top">
    <header id="top-banner">
        <div class="titles">
            <h1>
                <a href="index.html">ALEKSI LAINE</a>
            </h1>
            <h2>
                Student Game Programmer
            </h2>
        </div>
    </header>

    <div class="linkrow">
        <a href="index.html">Home</a>
        <a href="resume.html ">Resume</a>
        <a href="game_project.html">Unity Game</a>
        <a href="med_app.html">Android App</a>
    </div>

</div>`;

body.insertBefore(header, body.firstChild);