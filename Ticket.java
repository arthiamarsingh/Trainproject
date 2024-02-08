package tickettingsystem;

public class Ticket{
    private String from;
    private String to;
    private User user;
    private double price;

    public Ticket(String from, String to, User user, double price) {
        this.from = from;
        this.to = to;
        this.user = user;
        this.price = price;
    }

    // Getters and 
    public String getFrom() {
        return from;
    }

    public String getTo() {
        return to;
    }

    public User getUser() {
        return user;
    }

    public double getPrice() {
        return price;
    }

    // Setters
    public void setFrom(String from) {
        this.from = from;
    }

    public void setTo(String to) {
        this.to = to;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public void setPrice(double price) {
        this.price = price;
    }
}
