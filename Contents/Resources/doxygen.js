var found = [];

var tasks = document.getElementsByClassName("heading");
for(var i = 0; i < tasks.length; i++)
{
    var task = tasks[i];
    var header = (task.innerText) ? task.innerText.trim() : null;
    if(!(task instanceof HTMLTableRowElement) || !header.length || header.includes("\n"))
    {
        continue;
    }
    found.push({"header": header, "anchors": []});
    for(var targetClass of ["memItemRight", "memTemplItemRight"])
    {
        var entries = task.parentElement.getElementsByClassName(targetClass);
        for(var j = 0; j < entries.length; j++)
        {
            var entry = entries[j];
            if(!(entry instanceof HTMLTableCellElement))
            {
                continue;
            }
            var anchors = entry.getElementsByTagName("a");
            var anchor = (anchors.length > 0) ? anchors[0] : null;
            if(anchor)
            {
                var name = anchor.innerText;
                var href = anchor.href;
                if(name && name.length && href && href.length)
                {
                    found[found.length-1]["anchors"].push({"name": name, "href": href});                    
                }
            }
        }
    }
}

found;
