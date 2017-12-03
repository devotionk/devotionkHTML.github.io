function Tile(position, value) {
  this.x                = position.x;
  this.y                = position.y;
  this.value            = value || 2;

  this.previousPosition = null;
  this.mergedFrom       = null; // Tracks tiles that merged together
}

Tile.prototype.savePosition = function () {
  this.previousPosition = { x: this.x, y: this.y };
};

Tile.prototype.updatePosition = function (position) {
  this.x = position.x;
  this.y = position.y;
};

Tile.prototype.serialize = function () {
  return {
    position: {
      x: this.x,
      y: this.y
    },
    value: this.value
  };
};
function getNumberText(number) {  
    switch (number) {  
        case 2:  
            return "LOL";  
            break;  
        case 4:  
            return "人机";  
            break;  
        case 8:  
            return "匹配";  
            break;  
        case 16:  
            return "排位";  
            break;  
        case 32:  
            return "青铜";  
            break;  
        case 64:  
            return "白银";  
            break;  
        case 128:  
            return "黄金";  
            break;  
        case 256:  
            return "铂金";  
            break;  
        case 512:  
            return "钻石";  
            break;  
        case 1024:  
            return "大师";  
            break;  
        case 2048:  
            return "王者";  
            break;  
        case 4096:  
            return "大神";  
            break;  
        case 8192:  
            return "腾讯";  
            break;  
    }  
    return "black";  
}  
