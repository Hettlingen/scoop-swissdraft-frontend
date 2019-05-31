import {Component, Input, OnInit} from '@angular/core';

/*
    https://www.w3schools.com/howto/howto_js_snackbar.asp
 */
@Component({
  selector: 'snackbar',
  templateUrl: 'snackbar.component.html',
  styleUrls: ['snackbar.component.css']
})
export class SnackbarComponent implements OnInit {

  @Input() infoText: string = "Kein Text vorhanden";

  constructor() {}

  ngOnInit() {
    this.show();
  }

  show(){
    // Get the snackbar DIV
    var x = document.getElementById("snackbar")

    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }
}
