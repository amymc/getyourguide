/**
 * Touting Controller
 */
define([
  'jquery',
  'touring/touring.model'
],
function TouringController($, TouringModel) {
  function Ctrl() {
    console.log('this', this);
    this.model = new TouringModel();
    this.getTouringData();
  }

  Ctrl.prototype.getTouringData = function getTouringData() {
    this.model.get()
      .done(function cb(data) {
        console.log('data', data);
        this.data = data;
        this.renderMap();
        this.renderMarker();
        this.renderInfoBubble();
      }.bind(this));
  };

  Ctrl.prototype.renderInfoBubble = function renderInfoBubble() {
    infoBubble = new InfoBubble({
     content: '<div class="touring-infobubble"><img class="touring-infobubble__image" src=' + this.data.activityPictureUrl + '><h1 class="touring-infobubble__title">' + this.data.customerFirstName + ' is enjoying ' + this.data.activityTitle + '</h1></div>',
      shadowStyle: 1,
      padding: 10,
      hideCloseButton: true,
    });

    infoBubble.open(this.map, this.marker);
    setTimeout(this.getTouringData.bind(this), 8000);
  };

  Ctrl.prototype.renderMap = function renderMap() {
    console.log('renderMap', this.data);
    this.map = new google.maps.Map(document.getElementById('js-touring-map'), {
      center: {lat: this.data.activityCoordinateLatitude, lng: this.data.activityCoordinateLongitude},
      zoom: 10
    });
  };

  Ctrl.prototype.renderMarker = function renderMarker() {
    var icon = {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/GetYourGuide_Logo.png/80px-GetYourGuide_Logo.png",
      scaledSize: new google.maps.Size(50, 50)
    }

    this.marker = new google.maps.Marker({
      map:this.map,
      position: new google.maps.LatLng(this.data.activityCoordinateLatitude, this.data.activityCoordinateLongitude),
      icon: icon
    });
  };

  return Ctrl;
});