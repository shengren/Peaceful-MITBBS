var blacklist = [];
chrome.storage.local.get('blacklist', function(result) {
  blacklist = result.blacklist;
});

$(document).ready(function() {
  var as = $('a');
  for (var i = 0; i < as.length; i++) {
    if (blacklist.indexOf(as[i].innerText) >= 0) {
      var suspect = as[i].innerText;
      var r = as[i].parentNode.parentNode;
      if ($(r).find('a')[1].innerText === suspect) {
        r.style.backgroundColor = '#5C5500';
      }
    }
  }
});

