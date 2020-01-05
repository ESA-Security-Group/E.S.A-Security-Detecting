var found = [];

for(var type of ["mixin", "constant", "function", "helper"])
{
    var entries = document.getElementsByClassName(type);
    for(var i = 0; i < entries.length; i++)
    {
        var entry = entries[i].getElementsByTagName("a").length ? entries[i].getElementsByTagName("a")[0] : null;
        if(entry)
        {
            var entryName = entry.innerText.trim();
            var href = entry.href;
            if(href && href.length && entryName && entryName.length)
            {
                found.push({"name": entryName, "href": href, "type": type});
            }
        }

    }
}

found;