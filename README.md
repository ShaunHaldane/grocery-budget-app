# grocery-budget-app


Grocery Budget App

You come home with bags full of shopping because today you just bought your groceries for the rest of the week. As you put them in the fridge you notice that about a quarter of last weeks vegetables are still there and are not really looking edible any more. As you throw them in the bin you wander “how much money do I waste on food which I don't eat?”. 

I needed to answer this question for myself so I decided to create the Grocery Budget App. 



Requirements

This app:

Provides a graphic to show the user how much they are spending/wasting on food for each month
Provides a graphic to show the user how much they are spending/wasting on certain types of food
Lets the user know what food is left in their fridge/cupboards


Project Design

Figure 1 is the database design of the Grocery Budget App. To keep user details secure I created a role based authentication system using JWT. Each user has a one to many relationship with item.

Figure 1: ER-Diagram of Grocery Budget App.


After signing up and signing in to the app, the user is taken to the dashboard which will be empty because there are no items in stock. Options to add items and view graphics for spend data appear on the navbar as shown in figure 2.


Figure 2: Navbar After User has Signed in.

To add items the user must click on the add item button and fill in the details shown in figure 3. The user can use whatever currency they like as long as they are consistent.




Figure 3: Add Item Screen.

Once the submit button is clicked and submission is confirmed the item will appear in the dashboard as shown in figure 4.

Figure 4:Dashboard.

As more items are added to the inventory they are sorted by expiry date in ascending order as shown in figure 5.  


Figure 5: Dashboard with Items.

Once the user would like to know how much they have spent/wasted on their grocery items per year they can select the “spend this year” button on the navbar and they will be taken to the screen shown in figure 6. 

Figure 6: Total Spent/Wasted/Used Graphic.

The user can also see how much they have spent/wasted on each item as shown in figure 7 by clicking the “spend per item” button on the navbar.
Figure 7: Total Spent per Item Graphic.

Results

After using the app for a while I have been exposed to the amount of groceries that I am wasting. This application has helped me to think closely about the quantity of food I am buying and when the food should be used. When I get an indication to use the food from the application I am reminded that food needs to be used and I will plan my next meals accordingly. Since using the application my fridge contains a less food and my wallet contains more money.

Conclusion

I built an application to calculate how much money I am spending/wasting on food. I provided details on the user flow of the application in this post. After using the application for some time I have saved money and reduced my food waste. I hope that people will sign up to the Grocery Budget App to help them save some money on their groceries.

