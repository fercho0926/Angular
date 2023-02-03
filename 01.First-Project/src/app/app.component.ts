import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  widthImg = 100;
  name = 'fer';
  age = 18;
  img= 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Metro_de_Medell%C3%ADn%2C_Colombia.jpg/1200px-Metro_de_Medell%C3%ADn%2C_Colombia.jpg';
  btnDisabled = true;
  person = {
    name:  "Milton",
    age: 34,
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjZyctF0XMLQVkhRwEpRl-8v_2KYajIQ1k1Vl-6Yw&s'

  }

  register={
    name :'',
    mail :'',
    password :''
  }

  namesArray :  string[]= ['milton','Ferney','vasquez', 'herrera'];
  newName = '';
  box={
    width :100,
    height:100,
    background: 'red'
  };
  productsArray : Product[]=[
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg'
    }
  ]

  toogleButton(){
    this.btnDisabled = !this.btnDisabled;

  }
  increaceAgeButton(){
    this.person.age += 1;
  }
  onscroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop)

  }

  changeName(event :Event){
const element = event.target as HTMLInputElement;
this.person.name  = element.value;

  }
  AddName(){
    this.namesArray.push(this.newName);
    this.newName ='';
  }

  deleteName(index :number){
    this.namesArray.splice(index,1);
    this.newName ='';
  }

  onRegister(){
    console.log(this.register)

  }



}
