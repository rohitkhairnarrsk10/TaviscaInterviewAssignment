import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabFactoryComponent } from './components/tab-factory/tab-factory.component';
import { AdHostDirective } from './directives/ad-host.directive';
import { TimeDiffCalculatePipe } from './pipes/time-diff-calculate.pipe';
import { WorkInProgressComponent } from './components/work-in-progress/work-in-progress.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TabFactoryComponent,
    AdHostDirective,
    TimeDiffCalculatePipe,
    WorkInProgressComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [TabFactoryComponent, AdHostDirective, FormsModule, ReactiveFormsModule, TimeDiffCalculatePipe, WorkInProgressComponent],
  providers: [TimeDiffCalculatePipe]
})
export class SharedModule { }
