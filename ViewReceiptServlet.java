package tickettingsystem;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/viewReceipt")
public class ViewReceiptServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;
    
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // Retrieve ticket details from request parameters
        String from = request.getParameter("from");
        String to = request.getParameter("to");
        String firstName = request.getParameter("firstName");
        String lastName = request.getParameter("lastName");
        String email = request.getParameter("email");
        double price = Double.parseDouble(request.getParameter("price"));
        
        // Display receipt details
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        out.println("<html><body>");
        out.println("<h2>Receipt Details:</h2>");
        out.println("<p><strong>From:</strong> " + from + "</p>");
        out.println("<p><strong>To:</strong> " + to + "</p>");
        out.println("<p><strong>User:</strong> " + firstName + " " + lastName + "</p>");
        out.println("<p><strong>Email:</strong> " + email + "</p>");
        out.println("<p><strong>Price Paid:</strong> $" + price + "</p>");
        out.println("</body></html>");
    }
}
