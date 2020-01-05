var found = [];
var containers = document.getElementsByClassName("main");
for(var i = 0; i < containers.length; i++)
{
    var container = containers[i];
    if(container.className.includes("container"))
    {
        for(var tagName of ["h2", "h4"])
        {
            var headers = document.getElementsByTagName(tagName);
            for(var j = 0; j < headers.length; j++)
            {
                headers[j].classList.add("dash_header");
            }
        }
        var headers = document.getElementsByClassName("dash_header");
        for(var j = 0; j < headers.length; j++)
        {
            var header = headers[j];
            if(header.innerText.trim().length)
            {
                var isSection = isCaseInsensitiveEqual("h2", header.tagName);
                try {
                    if(!isSection && !header.parentElement.className.includes("example"))
                    {
                        continue;
                    }                    
                } 
                catch(error)
                {
                    continue;
                }
                var anchor = header.getElementsByClassName("anchor").length ? header.getElementsByClassName("anchor")[0] : null;
                anchor = (isSection || anchor) ? anchor : nextElementWithClass(header, "anchor", ["h4", "h2"]);
                if(anchor && anchor.id && anchor.id.length)
                {
                    found.push({"name": header.innerText.trim(), "idName": anchor.id, "isSection": isSection});
                }
            }
        }
    }
}

found;
