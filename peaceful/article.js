var blacklist = [];
chrome.storage.local.get('blacklist', function(result) {
  blacklist = result.blacklist;
});

$(document).ready(function() {
  var strongs = $('strong');
  for (var i = 0; i < strongs.length; i++) {
    if (blacklist.indexOf(strongs[i].innerText) >= 0) {
      var t = strongs[i].parentNode.parentNode.parentNode.parentNode
              .parentNode.parentNode.parentNode.parentNode.parentNode;
      t.style.backgroundColor = '#202020';
    }
  }
});

