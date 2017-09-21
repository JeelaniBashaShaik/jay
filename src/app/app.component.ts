import { Component,OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  myDate:any;
  ngOnInit(){
    this.utcTime();
    $(document).ready(function(){
  $('.owl-carousel').owlCarousel({
     items:7,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
    //autoplayHoverPause:true
    }
  );
});
  }
  utcTime(): void {
        setInterval(()=> {
            this.myDate = new Date();
        }, 1000);
    }

 startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = this.checkTime(m);
    s = this.checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(this.startTime, 500);
}

 checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
}
