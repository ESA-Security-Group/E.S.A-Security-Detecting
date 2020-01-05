var found = [];

var links = document.getElementsByTagName("link");
for(var i = 0; i < links.length; i++)
{
    var link = links[i];
    var name = link.getAttribute("href");
    if(name && name.length && !found.includes(name))
    {
        found.push(name);
    }
}

found;
