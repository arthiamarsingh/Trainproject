package tickettingsystem;


public class TicketReceipt {
    private Ticket ticket;

    public TicketReceipt(Ticket ticket) {
        this.ticket = ticket;
    }

    public Ticket getTicket() {
        return ticket;
    }

    // Setter
    public void setTicket(Ticket ticket) {
        this.ticket = ticket;
    }

    // Method to get receipt details
    public String getReceiptDetails() {
        StringBuilder sb = new StringBuilder();
        sb.append("Receipt Details:\n");
        sb.append("From: ").append(ticket.getFrom()).append("\n");
        sb.append("To: ").append(ticket.getTo()).append("\n");
        sb.append("User: ").append(ticket.getUser().getFirstName()).append(" ").append(ticket.getUser().getLastName()).append("\n");
        sb.append("Email: ").append(ticket.getUser().getEmail()).append("\n");
        sb.append("Price Paid: $").append(ticket.getPrice()).append("\n");
        return sb.toString();
    }
}


