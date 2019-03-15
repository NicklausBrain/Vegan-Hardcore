using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using VeganHardcore.WebApp.Models;

namespace VeganHardcore.WebApp.Controllers
{
    public class MenuController : Controller
    {
        private const string JsonMenu = @"[
        {
            ""title"": ""Пепперони грибная"",
            ""price"": ""140₴"",
            ""description"": ""веган сервелат, шампиньоны, болгарский перец, помидор, руккла, томатный соус"",
            ""image"": ""папперони-грибная.jpg"",
            ""category"": ""пицца""
        },
        {
            ""title"": ""С дымком"",
            ""price"": ""150₴"",
            ""description"": ""копчёный тофу, копчёные сейтан колбаски, корнишоны, болгарский перец, помидор, синий лук, салат, хумус"",
            ""image"": ""с-дымком.jpg"",
            ""category"": ""пицца""
        },
        {
            ""title"": ""Гавайская"",
            ""price"": ""140₴"",
            ""description"": ""сейтан, ананас, помидор, салатный лук, руккола, томатный соус"",
            ""image"": ""гавайская.jpg"",
            ""category"": ""пицца""
        },
        {
            ""title"": ""Чизкейк"",
            ""price"": ""30₴"",
            ""description"": ""Если съесть весь торт целиком, не разрезая, то получится, что вы съели всего один кусочек 😏 Но кусочек вишнёвого 'Чизкейка'🍒 от Никого не ем! равен целому тортику👄"",
            ""image"": ""чизкейк.jpg"",
            ""category"": ""десерт""
        },
        {
            ""title"": ""Наполеон"",
            ""price"": ""30₴"",
            ""description"": ""Мы знаем, что такое настоящая сладость...👄 Шоколадный 'Наполеон' с кокосовыми сливками, кешью и фундуком от Никого не ем!"",
            ""image"": ""наполеон.jpg"",
            ""category"": ""десерт""
        },
        {
            ""title"": ""Тропический торт"",
            ""price"": ""40₴"",
            ""description"": ""Наша новинка 'Тропический торт' с манго, ананасом, на сливочно-кокосовом креме❤️"",
            ""image"": ""тропический-торт.jpg"",
            ""category"": ""десерт""
        }
]";

        [HttpGet]
        public IActionResult Index()
        {
            var menu = JsonConvert.DeserializeObject<Meal[]>(JsonMenu);
            return this.View(menu);
        }

        [HttpGet]
        public string Json()
        {
            return JsonMenu;
        }
    }
}
