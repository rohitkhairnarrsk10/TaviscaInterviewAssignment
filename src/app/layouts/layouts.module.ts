import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './Header/header/header.component';
import { ContentComponent } from './Content/content/content.component';
import { FooterComponent } from './Footer/footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { LayoutRoutes } from './layout-routes';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(LayoutRoutes),
    SharedModule,
    
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutsModule { }
