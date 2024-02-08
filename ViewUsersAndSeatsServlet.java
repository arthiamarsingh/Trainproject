package tickettingsystem;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/viewUsersAndSeats")
public class ViewUsersAndSeatsServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;
    
    // Assuming seats are allocated in two sections: A and B
    private Map<String, String> seats = new HashMap<>();

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // For demonstration purposes, let's assume seats are pre-allocated
        seats.put("Section A", "John Smith");
        seats.put("Section B", "Emma Johnson");
        
        // Display users and seats
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        out.println("<html><body>");
        out.println("<h2>Users and Seats:</h2>");
        for (Map.Entry<String, String> entry : seats.entrySet()) {
            out.println("<p><strong>Section:</strong> " + entry.getKey() + ", <strong>User:</strong> " + entry.getValue() + "</p>");
        }
        out.println("</body></html>");
    }
}
