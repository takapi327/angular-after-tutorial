import { Injectable }      from '@angular/core';
import { HttpClient }      from '@angular/common/http';
import { map }             from 'rxjs/operators';
import { Store }           from './store.service';
import { User }            from './user';

@Injectable({ providedIn: 'root' })
export class UserListUsecase {

  constructor(
    private http:  HttpClient,
    private store: Store
  ) {}

  get users$() {
    return this.store
      .select(state => state.userList)
      .pipe(
        map(({ items, filter }) =>
          items.filter(user =>
            (user.first_name + user.last_name).includes(filter.nameFilter)
          )
        )
      );
  }

  get filter$() {
    return this.store.select(state => state.userList.filter);
  }

  async fetchUsers() {
    const users = await this.http
      .get<{ data: User[] }>('https://reqres.in/api/users')
      .pipe(map(res => res.data))
      .toPromise();

    this.store.update(state => ({
      ...state,
      userList: {
        ...state.userList,
        items: users
      }
    }));
  }

  setNameFilter(nameFilter: string) {
    this.store.update(state => ({
      ...state,
      userList: {
        ...state.userList,
        filter: {
          nameFilter
        }
      }
    }));
  }
}
