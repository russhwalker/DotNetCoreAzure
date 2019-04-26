using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DotNetCoreAzure.WebApp.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DotNetCoreAzure.WebApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DogController : ControllerBase
    {
        [HttpGet("{name}", Name = "Get")]
        public Dog Get(string name)
        {
            return new Dog
            {
                Name = name,
                Age = 3
            };
        }
    }
}
