import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { TitleTableComponent } from './exam/title-table/title-table.component';
import { UserInfoComponent } from './exam/user-info/user-info.component';
import { NotFoundComponent } from './exam/not-found/not-found.component';


export const router: Routes = [
  {
    path: 'titles',
    component: TitleTableComponent,
  },
  {
    path: 'userInfo/:id',
    component: UserInfoComponent,
  },
  {
    path: '404',
    component: NotFoundComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'titles',
  },
  {
    path: '**',
    redirectTo: '404',
  },
];

const extraOptions: ExtraOptions = {
  onSameUrlNavigation: 'reload',
  scrollPositionRestoration: 'top',
};


@NgModule({
  imports: [RouterModule.forRoot(router, extraOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
