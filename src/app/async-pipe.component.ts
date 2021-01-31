import { Component }   from '@angular/core';
import { Observable, combineLatest }  from 'rxjs';
import { DataService } from './service/data.service';

type State = {
  value: any;
};

@Component({
  selector: 'app-async-pipe',
  template: `
    <ng-container *ngIf="state$ | async as state">
      <div>{{ state.value }}</div>
    </ng-container>
  `,
})
export class AsyncPipeComponent {

  readonly state$: Observable<State>;

  constructor(
    private dataService: DataService
  ) {
    this.state$ = combineLatest(
      [ this.dataService.valueChanges ],
      ([value]) => ({ value })
    );
  }
}
