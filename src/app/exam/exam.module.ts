import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TitleTableComponent } from './title-table/title-table.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { TitleInfoComponent } from './title-info/title-info.component';
import { AppRoutingModule } from '../app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { UrlValidatorDirective } from './url-validator.directive';
import { TextMaskModule } from 'angular2-text-mask';



@NgModule({
  declarations: [TitleTableComponent, UserInfoComponent, TitleInfoComponent, NotFoundComponent, UrlValidatorDirective],
  imports: [
    CommonModule,
    HttpClientModule,
    MatTableModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    TextMaskModule,
    AppRoutingModule
  ],
  exports: [TitleTableComponent, UserInfoComponent, NotFoundComponent]
})
export class ExamModule { }
