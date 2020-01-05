var found = [];

var anchors = (isZeal) ? document.getElementsByClassName("dashAnchor") : document.getElementsByTagName("a");
for(var i = 0; i < anchors.length; i++)
{
    var anchor = anchors[i];
    var name = anchor.name;
    if(name && name.startsWith("//apple_ref/"))
    {
        var anchorHref = (isReallyZeal) ? anchor.parentElement.id : name;
        if(!found.includes(name) && anchorHref && anchorHref.length)
        {
            found.push([name, anchorHref]);
        }
    }
}

found;
