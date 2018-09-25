(function () {
    'use strict'

    angular.module('ShoppingListCheckOff', [])
           .controller('ToBuyController', ToBuyController)
           .controller('AlreadyBoughtController', AlreadyBoughtController)
           .service('ShoppingListCheckOffService', ShoppingListCheckOffService);
    
           ToBuyController.$inject = ['ShoppingListCheckOffService'];
           function ToBuyController (ShoppingListCheckOffService) {
               var toBuy = this;

               toBuy.items = ShoppingListCheckOffService.getToBuyItems();

               toBuy.buyItem = function (itemIndex) {
                ShoppingListCheckOffService.buyItem(itemIndex);
               };
            
           };
           AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
           function AlreadyBoughtController (ShoppingListCheckOffService){
               var toEnjoy = this;

               toEnjoy.items = ShoppingListCheckOffService.getToEnjoyItems();


           };

           function ShoppingListCheckOffService() {
               var service = this;
               var toBuyItems = [
                   {
                       name: "Sodas", 
                       quantity: 3
                    },
                   {
                       name: "Pizzas", 
                       quantity: 3
                    },
                   {
                       name: "Smart TV", 
                       quantity: 1
                    },
                    {
                        name: "Comfortable Couch", 
                        quantity: 1
                    },
                   {
                       name: "Game of Thrones Subscription", 
                       quantity: 1
                    }
               ];
               var ToEnjoyItems = [];

               service.buyItem = function (itemIndex) {
                   var item = toBuyItems[itemIndex];

                   ToEnjoyItems.push(item);
                   toBuyItems.splice(itemIndex,1);
                };
                service.getToBuyItems = function() {
                    return toBuyItems;
                };
                service.getToEnjoyItems = function () {
                    return ToEnjoyItems;
                };
           }

           

})();