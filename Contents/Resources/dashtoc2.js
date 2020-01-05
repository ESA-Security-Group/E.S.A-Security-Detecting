var found = [];

var anchors = document.getElementsByClassName("dashAnchor");
for(var i = 0; i < anchors.length; i++)
{
    var anchor = anchors[i];
    var name = anchor.name;
    if(name && name.length && !found.includes(name))
    {
        found.push(name);
    }
}

found;
