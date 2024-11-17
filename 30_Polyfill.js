//1. Khái niệm Polyfill trong JavaScript
//2. Tại sao cần Polyfill?
//3. Cách hoạt động của Polyfill
if (!Object.prototype.newMethod) {
    Object.prototype.newMethod = function() {
        // Code để mô phỏng tính năng mới
    };
}
//4. Các ví dụ về Polyfill và giải thích chi tiết
//Ví dụ 1: Array.prototype.includes()
if (!Array.prototype.includes) {
    Array.prototype.includes = function(value) {
        return this.indexOf(value) !== -1;
    };
}
//Ví dụ 2: String.prototype.startsWith()
if (!String.prototype.startsWith) {
    String.prototype.startsWith = function(search, pos) {
        pos = pos || 0;
        return this.substring(pos, pos + search.length) === search;
    };
}
//5. Tự viết Polyfill cho các hàm JavaScript phổ biến và giải thích chi tiết
//Polyfill cho Object.entries()
if (!Object.entries) {
    Object.entries = function(obj) {
        let ownProps = Object.keys(obj),
            result = [];
        for (let i = 0; i < ownProps.length; i++) {
            result.push([ownProps[i], obj[ownProps[i]]]);
        }
        return result;
    };
}
//Polyfill cho Array.prototype.find()
if (!Array.prototype.find) {
    Array.prototype.find = function(callback) {
        for (let i = 0; i < this.length; i++) {
            if (callback(this[i], i, this)) return this[i];
        }
        return undefined;
    };
}
