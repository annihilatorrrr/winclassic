window.ThemeHistory = (function() {
function ThemeHistory() {
  this.undoHistory = [];

  return this;
}

ThemeHistory.prototype.commit = function(item) {
  this.undoHistory.push(JSON.parse(JSON.stringify(item)));
}

ThemeHistory.prototype.undo = function() {
  this.undoHistory.pop();
  return JSON.parse(JSON.stringify(this.undoHistory[this.undoHistory.length - 1]));
}

Object.defineProperty(ThemeHistory.prototype, "length", {
  enumerable: true,
  get: function() {
    return this.undoHistory.length;
  },
});

return ThemeHistory;
})();
