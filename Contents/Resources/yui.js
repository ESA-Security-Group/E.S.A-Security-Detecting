var found = [];

var methods = document.getElementsByClassName("index-item method");
var properties = document.getElementsByClassName("index-item property");
var events = document.getElementsByClassName("index-item event");
var attributes = document.getElementsByClassName("index-item attr");

var constructors = document.getElementsByClassName("constructor");
if(constructors.length)
{
    var names = constructors[0].getElementsByClassName("name");
    if(names.length)
    {
        var constructorName = names[0].innerText;
        var constructorID = names[0].parentElement.id;
        if(constructorName && constructorName.length && constructorID && constructorID.length)
        {
            found.push({"header": "Constructors", "name": constructorName, "href": "#"+constructorID});
        }
    }
}

for(var tasks of [methods, properties, events, attributes])
{
    for(var i = 0; i < tasks.length; i++)
    {
        var task = tasks[i].firstElementChild;
        if(task)
        {
            var href = task.getAttribute("href");
            var header = null;
            var name = task.innerText;
            if(!name.length)
            {
                continue;
            }
            if(tasks === methods)
            {
                header = "Methods";
            }
            else if(tasks === properties)
            {
                header = "Properties";
            }
            else if(tasks === events)
            {
                header = "Events";
            }
            else if(tasks === attributes)
            {
                header = "Attributes";
            }
            else
            {
                continue;
            }
            found.push({"header": header, "name": name, "href": href});
        }
    }
}

found;