import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenav,
  MatSidenavModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatListModule, MatCardModule} from '@angular/material';
  import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  imports: [
  MatSidenavModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  FlexLayoutModule,
  MatCardModule

  ],
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    FlexLayoutModule,
    MatCardModule
  ],
  declarations: []
})
export class MatModule { }
