"use strict";function CMap(parent,parameters){this.map=null,this.marker=null,this.container=parameters.container,this.events=parameters.events||{},window.googleMapsApiScriptLoaded=window.googleMapsApiScriptLoaded||!1,CBase.call(this,parent||null),this.bind(this.events)}CMap.prototype=Object.create(CBase.prototype),CMap.prototype.constructor=CMap,CMap.prototype.LoadGoogleMapsApiScript=function(objTitle,language){loadScript("https://maps.googleapis.com/maps/api/js?sensor=false&callback="+objTitle+".GoogleMapsApiScriptCallback&language="+language)},CMap.prototype.GoogleMapsApiScriptCallback=function(){window.googleMapsApiScriptLoaded=!0,this.trigger("onGoogleMapsApiScriptCallback")},CMap.prototype.BuildMap=function(mapOptions,useMarker,showMapIfExists){var self=this;this.map?(this.map.setOptions(mapOptions),showMapIfExists&&this.Visible(!0)):this.map=new google.maps.Map(this.container,mapOptions),useMarker?(this.marker?this.marker.setPosition(mapOptions.center):this.marker=new google.maps.Marker({position:mapOptions.center,map:this.map}),this.marker.setVisible(!0)):this.marker&&this.marker.setVisible(!1),google.maps.event.addListenerOnce(this.map,"tilesloaded",function(){self.trigger("onGoogleMapReady")})},CMap.prototype.Visible=function(mode){this.container.style.visibility=Boolean(mode)?"visible":"hidden"},Events.inject(CMap);