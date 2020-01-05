var found = [];
var isBootstrap3 = !window.location.href.includes("Bootstrap.docset");
var sidenav = document.getElementsByClassName((isBootstrap3) ? "bs-sidebar" : "bs-docs-sidenav")[0];
if(sidenav)
{
    var anchors = sidenav.getElementsByTagName("a");
    for(var i = 0; i < anchors.length; i++)
    {
        var anchor = anchors[i];
        var section = null;
        if(isBootstrap3)
        {
            if(!anchor.parentElement.parentElement.className.includes("bs-sidenav"))
            {
                continue;
            }
        }
        else
        {
            var idName = anchor.getAttribute("href");
            if(idName)
            {
                idName = idName.substring(1, idName.length);            
            }
            section = document.getElementById(idName);
        }
        var name = null;
        try {
            name = (isBootstrap3) ? anchor.innerText.trim() : section.firstElementChild.firstElementChild.firstChild.textContent.trim();
        }
        catch(error) {

        }
        if(name && name.length)
        {
            found.push({"name": name, "path": anchor.href});
        }
    }
}

found;