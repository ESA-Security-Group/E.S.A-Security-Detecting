var mainFrameURL = window.location.href;

while(document.getElementsByClassName("dash-highlight").length)
{
    document.getElementsByClassName("dash-highlight")[0].classList.remove("dash-highlight");
}
while(document.getElementsByClassName("dash-highlight-end").length)
{
    document.getElementsByClassName("dash-highlight-end")[0].classList.remove("dash-highlight-end");
}

var anchor = window.dash.getAnchor(hash, escapedHash);
var isRails = mainFrameURL.includes("Ruby%20on%20Rails.docset");
if(isRails && anchor && isCaseInsensitiveEqual(anchor.className, "permalink"))
{
    anchor = null;
}

if(anchor)
{
    var range = document.createRange();
    range.setStart(anchor, 0);
    range.setEnd(anchor, 0);
    var selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);

    var toHighlight = null;

    if(mainFrameURL.includes("/Sencha%20Touch.docset") || mainFrameURL.includes("/ExtJS.docset") || mainFrameURL.includes("/Appcelerator%20Titanium.docset"))
    {
        if(anchor.firstElementChild.className === "dashAnchor")
        {
            anchor = anchor.firstElementChild;
        }
    }
    if(mainFrameURL.includes("/Bootstrap.docset"))
    {
        toHighlight = (isCaseInsensitiveEqual(anchor.tagName, "section")) ? anchor.firstElementChild.firstElementChild : anchor;
    }
    else if(mainFrameURL.includes("/Compass.docset"))
    {
        toHighlight = anchor.getElementsByTagName("a")[0];
    }
    else if(mainFrameURL.includes("/Twig.docset"))
    {
        toHighlight = (isCaseInsensitiveEqual(anchor.className, "section")) ? anchor.firstElementChild : anchor;
    }
    else if(mainFrameURL.includes("/D3JS.docset"))
    {
        toHighlight = anchor.parentElement;
    }
    else
    {
        toHighlight = finalHighlightNodeStartingWith(anchor);
    }
    if(mainFrameURL.includes("/Cappuccino.docset"))
    {
        toHighlight = toHighlight.firstElementChild;
    }
    highlightNode(toHighlight);
}

function highlightNode(toHighlight)
{
    if(toHighlight)
    {
        toHighlight.classList.add("dash-highlight");
        window.setTimeout(function() {
            toHighlight.classList.add("dash-highlight-end");
            toHighlight.classList.remove("dash-highlight");
          }, 400);
    }
}

function finalHighlightNodeStartingWith(start)
{
    var mainFrameURL = window.location.href;
    var toHighlight = bestHighlightNodeStartingWith(start);
    if(toHighlight && (mainFrameURL.includes("Scala.docset") || mainFrameURL.includes("Akka.docset")) && (toHighlight.className && (toHighlight.className.includes("modifier_kind") || toHighlight.className.includes("permalink"))))
    {
        toHighlight = toHighlight.parentElement;
    }
    if(!toHighlight && mainFrameURL.includes("Redis.docset"))
    {
        toHighlight = bestHighlightNodeStartingWith(start.parentElement);
    }
    if(mainFrameURL.includes("NodeJS.docset"))
    {
        toHighlight = toHighlight.parentElement.parentElement;
    }
    if((mainFrameURL.includes("Haskell.docset") || mainFrameURL.includes("Haskell%20DocSets") || mainFrameURL.includes("DHHaskellRepo")) && toHighlight.parentElement.className.includes("src"))
    {
        toHighlight = toHighlight.parentElement;
    }
    else if(mainFrameURL.includes("YUI.docset"))
    {
        toHighlight = (toHighlight.firstElementChild.innerText.trim().length) ? toHighlight.firstElementChild : toHighlight.firstElementChild.nextElementSibling;
    }
    else if(((mainFrameURL.includes("Ruby.docset")) && !(toHighlight.className.startsWith("method-detail") && toHighlight.id.length) && toHighlight instanceof HTMLDivElement) || (mainFrameURL.includes("Qt.docset") && (isCaseInsensitiveEqual(toHighlight.parentElement.className, "fn") || toHighlight.parentElement instanceof HTMLParagraphElement || isCaseInsensitiveEqual(toHighlight.parentElement.className, "flags"))))
    {
        toHighlight = toHighlight.parentElement;
    }
    else
    {
        var newToHighlight = window.dash.walkTheDOM(toHighlight, function(element) {
            if(element instanceof HTMLHeadingElement)
            {
                return element;
            }
            else if(element instanceof Text && element.data.trim().length)
            {
                return "stop";
            }
        });
        if(newToHighlight && newToHighlight instanceof Node)
        {
            toHighlight = newToHighlight;
        }
    }
    return toHighlight;
}

function bestHighlightNodeStartingWith(start)
{
    var mainFrameURL = window.location.href;
    var isJava = mainFrameURL.includes("Java.docset") || mainFrameURL.includes("Play_Java.docset") || mainFrameURL.includes("JavaFX.docset") || mainFrameURL.includes("Groovy.docset");
    var isDoxygen = mainFrameURL.includes("TYPO3.docset") || mainFrameURL.includes("Zend_Framework.docset") || mainFrameURL.includes("Cocos2D-X.docset");
    var isLaravel = mainFrameURL.includes("Laravel.docset") && mainFrameURL.includes("/docs/") && !mainFrameURL.includes("/api/");
    if(mainFrameURL.includes("Semantic%20UI.docset"))
    {
        if(start.parentElement instanceof HTMLHeadingElement)
        {
            return start.parentElement;
        }
        else
        {
            return previousElementWithTag(start, "h4");
        }
    }
    if(start.nodeType == 1 && start.innerText.trim().length) // 1 == DOM_ELEMENT_NODE
    {
        return start;
    }
    var sibling = start.nextSibling;
    var count = 0;
    while(sibling && count <= 10)
    {
        if(sibling.nodeType == 1 && sibling.innerText.trim().length > 0) // 1 == DOM_ELEMENT_NODE
        {
            if(!sibling.hidden)
            {
                if((isJava || isDoxygen) && sibling.firstElementChild.firstElementChild.innerText.trim().length > 0)
                {
                    return sibling.firstElementChild.firstElementChild;
                }
                return sibling;
            }
        }
        sibling = sibling.nextSibling;
        ++count;
    }
    if(start.nodeType == 1 && start.parentElement.innerText.trim().length > 0) // 1 == DOM_ELEMENT_NODE
    {
        if(isDoxygen && start.parentElement.className === "memItemLeft")
        {
            return start.parentElement.nextElementSibling;
        }
        return start.parentElement;
    }
    if(isLaravel && start.parentElement.nextElementSibling instanceof HTMLHeadingElement)
    {
        return start.parentElement.nextElementSibling;
    }
    return null;
}
