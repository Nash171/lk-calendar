var opened_window_id = null;

chrome.browserAction.onClicked.addListener(function() {

    if(opened_window_id!=null){

        chrome.windows.update(opened_window_id, {
            focused : true
        });
        
        return;
    }

    var width = 650;
    var height = 680;
    var left = ((screen.width / 2) - (width / 2));
    var top = ((screen.height / 2) - (height / 2));

    chrome.windows.create({
        url: 'index.html',
        width: width,
        height: height,
        top: Math.round(top),
        left: Math.round(left),
        type: 'popup'
    }, function(created_window){
        opened_window_id = created_window.id
    });
});

chrome.windows.onRemoved.addListener(function(windowId){
    console.log(windowId);
    opened_window_id = null;
});