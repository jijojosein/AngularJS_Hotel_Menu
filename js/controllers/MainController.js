app.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();

  $scope.appetizers = [
    {
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95
    },
    {
      name: 'Mozzarella Sticks',
      description: 'Served with marinara sauce.',
      price: 3.95
    },
    {
    name: 'Brushetta',
    description: 'Grilled bread garlic, tomatoes, olive oil.',
    price: 4.95
    }
  ];
 $scope.mains = [
   {
   	name: 'Main 1',
    description:'Main Description 1',
    price:2.36
   },
   {
   	name: 'Main 2',
    description:'Main Description 2',
    price:1.54
   },
   {
   	name:'Main 3',
    description:'Main Description 3',
    price:1.45
   }
 
 ];
  
 $scope.extras = [
   {
   	name: 'Extras 1',
    description:'Extra Description 1',
    price:4.36
   },
   {
   	name: 'Extras 2',
    description:'Extra Description 2',
    price:2.54
   },
   {
   	name:'Extras 3',
    description:'Extra Description 3',
    price:1.41
   }
 
 ];