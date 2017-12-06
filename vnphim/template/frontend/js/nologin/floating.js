window.addEventListener('load',alignAds);document.body.onresize=alignAds;function alignAds(){console.log(document.body.clientWidth);var content=document.getElementsByClassName("content").item(0),floatLeft=document.getElementsByClassName("float-left").item(0),floatRight=document.getElementsByClassName("float-right").item(0);if(content){if(floatLeft){floatLeft.style.left=(document.body.clientWidth- content.clientWidth)/ 2 - floatLeft.clientWidth + "px";
}
if(floatRight){floatRight.style.right=(document.body.clientWidth- content.clientWidth)/ 2 - floatRight.clientWidth + "px";
}}}