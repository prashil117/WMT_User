
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import { ViewHotelComponent } from './view-hotel/view-hotel.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CarService } from './car/car.service';
import { TravelerService } from './traveler/traveler.service';
import { OrderService } from './order/order.service';
import { routingArray } from './app.route';


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
    HotelsComponent,
    ViewHotelComponent,
    GalleryComponent,
    
  ],
  imports: [
    RouterModule,
    BrowserModule,
    
    HttpClientModule,
    FormsModule,
    routingArray
  ],
  providers: [CarService,TravelerService,OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
