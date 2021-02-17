import { ProxyState } from "../AppState.js";
import { vendorService } from "../Services/VendorService.js";

function _draw() {
    document.getElementById('userAccountView').innerText = `$${ProxyState.userAccount}`;
    document.getElementById('daddySodaPriceView').innerText = `$${ProxyState.sodaPrice}`;
    document.getElementById('fishSaucePriceView').innerText = `$${ProxyState.fishSaucePrice}`;
    document.getElementById('octopusPriceView').innerText = `$${ProxyState.octopusPrice}`;
}
export default class VendorController {

    constructor ()  {
        ProxyState.on("userAccount", _draw);
    _draw()
    
    }
    purchaseSoda() {
        vendorService.purchaseSoda()
    }

    purchaseFishSauce() {
        vendorService.purchaseFishSauce()
    }

    purchaseOctopus() {
        vendorService.purchaseOctopus()
    }

    insertMonies() {
        console.log('hello from the vendorController');
        vendorService.insertMonies();

    }
   
    
}

