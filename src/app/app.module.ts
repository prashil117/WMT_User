import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { routingArray } from './app.route';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CarComponent } from './car/car.component';
import { TravelerComponent } from './traveler/traveler.component';
import { OrderComponent } from './order/order.component';
import { PaymentComponent } from './payment/payment.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { PaySuccessComponent } from './pay-success/pay-success.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule,HttpHeaders } from '@angular/common/http';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { EditUserProfileComponent } from './edit-user-profile/edit-user-profile.component';
import { HotelsComponent } from './hotels/hotels.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CarComponent,
    TravelerComponent,
    OrderComponent,
    PaymentComponent,
    CarDetailComponent,
    PaySuccessComponent,
    NavbarComponent,
    FooterComponent,
    UserProfileComponent,
    EditUserProfileComponent,
    HotelsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
