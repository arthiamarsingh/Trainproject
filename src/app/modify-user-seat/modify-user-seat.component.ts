import { Component, NgModule } from '@angular/core';
import { TicketService } from '../services/ticket.service';




@Component({
  selector: 'app-modify-user-seat',
  templateUrl: './modify-user-seat.component.html',
  styleUrls: ['./modify-user-seat.component.css']
})
export class ModifyUserSeatComponent {
  userId: number = 0;
  newSection: string | undefined;
  successMessage: string | undefined;
  errorMessage: string | undefined;

  constructor(private ticketService: TicketService) {}

  modifySeat(): void {
    if (!this.userId || !this.newSection) {
      this.errorMessage = 'Please provide both user ID and new seat section.';
      return;
    }

    this.ticketService.modifyUserSeat(this.userId, this.newSection)
      .then(() => {
        this.successMessage = 'User seat modified successfully.';
        this.errorMessage = '';
      })
      .catch(error => {
        this.errorMessage = `Error modifying user seat: ${error.message}`;
        this.successMessage = '';
      });
  }
}
