using Microsoft.EntityFrameworkCore;
using RetailStoreApp.Models; // ✅ add this!

public class AppDbContext : DbContext
{
    public DbSet<Product> Products { get; set; }
    public DbSet<Category> Categories { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlServer(@"Server=(localdb)\MSSQLLocalDB;Database=RetailStoreDb;Trusted_Connection=True;");
    }
}


