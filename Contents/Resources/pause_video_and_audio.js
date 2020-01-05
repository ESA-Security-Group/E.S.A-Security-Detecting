var iframeVideoTags = document.getElementsByTagName('video');
for (var j = 0; j < iframeVideoTags.length; j++) {
    try {
        iframeVideoTags.item(j).pause();
    } catch (error) {}
}
var iframeAudioTags = document.getElementsByTagName('audio');
for (var j = 0; j < iframeAudioTags.length; j++) {
    try {
        iframeAudioTags.item(j).pause();
    } catch (error) {}
}
var frames = document.getElementsByTagName('iframe');
for (var i = 0; i < frames.length; i++) {
    try {
        var innerDoc = (frames.item(i).contentDocument) ? frames.item(i).contentDocument : frames.item(i).contentWindow.document;
        var iframeVideoTags = innerDoc.getElementsByTagName('video');
        for (var j = 0; j < iframeVideoTags.length; j++) {
            iframeVideoTags.item(j).pause();
        }
    } catch (error) {}
}
var frames = document.getElementsByTagName('iframe');
for (var i = 0; i < frames.length; i++) {
    try {
        var innerDoc = (frames.item(i).contentDocument) ? frames.item(i).contentDocument : frames.item(i).contentWindow.document;
        var iframeAudioTags = innerDoc.getElementsByTagName('audio');
        for (var j = 0; j < iframeAudioTags.length; j++) {
            iframeAudioTags.item(j).pause();
        }
    } catch (error) {}
}