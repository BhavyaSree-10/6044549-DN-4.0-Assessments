using Microsoft.EntityFrameworkCore;

using var context = new RetailDbContext();

// Make sure database is created (optional safety check)
context.Database.EnsureCreated();

// Read categories and products
var categories = context.Categories
    .Include(c => c.Products)
    .ToList();

foreach (var category in categories)
{
    Console.WriteLine($"Category: {category.Name}");
    foreach (var product in category.Products)
    {
        Console.WriteLine($"  Product: {product.Name}, Stock: {product.Stock}, Price: ₹{product.Price}");
    }
}
