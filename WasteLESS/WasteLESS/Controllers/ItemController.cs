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
    public class ItemController : ControllerBase
    {
        private ItemRepo _itemRepository = new ItemRepo();

        // GET: api/Item
        [HttpGet]
        public IEnumerable<Item> Get()
        {
            return _itemRepository.getAllItems();
        }

        // GET: api/Item/5
        [HttpGet("{id}", Name = "Get")]
        public Item Get(int id)
        {
            return _itemRepository.getItem(id);
        }

        // POST: api/Item
        [HttpPost]
        public ActionResult Post([FromBody] Item i)
        {
            if (i == null)
            {
                return BadRequest("Item is null");
            }
            _itemRepository.createItem(i);
            return NoContent();
        }

        //// PUT: api/Item/5
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
