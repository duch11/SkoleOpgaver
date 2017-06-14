onload = init;

function init() {
    underConstruction();
    var content = document.getElementById("content");

}


function underConstruction() {
    var tag = document.createElement("h2");
    tag.id = "warning";
    var div = document.body;
    div.insertBefore(tag, div.childNodes[0]);
    tag.innerHTML = "<span class=\"glyphicon glyphicon-wrench\"></span>  Site under construction.  <span class=\"glyphicon glyphicon-wrench\"></span>";
}