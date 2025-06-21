using System;
public class Product
{
    public int ProductId { get; set; }
    public string ProductName { get; set; }
    public string Category { get; set; }

    public Product(int id, string name, string category)
    {
        ProductId = id;
        ProductName = name;
        Category = category;
    }

    public override string ToString()
    {
        return $"ID: {ProductId}, Name: {ProductName}, Category: {Category}";
    }
}

class Program
{
    static Product LinearSearch(Product[] products, string name)
    {
        foreach (var product in products)
        {
            if (product.ProductName.Equals(name, StringComparison.OrdinalIgnoreCase))
                return product;
        }
        return null;
    }
    static Product BinarySearch(Product[] products, string name)
    {
        int left = 0;
        int right = products.Length - 1;
        while (left <= right)
        {
            int mid = left + (right - left) / 2;
            int result = string.Compare(products[mid].ProductName, name, StringComparison.OrdinalIgnoreCase);

            if (result == 0)
                return products[mid];
            else if (result < 0)
                left = mid + 1;
            else
                right = mid - 1;
        }
        return null;
    }
    static void Main()
    {
        Product[] products = new Product[]
        {
            new Product(301, "Milk", "Dairy"),
            new Product(302, "Apple", "Fruits"),
            new Product(303, "Juice", "Beverages"),
            new Product(304, "Bread", "Bakery"),
            new Product(305, "Eggs", "Dairy"),
            new Product(306, "Sugar", "Grocery"),
            new Product(307, "Butter", "Dairy")
        };
        Array.Sort(products, (a, b) => a.ProductName.CompareTo(b.ProductName));
        Console.Write("Enter the grocery item to search: ");
        string searchTerm = Console.ReadLine();
        Console.WriteLine("Linear Search Result");
        var linearResult = LinearSearch(products, searchTerm);
        Console.WriteLine(linearResult != null ? linearResult.ToString() : "Product not found");
        Console.WriteLine("Binary Search Result");
        var binaryResult = BinarySearch(products, searchTerm);
        Console.WriteLine(binaryResult != null ? binaryResult.ToString() : "Product not found");
        Console.WriteLine(" Analysis");
        Console.WriteLine("Linear Search: O(n) — Simple, good for small/unsorted data.");
        Console.WriteLine("Binary Search: O(log n) — Faster but needs sorted data.");
    }
}

