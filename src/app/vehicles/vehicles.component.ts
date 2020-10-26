import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VehiclesComponent {
  @Input() vehicles: [];
  @Input() selectedVehicles: [];
  @Input() selectedVehiclesCount: number;
  @Input() userID: number;
  @Input() idAttribute: number;
  @Output() toggleVehicleSelection = new EventEmitter();

  public toggleVehicle(index): void {
    this.toggleVehicleSelection.emit(index);
  }
}
