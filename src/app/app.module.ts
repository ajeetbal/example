import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { ShortenPipe } from './shorten.pipe';
import { ServerService } from './server.service';
import { HttpModule } from '@angular/http';
const appRoute:Routes=[{
  path:'home',
  component:HomeComponent
},
{
  path:'user',
  component:UserComponent
}
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    ShortenPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
