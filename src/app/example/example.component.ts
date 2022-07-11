import { Component, OnInit } from '@angular/core';
declare const WinBox: any;

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {

  

  constructor(){
    
  }

  ngOnInit(): void {
    this.initWindow1();
    this.initWindow2();
    this.initWindow3();
    this.initWindow4();
    this.initWindow5();
    this.initWindow6();
    this.initWindow7();
  }


  initWindow1(){
    var winbox = new WinBox("Window 1", {
      right: "85%",
      bottom: "50%",
      max: true
    });
  }

  initWindow2(){
    var winbox = new WinBox("Window 2", {
      right: "70%",
      left: "15%",
      bottom: "50%",
      max: true
    });
  }

  initWindow3(){
    var winbox = new WinBox("Window 3", {
      right: "30%",
      left: "30%",
      bottom: "50%",
      max: true,
      mount: document.getElementById("window1")
    });
  }

  initWindow4(){
    var winbox = new WinBox("Window 4", {
      top: "50%",
      right: "30%",
      max: true,
      url: "https://nextapps-de.github.io/winbox/"
    });
  }

  initWindow5(){
    var winbox = new WinBox("Window 5", {
      left: "70%",
      bottom: "60%",
      max: true
    });
  }

  initWindow6(){
    var winbox = new WinBox("Window 6", {
      left: "70%",
      top: "40%",
      bottom: "20%",
      max: true
    });
  }

  initWindow7(){
    var winbox = new WinBox("Window 7", {
      left: "70%",
      top: "80%",
      max: true
    });
  }

}
