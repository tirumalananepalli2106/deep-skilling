import java.util.Arrays;
import java.util.Comparator;

class Product {
    int productId;
    String productName;
    String category;

    public Product(int productId, String productName, String category) {
        this.productId = productId;
        this.productName = productName;
        this.category = category;
    }

    @Override
    public String toString() {
        return "Product ID: " + productId +
               ", Product Name: " + productName +
               ", Category: " + category;
    }
}

public class EcommerceSearch {

    // Linear Search
    public static Product linearSearch(Product[] products, int targetId) {
        for (Product product : products) {
            if (product.productId == targetId) {
                return product;
            }
        }
        return null;
    }

    // Binary Search
    public static Product binarySearch(Product[] products, int targetId) {
        int left = 0;
        int right = products.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;

            if (products[mid].productId == targetId) {
                return products[mid];
            }

            if (products[mid].productId < targetId) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return null;
    }

    public static void main(String[] args) {

        // Product Array
        Product[] products = {
            new Product(105, "Laptop", "Electronics"),
            new Product(101, "Mobile", "Electronics"),
            new Product(104, "Shoes", "Fashion"),
            new Product(103, "Watch", "Accessories"),
            new Product(102, "Bag", "Fashion")
        };

        int searchId = 104;

        // Linear Search
        System.out.println("=== Linear Search ===");
        Product linearResult = linearSearch(products, searchId);

        if (linearResult != null)
            System.out.println("Product Found: " + linearResult);
        else
            System.out.println("Product Not Found");

        // Sort array for Binary Search
        Arrays.sort(products, Comparator.comparingInt(p -> p.productId));

        // Binary Search
        System.out.println("\n=== Binary Search ===");
        Product binaryResult = binarySearch(products, searchId);

        if (binaryResult != null)
            System.out.println("Product Found: " + binaryResult);
        else
            System.out.println("Product Not Found");

        // Analysis
        System.out.println("\n=== Time Complexity Analysis ===");
        System.out.println("Linear Search:");
        System.out.println("Best Case    : O(1)");
        System.out.println("Average Case : O(n)");
        System.out.println("Worst Case   : O(n)");

        System.out.println("\nBinary Search:");
        System.out.println("Best Case    : O(1)");
        System.out.println("Average Case : O(log n)");
        System.out.println("Worst Case   : O(log n)");

        System.out.println("\nConclusion:");
        System.out.println("Binary Search is more suitable for large e-commerce platforms");
        System.out.println("because it provides faster searching (O(log n))");
        System.out.println("compared to Linear Search (O(n)), provided the data is sorted.");
    }
}