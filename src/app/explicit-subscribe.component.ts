import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject }                      from 'rxjs';
import { takeUntil }                    from 'rxjs/operators';
import { DataService }                  from './service/data.service';

@Component({
  selector: 'app-explicit-subscribe',
  template: `<div>{{ value }}</div>`,
})
export class ExplicitSubscribeComponent implements OnInit, OnDestroy {
  value: any;
  private onDestroy$ = new Subject();

  constructor(
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.dataService.valueChanges
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(value => {
        this.value = value;
      });
  }

  ngOnDestroy() {
    this.onDestroy$.next();
  }
}
