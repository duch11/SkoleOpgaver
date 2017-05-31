onload = init;

function init(){
    var fPageButton = document.getElementById("frontpage");
    var resumeButton = document.getElementById("resume");
    var projectsButton = document.getElementById("sparetime");
    var dreamFirmButton = document.getElementById("dream");

    var heading = document.getElementById("title");
    var ptag = document.getElementById("ptag");
    var divTag = document.getElementById("content")

    displayFrontPage();
    displayResumePage();

    fPageButton.onclick = displayFrontPage;
    resumeButton.onclick = displayResumePage;
    projectsButton.onclick = displayProjectsPage;
    dreamFirmButton.onclick = displayDreamFirmPage;
}

function displayFrontPage(){
    clearPage();
    heading.innerHTML = "Jonas Ladefoged Holm";
    ptag.innerHTML = "This website is mostly a sparetime project, so don't expect marvolous things. However I'm making it from the bottom up. No cheating, only my code and some frameworks maybe.. (haven't decided yet) :) <br>If you are an employer, please look at my projects page to look what I've done in the past. Otherwise, you can read my resume at the provided menu option.";
}

// var btn = document.createElement("BUTTON");        // Create a <button> element
// var t = document.createTextNode("CLICK ME");       // Create a text node
// btn.appendChild(t);                                // Append the text to <button>
// document.body.appendChild(btn);                    // Append <button> to <body> 

function displayResumePage(){
    clearPage();
    heading.innerHTML = "Jonas Ladefoged Holm";
    ptag.innerHTML = "uei";
    for(var i = 0; i < 10; i++){
    var tag = document.createElement("P");
        document.getElementById("content").appendChild(tag);
        tag.innerHTML = "HEJ " + i;
    }
}

function clearPage(){
     var parent = document.getElementById("content");
     while(parent.firstChild){
         parent.removeChild(parent.firstChild);
     }
}



function displayProjectsPage(){
    clearPage();
    heading.innerHTML = "Masser af projecter";
    ptag.innerHTML = "Bla noget med en app";
}

function displayDreamFirmPage(){
    clearPage();
    heading.innerHTML = "Dreaming about a firm";
    ptag.innerHTML = "Det bedste firm in the wooooorld!";
}


