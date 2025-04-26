export interface RectCalculatorValues {
	top: number
	right: number
	bottom: number
	left: number
	width: number
	height: number
	centerX: number
	centerY: number
}

export interface RectCalculatorOptions {
	dimensions: 'fluid' | 'fixed'
}

export default class RectCalculator {
	values: RectCalculatorValues
	options: RectCalculatorOptions

	constructor(init: DOMRect, options?: RectCalculatorOptions) {
		this.options = options ?? { dimensions: 'fixed' }
		this.values = {
			top: init.top,
			right: init.right,
			bottom: init.bottom,
			left: init.left,
			width: init.width,
			height: init.height,
			centerX: init.left + init.width / 2,
			centerY: init.top + init.height / 2
		}
	}

	get rect() { return this.values }
	get top() { return this.values.top }
	get right() { return this.values.right }
	get bottom() { return this.values.bottom }
	get left() { return this.values.left }
	get width() { return this.values.width }
	get height() { return this.values.height }
	get centerX() { return this.values.centerX }
	get centerY() { return this.values.centerY }

	private get fluid(): boolean { return this.options.dimensions === 'fluid'}
	private get fixed(): boolean { return this.options.dimensions === 'fixed'}

	set top(val: number) {
		this.values.top = val
		if (this.fluid) {
			const height: number = this.values.bottom - val
			this.values.height = height
			this.centerY = val + height / 2
		} else if (this.fixed) {
			this.values.centerY = val + this.values.height / 2
			this.values.bottom = val + this.values.height
		}
	}

	set right(val: number) {
		this.values.right = val
		if (this.fluid) {
			const width: number = val - this.values.left
			this.values.width = width
			this.centerX = val - width / 2
		} else if (this.fixed) {
			this.values.left = val - this.values.width
			this.values.centerX = val - this.values.width / 2
		}
	}

	set bottom(val: number) {
		this.values.bottom = val
		if (this.fluid) {
			const height = val - this.values.top
			this.values.height = height
			this.values.centerY = val - height / 2
		} else if (this.fixed) {
			this.values.top = val - this.values.height
			this.values.centerY = val - this.values.height / 2
		}
	}

	set left(val: number) {
		this.values.left = val
		if (this.fluid) {
			const width = this.values.right - val
			this.values.width = width
			this.centerX = val + width / 2
		} else if (this.fixed) {
			this.values.centerX = val + this.values.width / 2
			this.values.right = val + this.values.width
		}
	}

	set centerX(val: number) {
		this.values.centerX = val
		this.values.left = val - this.values.width / 2
		this.values.right = val + this.values.width / 2
	}

	set centerY(val: number) {
		this.values.top = val - this.values.height / 2
		this.values.centerY = val
		this.values.bottom = val + this.values.height / 2
	}
}