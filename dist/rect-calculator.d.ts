export interface RectCalculatorValues {
    top: number;
    right: number;
    bottom: number;
    left: number;
    width: number;
    height: number;
    centerX: number;
    centerY: number;
}
export interface RectCalculatorOptions {
    dimensions: 'fluid' | 'fixed';
}
export default class RectCalculator {
    values: RectCalculatorValues;
    options: RectCalculatorOptions;
    constructor(init: DOMRect, options?: RectCalculatorOptions);
    get rect(): RectCalculatorValues;
    get top(): number;
    get right(): number;
    get bottom(): number;
    get left(): number;
    get width(): number;
    get height(): number;
    get centerX(): number;
    get centerY(): number;
    private get fluid();
    private get fixed();
    set top(val: number);
    set right(val: number);
    set bottom(val: number);
    set left(val: number);
    set centerX(val: number);
    set centerY(val: number);
}
