const buttoneHoverSE = new Audio("Assets/Audio/Buttonhover.mp3");
const buttoneClickSE = new Audio("Assets/Audio/Buttonclick.wav");

const SEE = document.getElementsByClassName("gamesection")

for(const imag of SEE)
{
    imag.addEventListener("mouseover", PlayHoverSE);
    imag.addEventListener("click", playClickSE);
}

function PlayHoverSE()
{
    buttoneHoverSE.currentTime = 0;
    buttoneHoverSE.play();
}

function playClickSE()
{
    buttoneClickSE.play();
}

