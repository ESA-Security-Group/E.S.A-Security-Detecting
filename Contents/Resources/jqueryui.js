var found = [];

var allSections = document.getElementsByClassName("quick-nav-section");
for(var i = 0; i < allSections.length; i++)
{
    var section = allSections[i];
    var titleName = (section.firstElementChild) ? section.firstElementChild.innerText : null;
    if(!(section instanceof HTMLDivElement) || !titleName || !titleName.length)
    {
        continue;
    }
    var entryType = "Attribute";
    if(isCaseInsensitiveEqual(titleName, "Events"))
    {
        entryType = "Event";
    }
    else if(isCaseInsensitiveEqual(titleName, "Methods"))
    {
        entryType = "Method";
    }
    var didAdd = false;
    var allEntries = section.getElementsByTagName("a");
    for(var j = 0; j < allEntries.length; j++)
    {
        var entry = allEntries[j];
        var href = entry.href;
        found.push({"name": entry.innerText.trim(), "href": href, "entryType": entryType, "titleName": titleName});
    }
}

found;
