import { Component, VERSION } from "@angular/core";
import { Subject, BehaviorSubject } from "rxjs";
import { skip, tap, takeLast, switchMap } from "rxjs/operators";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  $input = new BehaviorSubject<any>("");
  $result = new BehaviorSubject<number>(0);
  $showResult = new Subject<void>();
  $clear = new Subject<void>();
  KEYS = [1, 2, 3, 4, 5, 6, 7, 8, 9, "-", 0, "+"];

  constructor() {
    this.$clear.subscribe(() => {
      this.$result.next(0);
      this.$input.next('');
    });
    this.$showResult
      .pipe(tap(() => this.$result.next(eval(this.$input.getValue()))))
      .subscribe();
  }
  handleSelection(item) {
    this.$input.next(`${this.$input.value}${item}`);
  }
}
