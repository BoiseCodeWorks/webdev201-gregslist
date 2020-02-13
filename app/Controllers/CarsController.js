import CarsService from "../Services/CarsService.js";
import store from "../store.js";

//Private
function _draw() {
  let cars = store.State.cars;
  let template = "";
  cars.forEach(car => (template += car.Template));
  document.getElementById("cars").innerHTML = template;
  console.log(cars);
}

//Public
export default class CarsController {
  constructor() {
    store.subscribe("cars", _draw);
  }

  async getCars() {
    try {
      await CarsService.getCars();
    } catch (error) {
      console.log(error);
    }
  }

  async createCar() {
    try {
      event.preventDefault();
      let form = event.target;
      let carData = {
        make: form.Make.value,
        model: form.Model.value,
        year: form.Year.value,
        price: form.Price.value,
        description: form.Description.value,
        imgUrl: form.ImageURL.value
      };
      await CarsService.createCar(carData);
    } catch (error) {
      console.log(error);
    }
  }
  async deleteCar(id) {
    try {
      await CarsService.deleteCar(id);
    } catch (error) {
      console.log(error);
    }
  }
}
