
/**
* Use this file to define custom functions and blocks.
* Read more at https://makecode.microbit.org/blocks/custom
*/

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}

/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon="R"
namespace RangeValue {
    /**
     * Find the range of an analog item
     * @param n describe parameter here, eg: 
     * @param s describe parameter here, eg: 
     * @param e describe parameter here
     */
    //% block
    export function Range(n: AnalogPin ): void {
 let value = pins.analogReadPin(AnalogPin.P0)
 while(true){
   basic.showNumber(value)
        value = pins.analogReadPin(AnalogPin.P0)
    }
    }
    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% block
    export function fib(value: number): number {
        return value <= 1 ? value : fib(value -1) + fib(value - 2);
    }
}
