var opened_window_id = null;

chrome.action.onClicked.addListener(async function() {

    if(opened_window_id!=null){

        chrome.windows.update(opened_window_id, {
            focused : true
        });

        return;
    }
    const [info] = await chrome.system.display.getInfo();
    var width = 650;
    var height = 730;
    var left = ((info.bounds.width / 2) - (width / 2));
    var top = ((info.bounds.height / 2) - (height / 2));

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
