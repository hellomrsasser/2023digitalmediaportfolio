function updateSpacing() {
  document.querySelector("div#content").style["margin-top"] = document.querySelector("div#header").offsetHeight + 10 + "px";
}

updateSpacing();
setInterval(updateSpacing, 250); // pulls content beneath header at regular intervals

document.querySelectorAll("div#content>img:not([data-pdf-src])").forEach(i => i.addEventListener("click", function() { // turns imgs into hyperlinks to full-size image
  let a = document.createElement("a"); // putting the <img> in an <a> tag messed up the styling
  a.href = i.src;
  a.target = "_blank";
  a.click(); // window.open() is sometimes blocked by default
}));

document.querySelectorAll("div#content>img[data-pdf-src]").forEach(i => i.addEventListener("click", function() {
  let a = document.createElement("a");
  a.href = i.getAttribute("data-pdf-src");
  a.target = "_blank";
  a.click();
}));
