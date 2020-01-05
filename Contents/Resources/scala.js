var found = [];

var allHeaders = document.getElementById("allMembers");
var isTemplate = false;
if(!allHeaders)
{
    allHeaders = document.getElementById("template");
    isTemplate = true;
}
var inheritedHeaders = document.getElementById("inheritedMembers");
var groupedHeaders = document.getElementById("groupedMembers");
var headersToCheck = [];
if(allHeaders)
{
    headersToCheck.push(allHeaders);
}
if(inheritedHeaders)
{
    headersToCheck.push(inheritedHeaders);
}
if(groupedHeaders)
{
    headersToCheck.push(groupedHeaders);
}
for(var headers of headersToCheck)
{
    var headersStyle = headers.getAttribute("style");
    if(headersStyle && headersStyle.includes("none"))
    {
        continue;
    }
    var isInherited = headers == inheritedHeaders;
    var isGrouped = headers == groupedHeaders;
    for(var i = (isTemplate) ? 1 : 0; i < headers.children.length; i++)
    {
        var didAddHeader = false;
        var header = headers.children[i];
        var headerStyle = header.getAttribute("style");
        if(!(header instanceof HTMLDivElement) || !(header.firstElementChild instanceof HTMLHeadingElement) || (headerStyle && headerStyle.includes("none")))
        {
            continue;
        }
        var headerChild = header.firstElementChild;
        var headerName = (headerChild) ? headerChild.innerText : null;
        if(!headerName || !headerName.length)
        {
            continue;
        }
        var anchors = header.getElementsByTagName("a");
        for(var anchor of anchors)
        {
            var nextSibling = anchor.nextElementSibling;
            if(nextSibling && nextSibling.tagName.toLowerCase() === "a")
            {
                continue;
            }
            var member = anchor.parentElement;
            var kinds = member.getElementsByClassName("kind");
            var kind = (kinds && kinds.length) ? kinds[0] : null;
            var memberStyle = member.getAttribute("style");
            if(!(member instanceof HTMLLIElement) || (memberStyle && memberStyle.includes("none")) || !kind || !kind.className || !(kind.className === "kind") || !anchor.id || !anchor.id.length || !kind.innerText || !kind.innerText.length)
            {
                continue;
            }
            var name = anchor.id;
            if((isInherited || isGrouped) && !name.endsWidth("dashinheritedanchor"))
            {
                name = name+"dashinheritedanchor";
                anchor.id = name;
            }
            found.push({"name": name, "kind": kind.innerText, "headerName": headerName})
        }
    }
}

found;
