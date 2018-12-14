using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using VeganHardcore.WebApp.Models;

namespace VeganHardcore.WebApp.Controllers
{
    public class FeedbackController : Controller
    {
        private static readonly List<Feedback> Feedbacks = new List<Feedback>();

        [HttpGet]
        public IActionResult Index()
        {
            return this.View();
        }

        [HttpPost]
        public IActionResult Index(Feedback feedback)
        {
            if (this.ModelState.IsValid)
            {
                Feedbacks.Add(feedback);
                return this.RedirectToAction("Index", "Menu");
            }
            else
            {
                return this.View(feedback);
            }
        }
    }
}
