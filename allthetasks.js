// Задание 1
const man = {
    color: 'red',
    size: 'big',
}

const boy = Object.create(man);

boy.weight = "23";


for (let key in boy){
    if (boy.hasOwnProperty(key)){
        console.log(key)
    }
}


//Задание 2
const man = {
    color: 'red',
    size: 'big',
}

const boy = Object.create(man);

boy.weight = "23";


for (let weight in boy){
    if (boy.hasOwnProperty(weight)){
        console.log(weight)
    }
}



//Задание 3
function createEmptyObject() {
    return Object.create(null);
}


//задание 4
function ElectricalDevices(power){
    this.power = power;
}


ElectricalDevices.prototype.getConnected(connected){
    if (this.connected){
        console.log('The device is already connected!')
    } else {
        console.log('You have to connect this device!')
    }
}


function Lampsss (name, color, size, light, power){
    this.name = name;
    this.color = color;
    this.size = size;
    this.light = light;
    this.power = power;
}

Lampsss.prototype = new ElectricalDevices()

function Computersss (name, color, model, power){
    this.power = power;
    this.name = name;
    this.color = color;
    this.model = model;
    this.power = power;
}

Computersss.prototype = new ElectricalDevices()

const lampD303BBB = new Lamps ('D303BBB', 'black', 'medium', 'white', 75)

console.log(lampD302BBB.getConnected(true))
console.log(lampD303BBB)






//Задание 5
class ElectricalDevice {
    constructor(power, connected){
        this.power = power;
        this.connected = true
    }
    getConnected(){
        if (this.connected){
            return 'The device is already connected!'
        } else {
            return 'You have to connect this device!'
        }
    }
}

class Lamps extends ElectricalDevice {
    constructor(name, color, size, light, power, connected){
        super(power, connected);
        this.name = name;
        this.color = color;
        this.size = size;
        this.light = light;
    }
}


class Computers extends ElectricalDevice {
    constructor(name, color, model, power, connected){
        super(power, connected);
        this.name = name;
        this.color = color;
        this.model = model;
    }
}


const lampD303B = new Lamps ('D303B', 'black', 'medium', 'white', 75)

console.log(lampD303B.getConnected())
console.log(lampD303B)