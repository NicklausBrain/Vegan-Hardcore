namespace VeganHardcore.WebApp.Models
{
    public class Meal
    {
        public Meal(
            string title,
            string price,
            string description,
            string image,
            string category)
        {
            this.Title = title;
            this.Price = price;
            this.Description = description;
            this.Image = image;
            this.Category = category;
        }

        public string Title { get; }
        public string Price { get; }
        public string Description { get; }
        public string Image { get; }
        public string Category { get; }
    }
}