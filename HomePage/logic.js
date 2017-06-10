onload = init;

function init() {
    displayFrontPage();
    underConstruction();
    var content = document.getElementById("content");

    frontpage.onclick = displayFrontPage;
    resume.onclick = displayResumePage;
    sparetime.onclick = displayProjectsPage;
    dream.onclick = displayDreamFirmPage;
    blog.onclick = displayBlog;
}

function displayFrontPage() {
    clearPage();
    heading.innerHTML = "Jonas Ladefoged Holm";
    ptag.innerHTML = "This website is mostly a sparetime project, so don't expect marvolous things. However I'm making it from the bottom up. No cheating, only my code and some frameworks maybe.. (right now only bootstrap) :) <br>If you are an employer, please take a look at my resume.";
}

// var btn = document.createElement("BUTTON");        // Create a <button> element
// var t = document.createTextNode("CLICK ME");       // Create a text node
// btn.appendChild(t);                                // Append the text to <button>
// document.body.appendChild(btn);                    // Append <button> to <body> 

function clearPage() {
    var parent = document.getElementById("content");
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function displayResumePage() {
    clearPage();
    heading.innerHTML = "Resume";
    ptag.innerHTML = "My resume would go here, here is a pdf version until then.";

    var pdflink = document.createElement("a");
    document.getElementById("content").appendChild(pdflink);
    pdflink.innerHTML = "<span class=\"glyphicon glyphicon-cloud-download\"></span> resume.pdf";
    pdflink.href = "resume.pdf";
}

function displayBlog() {
    clearPage();
    heading.innerHTML = "Blog";
    ptag.innerHTML = "Right now I'm just testing a loop";
    for (var i = 0; i < 10; i++) {
        var tag = document.createElement("P");
        document.getElementById("content").appendChild(tag);
        tag.innerHTML = "This is a loop itteration: " + i;
    }
}

function displayProjectsPage() {
    clearPage();
    heading.innerHTML = "Lot's </br> of cool projects"
    ptag.innerHTML = "";
    createProject("CodeScrambler", "This project is a small program for windows pc's that will help you scramble your password, to a structure similar to the one you have at the moment, but with different characters.", "CodeScrambler.zip", "");
}

function displayDreamFirmPage() {
    clearPage();
    heading.innerHTML = "Dreaming about a company";
    ptag.innerHTML = "Will it be you?? (more to come)";
}

function underConstruction() {
    var tag = document.createElement("h2");
    tag.id = "warning";
    var div = document.body;
    div.insertBefore(tag, div.childNodes[0]);
    tag.innerHTML = "<span class=\"glyphicon glyphicon-wrench\"></span>  Site under construction.  <span class=\"glyphicon glyphicon-wrench\"></span>";
}