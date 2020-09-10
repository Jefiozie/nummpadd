import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-numpads",
  templateUrl: "./numpads.component.html",
  styleUrls: ["./numpads.component.css"]
})
export class NumpadsComponent implements OnInit {
  @Input() key: any;
  @Output() itemSelected = new EventEmitter<any>();
  constructor() {}

  ngOnInit() {}
}
