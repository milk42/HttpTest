import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
// import {
//   MatSidenavModule,
//   MatToolbarModule,
//   MatIconModule,
//   MatButtonModule,
//   MatListModule
// } from '@angular/material';


import { AppComponent } from './app.component';
import { MatModule } from './/mat.module';
import { UserListComponent } from './user-list/user-list.component';
import { PostListComponent } from './post-list/post-list.component';
import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './core/api.service';
import { Iuser } from './core/iuser';
import { Ipost } from './core/ipost';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { RouterModule, Routes } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    PostListComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    // MatSidenavModule,
    // MatToolbarModule,
    // MatIconModule,
    // MatButtonModule,
    // MatListModule,
    MatModule,
    // AppRoutingModule
    BrowserAnimationsModule,
    NoopAnimationsModule,
    FlexLayoutModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}