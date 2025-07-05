import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  categories: string[] = [
    'All','Briyani',  
    'Bucket Briyani','Dish'
       
  ];

  selectedCategory = 'All';

  menuItems = [
    { name: 'Mutton Briyani', price: 220, category:'Briyani' },
    { name: 'Chicken Briyani', price: 120, category:'Briyani' },
    { name: 'Chicken 65 Briyani', price: 120, category:'Briyani'},
    { name: 'Nattu Kozhi Briyani', price: 220, category:'Briyani'},
    { name: 'Kadai Briyani', price: 160, category:'Briyani' },
    { name: 'Chicken Tandoori Briyani', price: 180, category:'Briyani'},
    { name: 'Egg Briyani', price: 70, category:'Briyani' },
    { name: 'Kushka Briyani', price: 70, category:'Briyani' },
    { name: 'Beef Briyani', price: 100, category:'Briyani' },
    { name: 'Mutton Briyani(4-5)', price: 1100, category: 'Bucket Briyani' },
    { name: 'Mutton Briyani(7-8)', price: 1700, category: 'Bucket Briyani' },
    { name: 'Mutton Briyani(14-15)', price: 3500, category: 'Bucket Briyani' },
    { name: 'Chicken Briyani(4-5)', price: 650, category: 'Bucket Briyani' },
    { name: 'Chicken Briyani(7-8)', price: 950, category: 'Bucket Briyani' },
    { name: 'Chicken Briyani(14-15)', price: 1900, category: 'Bucket Briyani' },
    { name: 'Beef Briyani(4-5)', price: 600, category: 'Bucket Briyani' },
    { name: 'Beef Briyani(7-8)', price: 950, category: 'Bucket Briyani' },
    { name: 'Beef Briyani(14-15)', price: 1900, category: 'Bucket Briyani' },
    
    { name: 'Chicken 65', price: 100, category: 'Dish' },
    { name: 'Chicken Fry', price: 120, category: 'Dish' },
    { name: 'Beef Fry', price:120 , category: 'Dish' },
    { name: 'Nattukozhi Fry', price: 150, category: 'Dish' },
    { name: 'Chicken Tandoori(Q/H/F)', price: '110/230/440', category: 'Dish' },
    { name: 'kadai Roast', price: 90, category: 'Dish' },
    { name: 'Chicken Lollipop', price: 100, category: 'Dish' },
    { name: 'Finger Fish', price: 100, category: 'Dish' },
    { name: 'Egg Masala', price: 70, category: 'Dish' },
    { name: 'Boiled Egg', price: 15, category: 'Dish' },
    { name: 'Arabaian Grape Juice', price: 50, category: 'Dish' },
    { name: 'Goli Soda', price: 30, category: 'Dish' },
   
    
  
   
  ];
  
  get filteredItems() {
    return this.selectedCategory === 'All'
      ? this.menuItems
      : this.menuItems.filter(item => item.category === this.selectedCategory);
  }
  

  selectCategory(category: string) {
    this.selectedCategory = category;
  }
}
