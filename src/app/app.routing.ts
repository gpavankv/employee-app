import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {OperationsComponent} from './operations/operations.component';
import {DataBindingComponent} from './data-binding/data-binding.component';
import {ReadComponent} from './operations/read/read.component';
import {CreateComponent} from './operations/create/create.component';
import {UpdateComponent} from './operations/update/update.component';
import { DeleteComponent} from './operations/delete/delete.component';
import {TestComponent} from './operations/test/test.component';
import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AuthGuardService} from './services/auth-guard.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'data-binding', component: DataBindingComponent },
  { path: 'operations',  component: OperationsComponent, canActivate: [AuthGuardService], children: [
      { path: 'read', component: ReadComponent},
      { path: 'create', component: CreateComponent},
      { path: 'update', component: UpdateComponent},
      { path: 'delete', component: DeleteComponent},
      { path: 'test', component: TestComponent }
    ]},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule {

}
