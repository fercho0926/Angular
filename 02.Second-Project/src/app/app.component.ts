import { Component } from '@angular/core';
import { product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  imgParent = 'https://www.vectorlogo.zone/logos/angular/angular-ar21.png';
  showImage = true;



  product: product = {
    id: '1',
    name: 'product 1',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1XRT1LaOjoWHT6-UE7-ECExUnq5rChTkp0A&usqp=CAU',
    price: 100,
  };

  onLoaded(img: string) {
    console.log('Father´s LOG', img);
  }

  toggleImg(){
    this.showImage = !this.showImage;
  }

}
