import { RouterModule, Routes } from '@angular/router';
import { PurchaseTicketComponent } from './purchase-ticket/purchase-ticket.component';
import { ViewReceiptComponent } from './view-receipt/view-receipt.component';
import { ViewUsersSeatsComponent } from './view-users-seats/view-users-seats.component';
import { RemoveUserComponent } from './remove-user/remove-user.component';
import { ModifyUserSeatComponent } from './modify-user-seat/modify-user-seat.component';
import { NgModule } from '@angular/core';


export const routes: Routes = [
    { 
        path: 'purchase-ticket',
         component: PurchaseTicketComponent 
        },
    { 
        path: 'view-receipt', 
        component: ViewReceiptComponent 
    },
    { 
        path: 'view-users-seats', 
        component: ViewUsersSeatsComponent
     },
    { 
        path: 'remove-user',
         component: RemoveUserComponent 
        },
    { 
        path: 'modify-user-seat', 
        
        component: ModifyUserSeatComponent },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }