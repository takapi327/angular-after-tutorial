import { Component }       from '@angular/core';
import { UserListFilter }  from './state';
import { UserListUsecase } from './usecase/user-list.usecase';
import { DataService }     from './service/data.service';

@Component({
  selector:    'app-root',
  templateUrl: './app.component.html',
  styleUrls:  ['./app.component.scss']
})
export class AppComponent {

  users$ = this.userList.users$;
  userListFilter$ = this.userList.filter$;

  constructor(
    private userList: UserListUsecase,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.userList.fetchUsers();
  }

  setUserListFilter(value: UserListFilter) {
    this.userList.setNameFilter(value.nameFilter)
  }

  updateValue() {
    const value = new Date().toISOString();
    this.dataService.setValue(value)
  }

}
