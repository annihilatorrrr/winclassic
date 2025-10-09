window.ThemeHistory = (function() {
function ThemeHistory() {
  this.undoHistory = [];

  return this;
}

ThemeHistory.prototype.commit = function(item) {
  this.undoHistory.push(item);
}

ThemeHistory.prototype.undo = function() {
  return this.undoHistory.pop();
}

return ThemeHistory;
})();
