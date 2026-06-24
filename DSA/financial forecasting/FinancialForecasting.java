public class FinancialForecasting {

    // Recursive method to calculate future value
    public static double predictFutureValue(double currentValue, double growthRate, int years) {

        // Base case
        if (years == 0) {
            return currentValue;
        }

        // Recursive case
        return predictFutureValue(
                currentValue * (1 + growthRate),
                growthRate,
                years - 1
        );
    }

    public static void main(String[] args) {

        double presentValue = 10000.0; // Initial investment
        double growthRate = 0.08;      // 8% annual growth
        int years = 5;

        double futureValue = predictFutureValue(
                presentValue,
                growthRate,
                years
        );

        System.out.println("Financial Forecasting Using Recursion");
        System.out.println("------------------------------------");
        System.out.println("Present Value : ₹" + presentValue);
        System.out.println("Growth Rate   : " + (growthRate * 100) + "%");
        System.out.println("Years         : " + years);
        System.out.printf("Future Value  : ₹%.2f%n", futureValue);

        // Analysis
        System.out.println("\nTime Complexity Analysis");
        System.out.println("Time Complexity : O(n)");
        System.out.println("Space Complexity: O(n) (due to recursive call stack)");

        System.out.println("\nOptimization:");
        System.out.println("1. Use Memoization to store previously computed results.");
        System.out.println("2. Use an Iterative approach to reduce space complexity to O(1).");
        System.out.println("3. Use the compound interest formula:");
        System.out.println("   Future Value = Present Value * (1 + Growth Rate)^Years");
    }
}