import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabFactoryComponent } from './components/tab-factory/tab-factory.component';
import { AdHostDirective } from './directives/ad-host.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TimeDiffCalculatePipe } from './pipes/time-diff-calculate.pipe';

@NgModule({
  declarations: [
    TabFactoryComponent,
    AdHostDirective,
    TimeDiffCalculatePipe
  ],
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule
  ],
  exports: [TabFactoryComponent, AdHostDirective, FormsModule, ReactiveFormsModule,TimeDiffCalculatePipe],
  providers:[TimeDiffCalculatePipe]
})
export class SharedModule { }
