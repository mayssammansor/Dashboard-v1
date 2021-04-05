// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ColorsComponent } from './colors.component';
import { TypographyComponent } from './typography.component';

// Theme Routing
import { ThemeRoutingModule } from './theme-routing.module';
import { UsersComponent } from './users/users.component';



//for material.....................
import { MatTableModule } from '@angular/material/table' ;
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  imports: [
    CommonModule,
    ThemeRoutingModule,

    //for material
    MatTableModule,
    MatInputModule,
    MatSortModule

    
    
  ],
  declarations: [
    ColorsComponent,
    TypographyComponent,
    UsersComponent,
    
    
    
  ]
})
export class ThemeModule { }
