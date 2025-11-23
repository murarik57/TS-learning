function Vehicle(type, wheels, color, model) {
  var model = model;
  this.type = type;
  this.wheels = wheels;
  this.color = color;

  this.startEngine = function () {
    console.log("Engine started for " + type + model);
  };

  function getModel() {
    return model;
  }
}

const bmw = new Vehicle("Car", 4, "Black", "X5");

// console.log("👌👌👌👌👌👌👌👌👌👌👌👌", bmw.startEngine());

const tataTruck = new Vehicle("Truck", 6, "Blue", "Tata 407");

const Vehicle2 = (type, wheels, color, model) => {
  let model_local = model;
  let type_local = type;
  let wheels_local = wheels;
  let color_local = color;

  const startEngine = () => {
    console.log("Engine started for " + type);
  };

  return { type_local, wheels_local, color_local, model_local, startEngine };
};

const bike = Vehicle2("Bike", 2, "Red", "Ducati");

console.log("🔥🔥🔥🔥🔥🔥🔥🔥", bike.startEngine());
