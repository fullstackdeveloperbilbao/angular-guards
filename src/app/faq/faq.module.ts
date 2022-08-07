import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqComponent } from './faq.component';
import { FaqRoutingModule } from './faq-routing.module';
import { CanDeactivateGuard } from './can-deactivate.guard';



@NgModule({
  declarations: [FaqComponent],
  imports: [
    CommonModule,
    FaqRoutingModule
  ],
  providers: [CanDeactivateGuard]
})
export class FaqModule { }
