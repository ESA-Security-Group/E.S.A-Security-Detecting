var found = [];
var duplicates = [];

var tasks = document.getElementsByTagName("option");
var hasAppleStyle = false;

for(var i = 0; i < tasks.length; i++)
{
    var task = tasks[i];
    var name = task.value;
    var title = task.innerText;
    if(name && name.length && title && title.length)
    {
        if(name.startsWith("//apple_ref/"))
        {
            if(!hasAppleStyle)
            {
                hasAppleStyle = true;
                duplicates = [];
                found = [];
            }
        }
        else if(!name.startsWith("//api/") && !hasAppleStyle)
        {
            continue;
        }
        if(!duplicates.includes(name))
        {
            duplicates.push(name);
        }
        else
        {
            continue;
        }
        found.push({"name": name, "title": title});
    }
}

found;