export interface TicketReceipt {
  from: string;
  to: string;
  user: User;
  price: number;
  }

export interface Ticket {
    from: string;
    to: string;
    firstName: string;
    lastName: string;
    email: string;
  }
  export interface ReceiptDetails {
    from: string;
    to: string;
    user: {
      firstName: string;
      lastName: string;
      email: string;
    };
    price: number;
  }
  export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    seat: string;
    
  }
 
  
  