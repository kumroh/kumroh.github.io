function CarDoor(options) {
    this.color = options.color || 'red';
    this.material = options.material || 'steel';
    this.autoLock = options.autoLock || false;

    console.log('Car door created.....');
}

function CarSeat(options) {
    this.color = options.color || 'brown';
    this.material = options.material || 'leather';
    this.slider = options.slider || false;

    console.log('Car seat created');
}

function CarPartFactory() {}

CarPartFactory.prototype.createPart = function(options) {
    var _partClass;

    switch (options.partType) {
        case 'door':
            _partClass = CarDoor
            break;
        case 'seat':
            _partClass = CarSeat;
            break;
        default:
            _partClass = null;
            break;

    }

    return _partClass ? new _partClass(options) : _partClass;
}

//------------create parts -------------------------///
var partFactory = new CarPartFactory();

var door = partFactory.createPart({
    partType: 'door'
});
console.log(door);

var door1 = partFactory.createPart({
    partType: 'door',
    color: 'cyan',
    material: 'aluminium'
});
console.log(door1);

var seat = partFactory.createPart({
    partType: 'seat'
});
console.log(seat);