// SingletonPatternExample.java

class Logger {
    // Step 2: Private static instance
    private static Logger instance;

    // Step 2: Private constructor
    private Logger() {
        System.out.println("Logger instance created");
    }

    // Step 2: Public method to get instance
    public static Logger getInstance() {
        if (instance == null) {
            instance = new Logger();
        }
        return instance;
    }

    // Sample logging method
    public void log(String message) {
        System.out.println("Log: " + message);
    }
}

// Step 4: Test class
public class SingletonPatternExample {
    public static void main(String[] args) {

        Logger logger1 = Logger.getInstance();
        logger1.log("First message");

        Logger logger2 = Logger.getInstance();
        logger2.log("Second message");

        // Verify both references point to same object
        System.out.println("Are both instances same? " + (logger1 == logger2));
    }
}