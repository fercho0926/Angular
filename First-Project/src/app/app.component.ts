import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'fer';
  age = 18;
  img= 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Metro_de_Medell%C3%ADn%2C_Colombia.jpg/1200px-Metro_de_Medell%C3%ADn%2C_Colombia.jpg';
  btnDisabled = true;
  person = {
    name:  "Milton",
    age: 34,
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjZyctF0XMLQVkhRwEpRl-8v_2KYajIQ1k1Vl-6Yw&s'

  }

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

}
