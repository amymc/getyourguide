/**
 * TouringModel
 */
define([
  'jquery'
],
function TouringModel($) {
  function Mdl() {
  }

  Mdl.prototype.get = function get() {
    console.log('mdl get!');
    var key = '2Gr0p7z96D';

    return $.ajax({
      type: 'GET',
      dataType: 'json',
      url: 'https://www.getyourguide.com/touring.json?key=' + key
    });
  };

  return Mdl;
});
