import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanActivateChildGuard } from './can-activate-child.guard';
import { CanActivateGuard } from './can-activate.guard';
import { PhotoComponent } from './photo/photo.component';
import { ProfileComponent } from './profile.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    canActivate: [CanActivateGuard],
    canActivateChild: [CanActivateChildGuard],
    children: [{ path: 'photo', component: PhotoComponent }],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
