import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { NavbarTopoComponent } from './navbar-topo/navbar-topo.component';



@NgModule({
  declarations: [NavbarTopoComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [NavbarTopoComponent]
})
export class NavbarModule { }
