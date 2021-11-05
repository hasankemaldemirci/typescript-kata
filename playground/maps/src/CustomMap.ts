// Instructions to every other class
// on how they can be an argument to 'addMarker'
export interface Target {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
  color: string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker(target: Target): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: target.location.lat,
        lng: target.location.lng,
      },
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: target.markerContent(),
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}
