import { Component, OnInit } from '@angular/core';
declare const WinBox: any;

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {

  mainWindows: any[] = [];
  isWindowShown: boolean[] = [];
  sidepanel: any;
  minWindowX: number = 0;
  minWindowY: number = 0;
  isMainWindowMax: boolean = false;


  ngOnInit(): void {
    this.mainWindows.push(null);
    this.initsidepanel();
    this.initMainWindows();
  }

  initMainWindows(){
    this.initWindow("Window 1", "0%", "85%", "50%", "0%", "window1");
    this.initWindow("Window 2", "0%", "70%", "50%", "15%", "window2");
    this.initWindow("Window 3", "0%", "30%", "50%", "30%", "window3");
    this.initWindow("Window 4", "50%", "30%", "0%", "0%", "window4");
    this.initWindow("Window 5", "0%", "0%", "60%", "70%", "window5");
    this.initWindow("Window 6", "40%", "0%", "20%", "70%", "window6");
    this.initWindow("Window 7", "80%", "0%", "0%", "70%", "window7");
  }
  
  initWindow(title: string, top: string, right: string, bottom: string, left: string, mount: string){
    let winbox = new WinBox(title, {
      root: document.getElementById("content"),
      mount: document.getElementById(mount),
      top: top,
      right: right,
      bottom: bottom,
      left: left,
      max: true,
      class: [
        "no-close no-max no-min no-full"
      ]
    });
    this.mainWindows.push(winbox);
    this.isWindowShown.push(true);
  }

  initsidepanel(){
    this.sidepanel = new WinBox("Side", {
      root: document.getElementById("content"),
      mount: document.getElementById("sidepanel"),
      max: true,
      left: "97%",
      class: [
        "no-header"
      ]
    });
    this.sidepanel.hide();
    this.isWindowShown.push(false);
  }

  resize(window: number){
    this.isMainWindowMax ? this.resizeMaxWindow(window) : this.resizeMinWindow(window);
    this.isMainWindowMax = !this.isMainWindowMax;
  }

  resizeMaxWindow(window: number){
    this.checkIfSidepanelShown(window);
    this.mainWindows[window].move(this.minWindowX, this.minWindowY);
    this.mainWindows[window].body.parentNode.classList.toggle("modal");
  }

  resizeMinWindow(window: number){
    this.minWindowX = this.mainWindows[window].x;
    this.minWindowY = this.mainWindows[window].y;
    this.mainWindows[window].resize("130%","130%");
    this.mainWindows[window].move((document.body.clientWidth - this.mainWindows[window].width)/2, (document.body.clientHeight - this.mainWindows[window].height)/2);
    this.mainWindows[window].body.parentNode.classList.toggle("modal");
  }

  checkIfSidepanelShown(window: number){
    if(this.isWindowShown[0] && (window === 5 || window === 6 || window === 7)){
      this.mainWindows[window].resize("90%","100%");
    }else{
      this.mainWindows[window].resize("100%","100%");
    }
  }

  hide(window: number){
    this.mainWindows[window].hide();
    this.isWindowShown[window] = false;
    this.mainWindows[5].resize("90%","100%");
    this.mainWindows[6].resize("90%","100%");
    this.mainWindows[7].resize("90%","100%");
    this.sidepanel.show();
    this.isWindowShown[0] = true;

    if(window === 2){
      this.mainWindows[1].resize("200%","100%");
    }
    if(window === 2 && !this.isWindowShown[3]){
      this.mainWindows[1].resize("466%","100%");
    }
    if(window === 3 && !this.isWindowShown[2]){
      this.mainWindows[1].resize("466%","100%");
    }
    
  }

  show(window: number){
    this.mainWindows[window].show();
    this.isWindowShown[window] = true;
    if(window === 2){
      this.mainWindows[1].resize("100%","100%");
    }
    if(window === 3 && !this.isWindowShown[2]){
      this.mainWindows[1].resize("200%","100%");
    }
    let i = 0;
    for(let index in this.isWindowShown){
      if(!this.isWindowShown[index]){
        i++;
      }
    }
    if(i === 0){
      this.sidepanel.hide();
      this.isWindowShown[0] = false;
      this.mainWindows[5].resize("100%","100%");
      this.mainWindows[6].resize("100%","100%");
      this.mainWindows[7].resize("100%","100%");
    }
  }
}
