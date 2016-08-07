requirejs.config({
  "baseUrl": "./scripts/",
  "paths": {
    "jquery": "//ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min"
  }
});

requirejs([
  'touring/touring.controller'
],
function Main(TouringController) {
  var touring = new TouringController();
});
