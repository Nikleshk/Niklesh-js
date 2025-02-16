function makeClass(){
    class thermostat{
        constructor(temp){
            this._temp= 5/9*(temp-32);
        }
        get temperature(){
            return this._temperature;
        }
        set temperature(updatedTemperature){
            this._temperature= updatedTemperature;
        }
    }
    return thermostat;
}
const thermostat = makeClass();
const thermos = new thermostat(76);
let temp = thermos.temperature;
thermos.temperature=26;
temp = thermos._temperature;
console.log(temp);
