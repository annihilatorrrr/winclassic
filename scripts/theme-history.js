window.ThemeHistory = (function() {
function ThemeHistory() {
  this.undoHistory = [];
  this.redoHistory = [];

  return this;
}

ThemeHistory.prototype.commit = function(item) {
  this.undoHistory.push(JSON.parse(JSON.stringify(item)));
  this.redoHistory.length = 0;
}

ThemeHistory.prototype.undo = function() {
  this.redoHistory.push(this.undoHistory.pop());
  return JSON.parse(JSON.stringify(this.undoHistory[this.undoHistory.length - 1]));
}

ThemeHistory.prototype.redo = function() {
  this.undoHistory.push(this.redoHistory.pop());
  return JSON.parse(JSON.stringify(this.undoHistory[this.undoHistory.length - 1]));
}

Object.defineProperty(ThemeHistory.prototype, "undoLength", {
  enumerable: true,
  get: function() {
    return this.undoHistory.length;
  },
});

Object.defineProperty(ThemeHistory.prototype, "redoLength", {
  enumerable: true,
  get: function() {
    return this.redoHistory.length;
  },
});

return ThemeHistory;
})();
