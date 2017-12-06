using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace vnphim.Controllers
{
    public class ProductController : Controller
    {
        public ActionResult Detail()
        {
            if (MvcApplication.IsMobileMode())
            {
                return View("Detail.Mobile");
            }
            return View("Detail");
        } 
    }
}