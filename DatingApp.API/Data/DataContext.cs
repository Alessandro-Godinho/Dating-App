using DatingApp.API.Model;
using Microsoft.EntityFrameworkCore;

namespace DatingApp.API.Data
{
    
    public class DataContext : DbContext
    {
       // public DataContext() : base("DatingApp") { }
        public DataContext(DbContextOptions<DataContext>  options) : base (options) {}

       public DbSet<User> Users { get; set; }
        public DbSet<Value> Values { get; set; }
        public DbSet<Photo> Photos {get;set;}
    }

}