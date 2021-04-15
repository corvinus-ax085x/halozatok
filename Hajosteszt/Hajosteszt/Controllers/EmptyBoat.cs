using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hajosteszt.Controllers
{
    public class EmptyBoat : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
