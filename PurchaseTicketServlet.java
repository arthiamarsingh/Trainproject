package tickettingsystem;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/purchaseTicket")
public class PurchaseTicketServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;
    
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // Retrieve request parameters
        String from = request.getParameter("from");
        String to = request.getParameter("to");
        String firstName = request.getParameter("firstName");
        String lastName = request.getParameter("lastName");
        String email = request.getParameter("email");
        double price = Double.parseDouble(request.getParameter("price"));
        
        // Create user object
        User user = new User(firstName, lastName, email);
        
        // Create ticket object
        Ticket ticket = new Ticket(from, to, user, price);
        
        // Process the purchase (e.g., store the ticket in a database)
        // For demonstration, we will simply print the ticket details
        PrintWriter out = response.getWriter();
        out.println("Ticket Purchased Successfully:");
        out.println("From: " + ticket.getFrom());
        out.println("To: " + ticket.getTo());
        out.println("User: " + user.getFirstName() + " " + user.getLastName());
        out.println("Email: " + user.getEmail());
        out.println("Price: $" + ticket.getPrice());
    }
}
