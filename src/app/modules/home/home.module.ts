import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { AboutComponent } from './pages/about/about.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzLayoutModule } from 'ng-zorro-antd/layout';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NzButtonModule,
    NzIconModule,
    NzTypographyModule,
    NzLayoutModule
  ]
})
export class HomeModule { }
