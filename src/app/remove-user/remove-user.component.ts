import { Component, NgModule, OnInit } from '@angular/core';
import { TicketService } from '../services/ticket.service';
import { User } from '../ticket.model';


@Component({
  selector: 'app-remove-user',
  templateUrl: './remove-user.component.html',
  styleUrls: ['./remove-user.component.css']
})
export class RemoveUserComponent implements OnInit {
  users: User[] = [];
  selectedUser: User | null = null; 

  constructor(private ticketService: TicketService) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  private fetchUsers(): void {
    this.ticketService.getUsers()
      .subscribe(
        (users: User[]) => {
          this.users = users;
        },
        (error: any) => {
          console.error('Error fetching users:', error);
        }
      );
  }

  removeUser(): void {
    if (this.selectedUser !== null) {
      this.ticketService.removeUser(this.selectedUser)
        .then(() => {
          console.log('User removed successfully.');
          // Refresh the list of users after removing the user
          this.fetchUsers();
        })
        .catch((error: any) => {
          console.error('Error removing user:', error);
        });
    }
  }
}
