chrome.browserAction.onClicked.addListener(function(e) {
    chrome.tabs.create({
        url: "index.html"
    })
})
