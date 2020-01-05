// DHDashBaseLib

window.dash = new Proxy({},
        { get : function(target, prop)
            {
                if(target[prop] === undefined)
                {
                    return function()  {
                        var selector = prop;
                        try {
                          window.webkit.messageHandlers.dash.postMessage({"selector": selector, "arg": arguments[0]});
                        }
                        catch(err) {
                          window.webkit.messageHandlers.dash.postMessage({"selector": selector});
                        }
                    };
                }
                else
                {
                    return target[prop];
                }
            }
        });

function substringFromString(string, fromString)
{
    var pos = string.toLowerCase().indexOf(fromString.toLowerCase());
    if(pos != -1)
    {
        return string.substring(pos+fromString.length, string.length);
    }
    return null;
}

function substringToString(string, toString)
{
    var pos = string.toLowerCase().indexOf(toString.toLowerCase());
    if(pos != -1)
    {
        return string.substring(0, pos);
    }
    return null;
}

function isCaseInsensitiveEqual(a, b)
{
    return typeof a === 'string' && typeof b === 'string'
        ? a.localeCompare(b, undefined, { sensitivity: 'accent' }) === 0
        : a === b;
}

function previousElementWithTag(element, tagName)
{
    var previous = element.previousElementSibling;
    while(previous)
    {
        if(isCaseInsensitiveEqual(previous.tagName, tagName))
        {
            return previous;
        }
        previous = previous.previousElementSibling;
    }
    return null;
}

function nextElementWithClass(element, className, stopIfTagsEncountered)
{
    var next = element.nextElementSibling;
    while(next)
    {
        if(next.className && isCaseInsensitiveEqual(next.className, className))
        {
            return next;
        }
        else if(stopIfTagsEncountered && stopIfTagsEncountered.length)
        {
            for(var stopIfTag of stopIfTagsEncountered)
            {
                if(isCaseInsensitiveEqual(next.tagName, stopIfTag))
                {
                    return null;
                }
            }
        }
        next = next.nextElementSibling;
    }
    return null;
}

window.dash.walkTheDOM = function(node, func)
{
    var result = func(node);
    if(result)
    {
        return result;
    }
    node = node.firstChild;
    while(node)
    {
        var result = window.dash.walkTheDOM(node, func);
        if(result)
        {
            return result;
        }
        node = node.nextSibling;
    }
    return null;
}

window.dash.getAnchor = function(hash, escapedHash)
{
    var anchor = document.getElementById(hash);
    anchor = (anchor) ? anchor : document.getElementById(escapedHash);
    anchor = (anchor) ? anchor : document.anchors.namedItem(escapedHash);
    anchor = (anchor) ? anchor : document.anchors.namedItem(hash);
    return anchor;
}

document.createTouch = 'noRedirectPlease';
window.addEventListener("hashchange", function() {
                        window.dash.didChangeLocationWithinPage();
                        });

function httrack_source() {
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
            if(string.includes("Mirrored from ") && string.includes(" by HTTrack"))
            {
                return string;
            }
            else if(string.startsWith("Online page at "))
            {
                return string;
            }
        }
    }
}

HTMLElement.prototype.focus = function() {
    // disable JS stealing focus from Dash
}

// starting point for two finger back/forward gestures:
//window.addEventListener('wheel', (e) => {
//  e.preventDefault();
//  e.deltaX;
//  e.deltaY;
//});
