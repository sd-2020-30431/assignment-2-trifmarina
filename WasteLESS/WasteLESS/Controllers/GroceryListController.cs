using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WasteLESS.Services;
using WasteLESS.Models;

namespace WasteLESS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GroceryListController : ControllerBase
    {
        private GroceryListRepo _groceryRepository = new GroceryListRepo();   

        // GET: api/GroceryList
        //[HttpGet]
        //public IEnumerable<GroceryList> Get()
        //{
        //    return _groceryRepository.getAllGroceryLists();
        //}

        // GET: api/GroceryList/5
        //[HttpGet("{id}", Name = "Get")]
        //public GroceryList Get(int id)
        //{
        //    return _groceryRepository.getGroceryList(id);
        //}

        // POST: api/GroceryList
        [HttpPost]
        public ActionResult Post([FromBody] GroceryList g)
        {
            if (g == null)
            {
                return BadRequest("Grocery List is null");
            }
            _groceryRepository.addGroceryList(g);
            return NoContent();
        }

        //// PUT: api/GroceryList/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody] string value)
        //{
        //}

        //// DELETE: api/ApiWithActions/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}
    }
}
