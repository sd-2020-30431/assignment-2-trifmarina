using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WasteLESS.Models;

namespace WasteLESS.Services
{
    public class GroceryListRepo
    {
        private WasteLessContext _groceryContext = new WasteLessContext();

        public void addGroceryList(GroceryList g)
        {
            _groceryContext.GroceryLists.Add(g);
            _groceryContext.SaveChanges();
        }

        public GroceryList getGroceryList(int id)
        {
            GroceryList g = _groceryContext.GroceryLists.Where(p => p.GroceryListId == id).FirstOrDefault();
            return g;
        }

        public IList<GroceryList> getAllGroceryLists()
        {
            return _groceryContext.GroceryLists.ToList();
        }

        public void deleteGroceryList(int id)
        {
            GroceryList gdb = _groceryContext.GroceryLists.Where(p => p.GroceryListId == id).FirstOrDefault();
            _groceryContext.GroceryLists.Remove(gdb);
            _groceryContext.SaveChanges();
        }

        public void addGroceryListItem(GroceryList g, Item i)
        {
            GroceryListItem gi = new GroceryListItem();
            gi.GroceryList = g;
            gi.Item = i;
            _groceryContext.GroceryListItems.Add(gi);
            _groceryContext.SaveChanges();
        }
        
        
    }
}
