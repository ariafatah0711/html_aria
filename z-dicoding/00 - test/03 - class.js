/* --------------------------------------------------------------------------- */
// class
class Car {
  constructor(manufacture, color) {
    this.manufacture = manufacture;
    this._color = color;
    this.enginesActive = false;
  }

  get color() {
    return `Warna mobil: ${this._color}`;
  }

  set color(value) {
    console.log(`Warna mobil diubah dari ${this._color} menjadi ${value}`);
    this._color = value;
  }
}

const johnCar = new Car("Honda", "Red");
console.log(johnCar.color); // output -> Warna Mobil: Red

johnCar.color = "White"; // Mengubah nilai properti color menjadi white
console.log(johnCar.color); // output -> Warna Mobil: White

// kesimpulanya setiap kita mengedit value getter setter kita akan
// manjalankan block/statment get color dan set color
// dan _color pada this._color = color berfungsi untuk
// membuat property color menjadi abstrak yang harus di akses lewat get dan setter gitu

/* --------------------------------------------------------------------------- */
// class inheritance
class Vehicle {
  constructor(licensePlate, manufacture) {
    this.licensePlate = licensePlate;
    this.manufacture = manufacture;
    this.engineActive = false;
  }

  startEngines() {
    console.log(`Mesin kendaraan ${this.licensePlate} dinyalakan!`);
  }

  info() {
    console.log(`Nomor Kendaraan: ${this.licensePlate}`);
    console.log(`Manufacture: ${this.manufacture}`);
    console.log(`Mesin: ${this.engineActive ? "Active" : "Inactive"}`);
  }

  parking() {
    console.log(`Kendaraan ${this.licensePlate} parkir!`);
  }
}

class Mobil extends Vehicle {
  constructor(licensePlate, manufacture, wheels) {
    super(licensePlate, manufacture); // mencopy this yang ada di parent
    this.wheels = wheels;
  }

  droveOff() {
    console.log(`Kendaraan ${this.licensePlate} melaju!`);
  }

  openDoor() {
    console.log(`Membuka pintu!`);
  }

  // overriding method dari parent class
  info() {
    super.info(); // mencopy statement yang ada pada function info dari class parent
    console.log(`Jumlah roda: ${this.wheels}`);
  }
}
class Motorcycle extends Vehicle {
  constructor(licensePlate, manufacture, wheels) {
    super(licensePlate, manufacture);
    this.wheels = wheels;
  }
}

const aria = new Mobil("H121S", "Honda", 4);
aria.info();

// static function
class VehicleFactory {
  static repair(vehicles) {
    vehicles.forEach((vehicle) => {
      console.log(
        `kendaraan ${vehicle.licensePlate} sedang melakukan perawatan`
      );
    });
  }
}

const ariaCar = new Mobil("H121S", "Honda", 4);
const tomMotor = new Motorcycle("GF121J", "Yamaha", 2);
const dimasCar = new Mobil("TA1408K", "Tesla", 4);

console.log("");
VehicleFactory.repair([ariaCar, tomMotor, dimasCar]);

// VehicleFactory.repair(ariaCar); // jika ingin repari satu harus ubah foreach di repair menjadi tanpa forEach
// VehicleFactory.repair(tomMotor);
// VehicleFactory.repair(dimasCar);
