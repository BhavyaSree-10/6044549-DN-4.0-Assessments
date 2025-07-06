using System;
using RetailStoreApp.Models; 
using Microsoft.EntityFrameworkCore; 

class Program
{
    static void Main(string[] args)
    {
        using var context = new AppDbContext();
        var electronics = new Category
        {
            Name = "Electronics",
            Products = new List<Product>
            {
                new Product { Name = "Laptop", Price = 50000 },
                new Product { Name = "Headphones", Price = 3000 }
            }
        };

        context.Categories.Add(electronics);
        context.SaveChanges();

        Console.WriteLine("Data saved successfully!");
    }
}
