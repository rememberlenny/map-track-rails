var firebaseAppLocationInput = module.exports = function(){};

firebaseAppLocationInput.prototype.initialize = function(){
  this.setupFirebase();
  this.events();
}
firebaseAppLocationInput.prototype.setupFirebase = function(){
  if(location.search === "?test=true"){ console.log('Firebase setupFirebase initailized'); }
  this.myDataRef = new Firebase('https://glowing-fire-4514.firebaseio.com/');
}
firebaseAppLocationInput.prototype.events = function(){
  if(location.search === "?test=true"){ console.log('Firebase events initialized'); }
  this.submitToFirebaseEvent();
}
firebaseAppLocationInput.prototype.submitToFirebaseEvent = function(){
  if(location.search === "?test=true"){ console.log('Firebase submitToFirebase initialized'); }
  var self = this;
  $('#latitudeInput').keypress(function (e) {
    if (e.keyCode == 13) {
      var name  = $('#nameInput').val();
      var lng   = $('#longitudeInput').val();
      var lat   = $('#latitudeInput').val();
      self.submitToFirebase(name, lng, lat)
      $('#nameInput, #longitudeInput, #latitudeInput').val('');
    }
  });
}
firebaseAppLocationInput.prototype.submitToFirebase = function(name, lng, lat){
  this.myDataRef.push({name: name, longitude: lng, latitude: lat});
}
