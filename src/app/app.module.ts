import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PurchaseTicketComponent } from './purchase-ticket/purchase-ticket.component';
import { ViewReceiptComponent } from './view-receipt/view-receipt.component';
import { ViewUsersSeatsComponent } from './view-users-seats/view-users-seats.component';
import { RemoveUserComponent } from './remove-user/remove-user.component';
import { ModifyUserSeatComponent } from './modify-user-seat/modify-user-seat.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PurchaseTicketComponent,
    ViewReceiptComponent,
    ViewUsersSeatsComponent,
    RemoveUserComponent,
    ModifyUserSeatComponent
  ],
  imports: [
    BrowserModule,  
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


    
