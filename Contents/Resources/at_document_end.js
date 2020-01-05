// DHDashAtDocumentEnd

for(var element of document.querySelectorAll("[tabindex]"))
{
    element.setAttribute("tabindex", "-1");
}

document.querySelectorAll('img').forEach(function(img) {
  img.onerror = function(){this.style.display='none';};
})
