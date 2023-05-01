document.querySelector("div#content").style["margin-top"] = document.querySelector("div#header").offsetHeight + 10 + "px"; // pushes content div beneath header
document.querySelectorAll("div#content>img").forEach(i => i.addEventListener("click", function() { // turns imgs into hyperlinks to full-size image
  let a = document.createElement("a");
  a.href = i.src;
  a.click();
}));