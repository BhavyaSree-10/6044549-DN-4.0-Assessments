using Microsoft.EntityFrameworkCore;
using RetailStore_App;

var context = new AppDbContext();

// Insert initial categories
var electronics = new Category { Name = "Electronics" };
var groceries = new Category { Name = "Groceries" };
await context.Categories.AddRangeAsync(electronics, groceries);

// Insert initial products
var product1 = new Product { Name = "Laptop", Price = 75000, Category = electronics };
var product2 = new Product { Name = "Rice Bag", Price = 1200, Category = groceries };
await context.Products.AddRangeAsync(product1, product2);

// Save changes
await context.SaveChangesAsync();
Console.WriteLine("Data inserted successfully.");

// Retrieve and display all products
var products = await context.Products.ToListAsync();
foreach (var p in products)
{
    Console.WriteLine($"{p.Name} - ₹{p.Price}");
}
