var onlineURL = httrack_source();
onlineURL = substringFromString(onlineURL, " from "); 
onlineURL = substringToString(onlineURL, " by ");
if(onlineURL && onlineURL.length)
{
    var plays = document.getElementsByClassName("play");
    for(var i = 0; i < plays.length; i++)
    {
        var play = plays[i];
        try {
            var idName = play.parentElement.parentElement.id;
            var buttons = play.getElementsByClassName("Button");
            for(var j = 0; j < buttons.length; j++)
            {
                var button = buttons[j];
                if(j == 0)
                {
                    button.innerText = "Go To Interactive Example";
                    button.title = "Go To Interactive Example";
                    button.setAttribute("onclick", "window.location.href = 'https://"+onlineURL+"#"+idName+"';");
                }
                else
                {
                    button.style.display = "none";
                }
            }
            play.getElementsByTagName("textArea")[0].readOnly = true;
            play.getElementsByClassName("output")[0].style.display = "none";
        }
        catch(error) {
            console.log(error);
        }
    }    
}
