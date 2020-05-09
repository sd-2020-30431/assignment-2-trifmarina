using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WasteLESS.Models;

namespace WasteLESS.Services
{
    public class ItemRepo
    {
        private WasteLessContext _itemContext = new WasteLessContext();

        public void createItem(Item i)
        {

            _itemContext.Items.Add(i);
            _itemContext.SaveChanges();
        }

        public Item getItem(int id)
        {
            Item i = _itemContext.Items.Where(p => p.ItemId == id).FirstOrDefault();
            return i;
        }

        public IList<Item> getAllItems()
        {
            IList<Item> all_items = _itemContext.Items.ToList();
            return all_items;
        }
        
    }
}
