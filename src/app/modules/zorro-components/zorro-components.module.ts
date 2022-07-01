import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzLayoutModule } from 'ng-zorro-antd/layout';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    NzButtonModule,
    NzIconModule,
    NzTypographyModule,
    NzLayoutModule
  ]
})
export class ZorroComponentsModule { }
