(function(){
  var app = angular.module('store', []);

  app.controller('StoreController', function(){
    this.products = gems;
  });

  app.controller('PanelController', function(){
    this.tab = 1;

    this.selectTab = function(setTab){
      this.tab = setTab;
    };

    this.isSelected = function(checkTab){
      return this.tab === checkTab;
    };
  });

  var gems = [
    {
        name: 'Dodecahedron',
        price: 110.50,
        description: 'Some gems have hidden attributes',
        canPurchase: true,
        soldOut: false,
        images:[
          {
            full: 'nike1.jpg'
          }
        ]
    },
    {
        name: 'Pentagonal Gem',
        price: 5.95,
        description: 'Boasty purple ones',
        canPurchase: false,
        soldOut: false,
        images:[
          {
            full: 'nike2.jpg'
          }
        ]
    }
  ];
})();
// var app = angular.module('store', []);
