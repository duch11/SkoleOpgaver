onload = init;

function init(){
    var fPageButton = document.getElementById("frontpage");
    var resumeButton = document.getElementById("resume");
    var projectsButton = document.getElementById("sparetime");
    var dreamFirmButton = document.getElementById("dream");

    var heading = document.getElementById("title");
    var ptag = document.getElementById("ptag");

    fPageButton.onclick = displayFrontPage;
    resumeButton.onclick = displayResumePage;
    projectsButton.onclick = displayProjectsPage;
    dreamFirmButton.onclick = displayDreamFirmPage;
}

function displayFrontPage(){
    heading.innerHTML = "My life, haleluja";
    ptag.innerHTML = "I welcome thee";
}

function displayResumePage(){
    // alert("Hej mor");
    heading.innerHTML = "So nice person right here";
    ptag.innerHTML = "Jeg er flot og 27år.";
}

function displayProjectsPage(){
    heading.innerHTML = "Masser af projecter";
    ptag.innerHTML = "Bla noget med en app";
}

function displayDreamFirmPage(){
    heading.innerHTML = "Dreaming about a firm";
    ptag.innerHTML = "Det bedste firm in the wooooorld!";
}


