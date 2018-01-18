import { NavbarComponent } from './navbar/navbar.component';
import { HotelsComponent } from './hotels/hotels.component';
import { Routes, RouterModule } from '@angular/router';
import { TravelerComponent } from './traveler/traveler.component';
import { CarComponent } from './car/car.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { PaySuccessComponent } from './pay-success/pay-success.component';
import { PaymentComponent } from './payment/payment.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { EditUserProfileComponent } from './edit-user-profile/edit-user-profile.component';
import { GalleryComponent } from './gallery/gallery.component';


const routing:Routes = [
    {path: '',redirectTo:'/login',pathMatch:'full'},
    {path:'login',component:LoginComponent},
    {path:'car',component:CarComponent},
    {path:'car_detail',component:CarDetailComponent},
    {path:'home',component:HomeComponent},
    {path:'traveler',component:TravelerComponent},
    {path:'order',component:OrderComponent},
    {path:'payment',component:PaymentComponent},
    {path:'pay_success',component:PaySuccessComponent},
    {path:'user',component:UserProfileComponent},
    {path:'edit_user',component:EditUserProfileComponent},
    {path:'Hotels',component:HotelsComponent},
    {path:'gallery',component:GalleryComponent}
  ];
  export const routingArray=RouterModule.forRoot(routing);