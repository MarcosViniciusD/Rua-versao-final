function encontrarEscritorioMaisProximo() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var localizacaoUsuario = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        var escritorio1 = { lat: 12.345, lng: -67.890 };
        var escritorio2 = { lat: 23.456, lng: -45.678 };


        var distancia1 = google.maps.geometry.spherical.computeDistanceBetween(
          new google.maps.LatLng(localizacaoUsuario),
          new google.maps.LatLng(escritorio1)
        );

        var distancia2 = google.maps.geometry.spherical.computeDistanceBetween(
          new google.maps.LatLng(localizacaoUsuario),
          new google.maps.LatLng(escritorio2)
        );

        
        var escritorioMaisProximo = (distancia1 < distancia2) ? escritorio1 : escritorio2;

        
        console.log("O escritório mais próximo está em:", escritorioMaisProximo);
        alert("O escritório mais próximo está em:\nLat: " + escritorioMaisProximo.lat + "\nLng: " + escritorioMaisProximo.lng);
      });
    } else {
      alert("Geolocalização não é suportada pelo seu navegador.");
    }
  }

