import { Auto } from './interfaces/auto'; // ✅ mieux (centralisé)
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadBar } from './components/head-bar/head-bar';
import { SearchBar } from './components/search-bar/search-bar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeadBar, SearchBar],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  protected readonly title = signal('showroom-auto');
  autoList: Auto[] = [
    {
      id: 1,
      brand: 'Mercedes Benz',
      model: 'C-CLASS',
      price: 230,
      power: 9,
      photo:
        'https://galerie.automobile.tn/min/2021/11/mercedes-benz-classe-c-180-eq-boost-9g-tronic-amg-exterieur-60815.jpg',
      availability: 4,
      description: 'Berline premium alliant confort, élégance et technologie Mercedes-Benz.',
    },
    {
      id: 2,
      brand: 'Mercedes Benz',
      model: 'GLA',
      price: 203,
      power: 8,
      photo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTuNbR_nLODvT8a93OyqAawTe-vQJAdR3kjA&s',
      availability: 4,
      description: 'SUV compact moderne, idéal pour la ville et les trajets quotidiens.',
    },
    {
      id: 3,
      brand: 'Mercedes Benz',
      model: 'GLE',
      price: 450,
      power: 17,
      photo:
        'https://www.auto-plus.tn/assets/modules/newcars/mercedes-benz/gle/couverture/mercedes-benz_gle.jpg',
      availability: 4,
      description: 'SUV haut de gamme offrant puissance, espace et technologies avancées.',
    },
    {
      id: 4,
      brand: 'Jaguar',
      model: 'F-Pace',
      price: 399,
      power: 16,
      photo:
        'https://www.auto-plus.tn/assets/modules/newcars/jaguar/f-pace/couverture/jaguar-f-pace-1.jpg',
      availability: 4,
      description: 'SUV sportif au design élégant avec des performances dynamiques.',
    },
    {
      id: 5,
      brand: 'Jaguar',
      model: 'E-PACE',
      price: 350,
      power: 12,
      photo:
        'https://www.auto-plus.tn/assets/modules/newcars/jaguar/e-pace/couverture/jaguar_e-pace.jpg',
      availability: 4,
      description: 'SUV compact premium combinant style, agilité et confort.',
    },
    {
      id: 6,
      brand: 'Audi',
      model: 'Q3 CROSSBACK',
      price: 230,
      power: 9,
      photo: 'https://www.sayarti.tn/wp-content/uploads/2019/03/audi-q3-prix-tunisie.png',
      availability: 3,
      description: 'SUV coupé au design sportif avec des finitions haut de gamme.',
    },
    {
      id: 7,
      brand: 'Audi',
      model: 'Q5',
      price: 350,
      power: 16,
      photo: 'https://www.sayarti.tn/wp-content/uploads/2023/01/audi-q5-sportback.jpg',
      availability: 3,
      description: 'SUV polyvalent offrant performance, sécurité et confort de conduite.',
    },
    {
      id: 8,
      brand: 'Audi',
      model: 'A3 BACK',
      price: 145,
      power: 8,
      photo: 'https://galerie.automobile.tn/max/2020/03/nouvelle-audi-a3-sportback-47886.webp',
      availability: 3,
      description: 'Compacte premium idéale pour la ville avec un excellent rapport qualité-prix.',
    },
    {
      id: 9,
      brand: 'BMW',
      model: 'X2 SDRIVE PACK',
      price: 245,
      power: 8,
      photo: 'https://catalogue.automobile.tn/big/2025/09/47197.jpg?t=1765553877',
      availability: 3,
      description: 'SUV compact au look sportif et à la conduite dynamique.',
    },
    {
      id: 10,
      brand: 'BMW',
      model: 'IX',
      price: 432,
      power: 11,
      photo: 'https://catalogue.automobile.tn/big/2024/05/47132.jpg?t=1758555068',
      availability: 3,
      description: 'SUV électrique futuriste combinant innovation et luxe.',
    },
    {
      id: 11,
      brand: 'BMW',
      model: 'X3 HYBRIDE',
      price: 355,
      power: 11,
      photo:
        'https://www.auto-plus.tn/assets/modules/newcars/bmw/x3-hybride/couverture/bmw_x3-hybride.jpg',
      availability: 3,
      description: 'SUV hybride performant offrant économie de carburant et puissance.',
    },
    {
      id: 12,
      brand: 'Land Rover',
      model: 'Range Rover Evoque',
      price: 340,
      power: 9,
      photo:
        'https://www.auto-plus.tn/assets/modules/newcars/land_rover/range-rover-evoque/couverture/land_rover-range-rover-evoque.jpg',
      availability: 4,
      description: 'SUV compact luxueux avec un design raffiné et des capacités tout-terrain.',
    },
    {
      id: 13,
      brand: 'Land Rover',
      model: 'Defender 90',
      price: 398,
      power: 21,
      photo: 'https://catalogue.automobile.tn/big/2022/10/46822.jpg?t=1',
      availability: 4,
      description: 'Véhicule tout-terrain robuste conçu pour les conditions extrêmes.',
    },
    {
      id: 14,
      brand: 'Land Rover',
      model: 'Range Rover',
      price: 702,
      power: 24,
      photo: 'https://catalogue.automobile.tn/big/2024/01/47086.jpg?t=1761214058',
      availability: 4,
      description: 'SUV de luxe ultime offrant confort, puissance et prestige.',
    },
    {
      id: 15,
      brand: 'Alfa Romeo',
      model: 'Stelvio',
      price: 268,
      power: 18,
      photo:
        'https://cdn-xy.drivek.com/eyJidWNrZXQiOiJkYXRhay1jZG4teHkiLCJrZXkiOiJjb25maWd1cmF0b3ItaW1ncy9jYXJzL2ZyL29yaWdpbmFsL0FMRkEtUk9NRU8vU1RFTFZJTy80MTU1N19TVVYtNS1ET09SUy9hbGZhLXJvbWVvLWdpdWxpYS1mcm9udC12aWV3LmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MTAyNCwiaGVpZ2h0IjpudWxsLCJmaXQiOiJjb3ZlciJ9fX0=',
      availability: 11,
      description: 'SUV sportif italien avec un caractère dynamique et élégant.',
    },
    {
      id: 16,
      brand: 'Alfa Romeo',
      model: 'Giulia',
      price: 198,
      power: 18,
      photo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmpJj9DSF-xNX3_EBzSB2AzgceuJDmAJslGE-8SXxtcdrtcKHDBzVjEA5nQny08DAbOjw&usqp=CAU',
      availability: 11,
      description:
        'Berline sportive offrant des performances exceptionnelles et un design italien.',
    },
  ];

  selectedAuto?: Auto;

  openDetails(auto: Auto) {
    this.selectedAuto = auto;
  }

  closeDetails() {
    this.selectedAuto = undefined;
  }
}
