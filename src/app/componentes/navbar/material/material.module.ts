import { NgModule } from '@angular/core';
import { MatToolbarModule } from "@angular/material/toolbar";

const MaterialImports = [
  MatToolbarModule
]

@NgModule({
  imports: [MaterialImports],
  exports: [MaterialImports]
})
export class MaterialModule { }
