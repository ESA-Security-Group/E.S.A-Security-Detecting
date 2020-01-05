var anchors = document.getElementsByTagName("a");
for(var i = 0; i < anchors.length; i++)
{
    var anchor = anchors[i];
    if(!anchor.className || (anchor.className && !anchor.className.includes("dash-do-not-relativize")))
    {
        var href = anchor.getAttribute("href");
        if(href && href.includes("stackoverflow.com/questions/"))
        {
            var questionID = substringFromString(href, "stackoverflow.com/questions/");
            if(questionID && questionID.includes("/"))
            {
                questionID = substringToString(questionID, "/");
            }
            if(questionID && questionID.length)
            {
                var fragment = substringFromString(href, "#");
                var newHref = "dash-stack://"+questionID;
                if(fragment && fragment.length)
                {
                    newHref += "#"+fragment;
                }
                newHref += "?dbPath="+dbPath+"&shouldRedirect=1";
                anchor.setAttribute("href", newHref);
            }
        }
    }
}
