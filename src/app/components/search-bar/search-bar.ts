import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule, CurrencyPipe, NgClass, NgStyle } from '@angular/common';
import { Auto } from '../../interfaces/auto';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, CurrencyPipe, NgClass, NgStyle],
  templateUrl: './search-bar.html',
  styleUrls: ['./search-bar.css'],
})
export class SearchBar {
  @Input() autos: Auto[] = [];
  @Output() onSelectAuto = new EventEmitter<Auto>();

  selectedAutos: Auto[] = [];

  selectAutoList(brand: string) {
    this.selectedAutos = this.autos.filter((x) =>
      x.brand.toLowerCase().startsWith(brand.toLowerCase())
    );
  }

  showDetails(auto: Auto) {
    this.onSelectAuto.emit(auto);
  }

  autoTitleStyle(auto: Auto) {
    return { color: auto.power >= 10 ? '#800000' : 'black' };
  }
}
