import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from 'src/app/shared/star/star.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [StarComponent],
  imports: [CommonModule],
  exports: [ FormsModule,CommonModule, StarComponent],
})
export class SharedModule {}
