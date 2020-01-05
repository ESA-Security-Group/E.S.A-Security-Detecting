var found = [];

var keys = ["classes", "functions", "Functionsx", "public-functions", "protected-functions", "reimplemented-protected-functions", "reimplemented-public-functions", "static-public-members", "static-protected-members", "methods", "properties", "attached-properties", "signals", "signal-handlers", "attached-signal-handlers", "public-slots", "protected-slots", "public-variables", "protected-variables", "Typesx", "types", "public-types", "protected-types", "Macrosx", "macros", "related-non-members"];
var foundHeaders = [];

for(var i = 0; i < keys.length; i++)
{
    var header = keys[i];
    var headerAnchor = document.anchors.namedItem(header);
    if(!headerAnchor || !headerAnchor.nextElementSibling || !isCaseInsensitiveEqual("h2", headerAnchor.nextElementSibling.tagName) || !headerAnchor.nextElementSibling.nextElementSibling)
    {
        continue;
    }
    var trueHeader = headerAnchor.nextElementSibling.innerText;
    if(!trueHeader || !trueHeader.length || foundHeaders.includes(trueHeader))
    {
        continue;
    }
    foundHeaders.push(trueHeader);
    var toParse = headerAnchor.nextElementSibling.nextElementSibling;
    var anchors = toParse.getElementsByTagName("a");
    for(var j = 0; j < anchors.length; j++)
    {
        var anchor = anchors[j];
        if(anchor.name && anchor.name.length)
        {
            continue;
        }
        var name = anchor.innerText;
        var href = anchor.href;
        found.push({"name": name, "header": header, "trueHeader": trueHeader, "href": href})
    }
}

found;
