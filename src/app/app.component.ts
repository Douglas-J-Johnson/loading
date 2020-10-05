import { Component } from '@angular/core';

@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'loading';

  public vehicles = [
    {
      image: 'https://hondablogitalia.files.wordpress.com/2016/01/2017-honda-ridgeline-006.jpg',
      plate: 'XXX XXX',
      selected: true
    },
    {
      image: 'https://car-images.bauersecure.com/pagefiles/67808/1040x585/hr-001.jpg',
      plate: 'YYY YYY',
      selected: false
    },
  ];

  public toggleVehicleSelection(index): void {
    this.vehicles[index].selected = !this.vehicles[index].selected;
  }
}
