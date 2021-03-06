


import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { UserService } from './login/user.service';
import { HotelService } from './hotels/hotel.service';
import { MatInputModule,MatFormFieldModule,MatButtonModule,MatCardModule,MatTableModule,MatPaginatorModule,MatSortModule,MatIconModule,MatDatepickerModule,MatRadioModule,MatNativeDateModule } from '@angular/material';
import { routingArray } from './app.route';
import { MapService } from './home/map.service';
import { ImageService } from './gallery/image.service';
import { AgmCoreModule } from '@agm/core';
import { ForgotComponent } from './forgot/forgot.component';
import { ForgotService } from './forgot/forgot.service';
import { UserorderComponent } from './userorder/userorder.component';
import { NgProgressModule } from 'ngx-progressbar';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { ChatserviceService } from "./chatbot/chatservice.service";
import { CommonModule } from '@angular/common';
import { HotelLocComponent } from './hotel-loc/hotel-loc.component';

const googleMapsParams = {
  apiKey: 'AIzaSyAx2FpIpogwOcsBCnz9xhGBVF97hJm9XFA',
  libraries: ['places'],
  language: 'en',
  region: 'UA'
};
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
    ForgotComponent,
    UserorderComponent,
    ChatbotComponent,
    HotelLocComponent
  ],
  imports: [
    AgmCoreModule.forRoot(googleMapsParams),
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgProgressModule,
    FormsModule,MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,MatSortModule,MatIconModule,MatDatepickerModule,MatRadioModule,MatNativeDateModule,
    routingArray
  ],
  providers: [CarService,TravelerService,OrderService,MapService,UserService,ImageService,ForgotService,HotelService,ChatserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
