using Microsoft.EntityFrameworkCore;

public class RetailDbContext : DbContext
{
    public DbSet<Category> Categories => Set<Category>();
    public DbSet<Product> Products => Set<Product>();

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlServer(@"Server=(localdb)\mssqllocaldb;Database=RetailDb;Trusted_Connection=True;");
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        // Seed initial data
        modelBuilder.Entity<Category>().HasData(
            new Category { CategoryId = 1, Name = "Electronics" },
            new Category { CategoryId = 2, Name = "Groceries" }
        );

        modelBuilder.Entity<Product>().HasData(
            new Product { ProductId = 1, Name = "Laptop", Stock = 10, Price = 50000, CategoryId = 1 },
            new Product { ProductId = 2, Name = "Headphones", Stock = 25, Price = 1500, CategoryId = 1 },
            new Product { ProductId = 3, Name = "Rice", Stock = 100, Price = 50, CategoryId = 2 }
        );
    }
}
