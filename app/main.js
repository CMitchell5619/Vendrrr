import ValuesController from "./Controllers/ValuesController.js";
import VendorController from "./Controllers/VendorController.js"

class App {
  // valuesController = new ValuesController();
  vendorController = new VendorController();
}

window["app"] = new App();
