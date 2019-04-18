import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {TodoResolver} from './list/todo.resolver';
import {DetailComponent} from './detail/detail.component';
import {ListComponent} from './list/list.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {WalletComponent} from './wallet/wallet.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'wallets', component: WalletComponent},
  {
    path: 'todo',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list'
      },
      {
        path: 'list',
        component: ListComponent,
        resolve: [TodoResolver] // todo/list
      },
      {
        path: 'details/:id',
        component: DetailComponent // todo/detail/:id
      }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
