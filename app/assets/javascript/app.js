angular.module("VientoSurApp",["ngRoute", "ngResource", "ngGravatar"]).
config(function(GravatarProvider){
  GravatarProvider.setSize(100);

});
