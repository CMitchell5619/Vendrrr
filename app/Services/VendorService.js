
import { ProxyState } from "../AppState.js";

class VendorService {
    insertMonies() {
        ProxyState.userAccount += .25;
    }
    purchaseSoda() {
        if (ProxyState.userAccount >= ProxyState.sodaPrice) {
            ProxyState.sodaAmount = ProxyState.sodaAmount - 1;
            ProxyState.vendingAccount += ProxyState.sodaPrice;
            ProxyState.userAccount -=  ProxyState.sodaPrice;            
        }
        
    }

    purchaseFishSauce() {
        if (ProxyState.userAccount >= ProxyState.fishSaucePrice) {
            ProxyState.fishSauceAmount = ProxyState.fishSauceAmount - 1;
            ProxyState.vendingAccount += ProxyState.fishSaucePrice;
            ProxyState.userAccount -=  ProxyState.fishSaucePrice;
        }
    }

    purchaseOctopus() {
        if (ProxyState.userAccount >= ProxyState.octopusPrice) {
            ProxyState.octopusAmount = ProxyState.octopusAmount - 1;
            ProxyState.vendingAccount += ProxyState.octopusPrice;
            ProxyState.userAccount -=  ProxyState.octopusPrice;
        }
       
    }

}

export const vendorService = new VendorService()