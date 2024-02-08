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

@WebServlet("/modifyUserSeat")
public class ModifyUserSeatServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;
    
    // Assuming seats are allocated in two sections: A and B
    private Map<String, String> seats = new HashMap<>();

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // Retrieve user information and new seat from request parameters
        String firstName = request.getParameter("firstName");
        String lastName = request.getParameter("lastName");
        String newSeat = request.getParameter("newSeat");

        // Update the user's seat in the seats map
        for (Map.Entry<String, String> entry : seats.entrySet()) {
            if (entry.getValue().equals(firstName + " " + lastName)) {
                entry.setValue(newSeat);
                break; // exit loop once user is found and seat is updated
            }
        }

        // Send response
        response.setContentType("text/plain");
        PrintWriter out = response.getWriter();
        out.println("User's seat modified successfully.");
    }
}

