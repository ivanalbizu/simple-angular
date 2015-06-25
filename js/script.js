var app = angular.module('myapp', []);
app.controller('ListaCtrl', function($scope){

  $scope.usuarios =
    [
      {
        "id": 1,
        "nombre": "admin",
        "apellidos": "admin",
        "direccion": "Sevilla",
        "telefono": "600100200",
        "email": "admin@gmail.com",
        "pass": "1234",
        "isAdmin": 1
      },
      {
        "id": 2,
        "nombre": "Iván",
        "apellidos": "Albizu",
        "direccion": "Villanueva del Ariscal",
        "telefono": "954555555",
        "email": "albizu@gmail.com",
        "pass": "1234",
        "isAdmin": 0
      },
      {
        "id": 3,
        "nombre": "Francisco",
        "apellidos": "Barrera",
        "direccion": "Aznalcóllar",
        "telefono": "600000001",
        "email": "barrera@gmail.com",
        "pass": "1234",
        "isAdmin": 0
      },
      {
        "id": 6,
        "nombre": "Rosalía",
        "apellidos": "De Castro",
        "direccion": "Mairena del Aljarafe",
        "telefono": "600100900",
        "email": "decastro@gmail.com",
        "pass": "1234",
        "isAdmin": 0
      },
      {
        "id": 7,
        "nombre": "José",
        "apellidos": "Navarro",
        "direccion": "Sevilla",
        "telefono": "955555555",
        "email": "navarro@gmail.com",
        "pass": "1234",
        "isAdmin": 0
      },
      {
        "id": 9,
        "nombre": "Joaquín",
        "apellidos": "Rodríguez",
        "direccion": "Aznalcóllar",
        "telefono": "633355522",
        "email": "rodriguez@gmail.com",
        "pass": "1234",
        "isAdmin": 0
      },
      {
        "id": 17,
        "nombre": "Miguel",
        "apellidos": "Campos",
        "direccion": "Triana",
        "telefono": "600000002",
        "email": "campos@gmail.com",
        "pass": "1234",
        "isAdmin": 0
      },
      {
        "id": 18,
        "nombre": "Abeja",
        "apellidos": "Maya",
        "direccion": "Calle Colmena",
        "telefono": "600000031",
        "email": "maya@gmail.com",
        "pass": "1234",
        "isAdmin": 0
      },
      {
        "id": 19,
        "nombre": "Mente",
        "apellidos": "Colmena",
        "direccion": "Calle Melero",
        "telefono": "633333333",
        "email": "mentecolmenta@gmail.com",
        "pass": "1234",
        "isAdmin": 0
      }
    ];

  $scope.add = function() {
    var nuevo = {
      "id":$scope.ModelId,
      "nombre": $scope.ModelNombre,
      "apellidos": $scope.ModelApellidos,
      "direccion": $scope.ModelDireccion,
      "telefono": $scope.ModelTelefono,
      "email": $scope.ModelEmail,
      "pass": $scope.ModelPass,
      "isAdmin": $scope.ModelIsAdmin
    };

    $scope.usuarios.push(nuevo);

    $scope.ModelId='';
    $scope.ModelNombre='';
    $scope.ModelApellidos='';
    $scope.ModelDireccion='';
    $scope.ModelTelefono='';
    $scope.ModelEmail='';
    $scope.ModelPass='';
    $scope.ModelIsAdmin='';
  };

  $scope.delete = function($index) {
    $scope.usuarios.splice( $scope.usuarios.indexOf($index), 1 );
  };

  $scope.stateEdit = function (user) {
      user.editing = true;
  };

  $scope.saveEdit = function (user) {
      user.editing = false;
  };

});
