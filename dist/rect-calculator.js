export default class RectCalculator {
    constructor(init, options) {
        this.options = options !== null && options !== void 0 ? options : { dimensions: 'fixed' };
        this.values = {
            top: init.top,
            right: init.right,
            bottom: init.bottom,
            left: init.left,
            width: init.width,
            height: init.height,
            centerX: init.left + init.width / 2,
            centerY: init.top + init.height / 2
        };
    }
    get rect() { return this.values; }
    get top() { return this.values.top; }
    get right() { return this.values.right; }
    get bottom() { return this.values.bottom; }
    get left() { return this.values.left; }
    get width() { return this.values.width; }
    get height() { return this.values.height; }
    get centerX() { return this.values.centerX; }
    get centerY() { return this.values.centerY; }
    get fluid() { return this.options.dimensions === 'fluid'; }
    get fixed() { return this.options.dimensions === 'fixed'; }
    set top(val) {
        this.values.top = val;
        if (this.fluid) {
            const height = this.values.bottom - val;
            this.values.height = height;
            this.centerY = val + height / 2;
        }
        else if (this.fixed) {
            this.values.centerY = val + this.values.height / 2;
            this.values.bottom = val + this.values.height;
        }
    }
    set right(val) {
        this.values.right = val;
        if (this.fluid) {
            const width = val - this.values.left;
            this.values.width = width;
            this.centerX = val - width / 2;
        }
        else if (this.fixed) {
            this.values.left = val - this.values.width;
            this.values.centerX = val - this.values.width / 2;
        }
    }
    set bottom(val) {
        this.values.bottom = val;
        if (this.fluid) {
            const height = val - this.values.top;
            this.values.height = height;
            this.values.centerY = val - height / 2;
        }
        else if (this.fixed) {
            this.values.top = val - this.values.height;
            this.values.centerY = val - this.values.height / 2;
        }
    }
    set left(val) {
        this.values.left = val;
        if (this.fluid) {
            const width = this.values.right - val;
            this.values.width = width;
            this.centerX = val + width / 2;
        }
        else if (this.fixed) {
            this.values.centerX = val + this.values.width / 2;
            this.values.right = val + this.values.width;
        }
    }
    set centerX(val) {
        this.values.centerX = val;
        this.values.left = val - this.values.width / 2;
        this.values.right = val + this.values.width / 2;
    }
    set centerY(val) {
        this.values.top = val - this.values.height / 2;
        this.values.centerY = val;
        this.values.bottom = val + this.values.height / 2;
    }
}
