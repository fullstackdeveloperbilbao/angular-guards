import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { CanActivateGuard } from './can-activate.guard';
import { CanActivateChildGuard } from './can-activate-child.guard';
import { PhotoModule } from './photo/photo.module';

@NgModule({
  declarations: [ProfileComponent],
  imports: [CommonModule, PhotoModule, ProfileRoutingModule],
  providers: [CanActivateGuard, CanActivateChildGuard],
})
export class ProfileModule {}
