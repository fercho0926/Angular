import { Component, OnInit, Input, Output,EventEmitter, OnChanges, SimpleChanges, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit ,OnChanges, AfterViewInit, OnDestroy {

@Input() img:string =''
@Output ()loaded = new EventEmitter<string>();
imageDefault = './assets/images/default.png';
counter =0;
counterFn :number | undefined

  constructor() {
    //before render
    //no correr async --once time

    console.log('constructor', 'imgValue => ', this.img)
   }



  ngOnChanges(changes: SimpleChanges): void {
      //before -- and DURING render
      //check the changes in inputs- continuslly
      console.log('ngOnChanges', 'imgValue => ', this.img)


  }

  ngOnInit() {
      //before render
      // YES  ASYNC-- run once on time
      console.log('ngOnInit', 'imgValue => ', this.img)

      this.counterFn = window.setInterval(() =>{
        this.counter+=1;
        console.log('running counter');
      },1000);

  }

  ngAfterViewInit(){
        //After render
        // handler children
        console.log('ngAfterViewInit')

  }
  ngOnDestroy() {
    console.log('ngOnDestroy')
    window.clearInterval(this.counterFn);

  }


  imgError(){
    this.img = this.imageDefault;

  }

  imgLoaded(){
console.log('Son´s LOG')
this.loaded.emit(this.img);

  }

}
