package tickettingsystem;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Trainticket {
	 
    private List<Ticket> tickets;
    private Map<User, String> seatAllocations; 
    public Trainticket() {
        tickets = new ArrayList<>();
        seatAllocations = new HashMap<>();
    }

    public Ticket purchaseTicket(String from, String to, String firstName, String lastName, String email, double price) {
        // Create a new ticket
        Ticket ticket = new Ticket(from, to, new User(firstName, lastName, email), price);
        tickets.add(ticket);
        // Allocate seat
        allocateSeat(ticket.getUser());
        return ticket;
    }

    public TicketReceipt viewReceipt(User user) {
        // Find the ticket associated with the user
        for (Ticket ticket : tickets) {
            if (ticket.getUser().equals(user)) {
                return new TicketReceipt(ticket);
            }
        }
        return null;
    }

    public Map<User, String> viewUsersAndSeats(String section) {
        // Filter seat allocations by section
        Map<User, String> usersAndSeats = new HashMap<>();
        for (Map.Entry<User, String> entry : seatAllocations.entrySet()) {
            if (entry.getValue().equalsIgnoreCase(section)) {
                usersAndSeats.put(entry.getKey(), entry.getValue());
            }
        }
        return usersAndSeats;
    }

    public void removeUser(User user) {
        // Remove user and seat allocation
        seatAllocations.remove(user);
        // Also remove the ticket associated with the user
        tickets.removeIf(ticket -> ticket.getUser().equals(user));
    }

    public void modifyUserSeat(User user, String newSection) {
        // Modify user's seat section
        seatAllocations.put(user, newSection);
    }

    private void allocateSeat(User user) {
        // Simplified seat allocation logic, just alternating between two sections
        String section = seatAllocations.size() % 2 == 0 ? "Section A" : "Section B";
        seatAllocations.put(user, section);
    }
    

   
    } 





