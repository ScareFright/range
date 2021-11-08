

/**
 * Custom blocks
 */
//% weight=100color=#bc6e0ficon="R"
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
}
