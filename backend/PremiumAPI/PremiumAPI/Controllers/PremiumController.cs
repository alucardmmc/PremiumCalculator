using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json.Linq;
using PremiumAPI.Model;
using PremiumAPI.Application;

namespace PremiumAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PremiumController : ControllerBase
    {

        [HttpPost]
        public IActionResult Post(CalculatorData data)
        {
            if (Validator.ValidateAge(data))
            {
                Calculator.CalculatePremium(data);

                string value = String.Format("{0:0.00}", data.Premium);

                var resp = new
                {
                    premium = value
                };

                return Ok(resp);

            } else
            {
                return Ok(data.Age);
            }
            
        }

    }
}
