var anchor = window.dash.getAnchor(hash, escapedHash);
if(anchor)
{
    var possibleNearbyAnchors = [];
    if(anchor.parentElement.firstElementChild == anchor)
    {
        possibleNearbyAnchors.push(anchor.parentElement);
    }
    var previous = anchor.previousElementSibling;
    while(previous && ((previous.name && previous.name.length) || (previous.id && previous.id.length)))
    {
        possibleNearbyAnchors.push(previous);
        previous = previous.previousElementSibling;
    }
    var next = anchor.nextElementSibling;
    while(next && ((next.name && next.name.length) || (next.id && next.id.length)))
    {
        possibleNearbyAnchors.push(next);
        next = next.nextElementSibling;
    }
    var firstChild = (anchor.firstElementChild) ? anchor.firstElementChild : null;
    if(firstChild)
    {
        possibleNearbyAnchors.push(firstChild);
    }
    var nearbyAnchors = [];
    for(var i = 0; i < possibleNearbyAnchors.length; i++)
    {
        var possibleAnchor = possibleNearbyAnchors[i];
        if(possibleAnchor.name && possibleAnchor.name.length)
        {
            nearbyAnchors.push(possibleAnchor.name);
        }
        if(possibleAnchor.id && possibleAnchor.id.length)
        {
            nearbyAnchors.push(possibleAnchor.id);
        }
    }
    nearbyAnchors;
}
