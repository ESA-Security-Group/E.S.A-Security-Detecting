var found = [];

var tasks = document.getElementsByTagName("a");
for(var i = 0; i < tasks.length; i++)
{
    var task = tasks[i];
    var href = task.getAttribute("href");
    var header = null;
    var name = task.innerText;
    if(href && href.startsWith("#method-c"))
    {
        header = "Class Methods";
    }
    else if(href && href.startsWith("#method-i"))
    {
        header = "Instance Methods";
    }
    else
    {
        name = task.name;
        if(name && name.length)
        {
            href = "#"+name;
            var parent = null;
            try {
                parent = task.parentElement.parentElement.parentElement.parentElement.previousElementSibling;                
            }
            catch(error) {

            }
            if(parent && parent.innerText === "Attributes")
            {
                header = "Attributes";
            }
            else if(parent && parent.innerText == "Constants")
            {
                header = "Constants";
            }
            else
            {
                continue;
            }
        }
        else
        {
            continue;
        }
    }
    found.push({"name": name, "href": href, "header": header});
}

found;