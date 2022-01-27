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
                Game Programmer
            </h2>
        </div>
    </header>

    <div class="linkrow">
        <a href="index.html">Home</a>
        <a href="resume.html ">Resume</a>
        <a href="3D_game.html">3D Adventure RPG</a>
        <a href="game_project.html">Unity 2D Games</a>
    </div>

</div>`;

body.insertBefore(header, body.firstChild);