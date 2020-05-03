import { MatButtonModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material';

@NgModule({
  declarations: [ListComponent],
  imports: [
    // vendor
    CommonModule,
    RouterModule,

    // material
    MatCardModule,
    MatButtonModule,
  ],
  exports: [
    // vendor
    CommonModule,
    RouterModule,

    // material
    MatCardModule,
    MatButtonModule,

    // local
    ListComponent,
  ],
})
export class SharedModule {}
