function updateBlacklist() {
  var blacklist = document.getElementById('blacklist').value.split('\n');
  chrome.storage.local.set({'blacklist': blacklist});
}

window.onload = function() {
  chrome.storage.local.get('blacklist', function(result) {
    var blacklist = result.blacklist;
    document.getElementById('blacklist').value = blacklist.join('\n');
  });
  document.getElementById('update').onclick = updateBlacklist;
}
