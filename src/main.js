function updateSpacing() {
  document.querySelector("div#content").style["margin-top"] = document.querySelector("div#header").offsetHeight + 10 + "px";
}

updateSpacing();
setInterval(updateSpacing, 250); // pulls content beneath header at regular intervals

document.querySelectorAll("div#content>img:not([data-pdf-src])").forEach(i => i.addEventListener("click", function() { // turns imgs into hyperlinks to full-size image
  let a = document.createElement("a");
  a.href = i.src;
  a.target = "_blank";
  a.click();
}));

document.querySelectorAll("div#content>img[data-pdf-src]").forEach(i => i.addEventListener("click", function() {
  let pdf = i.getAttribute("data-pdf-src");
  console.log(pdf);
  let a = document.createElement("a");
  a.href = pdf;
  a.download = pdf.slice(pdf.lastIndexOf("/") + 1);
  a.target = "_blank";
  a.click();
}));