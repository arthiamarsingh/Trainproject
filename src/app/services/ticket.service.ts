import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReceiptDetails, Ticket, User } from '../ticket.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TicketService {
 
  getReceipt() {
    throw new Error('Method not implemented.');
  }
  apiUrl: any;

  constructor(private http: HttpClient) {}
  purchaseTicket(ticketDetails: Ticket): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/purchase-ticket`, ticketDetails);
  }
  getUsersAndSeats(section: string): Observable<Map<User, string>> {
    return this.http.get<Map<User, string>>(`/api/users-seats?section=${section}`);
  }
  getReceiptDetails(): Observable<ReceiptDetails> {
    // Assuming your API endpoint to fetch receipt details
    const url = `${this.apiUrl}/receipt`;
    return this.http.get<ReceiptDetails>(url);
  }
  
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  removeUser(user: User): Promise<void> {
    const url = `${this.apiUrl}/${user.id}`;
    return this.http.delete<void>(url).toPromise();
  }
  modifyUserSeat(userId: number, newSection: string): Promise<void> {
    const url = `${this.apiUrl}/${userId}`;
    const updatedUser = { section: newSection }; 
    return this.http.put<void>(url, updatedUser).toPromise();
  }

}
