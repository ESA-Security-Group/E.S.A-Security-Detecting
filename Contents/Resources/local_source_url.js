function local_source() {
    var nodes = Array.from(document.getElementsByTagName("html")[0].childNodes);
    if(document.body.childNodes.length > 1)
    {
        nodes.push(document.body.childNodes[document.body.childNodes.length-2]);
    }
    for(var i = 0; i < nodes.length; i++)
    {
        var comment = nodes[i];
        if(comment instanceof Comment)
        {
            var string = comment.data;
            if(string.startsWith("Local page at "))
            {
                return string;
            }
        }
    }
}

local_source();
