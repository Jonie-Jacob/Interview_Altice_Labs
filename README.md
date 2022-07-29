# Interview_Altice_Labs
Front end exercise for Altice Labs interview

General Considerations 
Solve the following problem, using the JavaScript programming language, advanced techniques and best programming practices that you know, the result can be presented in a console or in an html page, giving preference to the latter. 

The project must be delivered to a public repository on GitHub. You should bear in mind that the code will be analyzed in two ways: 

• Manually, through the analysis of the solution's elegance (algorithm), technique, programming style, consistency, documentation, among others. 

• For the automatic execution of a set of unit tests in order to assess the effectiveness and efficiency of the solution, as well as its behavior under error conditions. 

The presented solution must have unit tests and must be suitable for high availability and intensive use scenarios.


Using the following API end-points: 

• https://jsonplaceholder.typicode.com/users 

• https://jsonplaceholder.typicode.com/posts 


Builds a Letter that has a method called get and that internally: 

A) Coordinate API requests; 

B) Error handling the same orders; 

C) And based on the API responses, build and return an array of objects with the following structure: 

[
  { 
     "id": 1, 
     "name": "Leanne Graham", 
     "username": "Bret", 
     "email" : "Sincere@april.biz", 
     "address": "Kulas Light, Apt. 556 - 92998-3874 Gwenborough", 
     "phone": "1-770-736-8031 x56442", 
     "website": "hildegard.org ", 
     "company": "Romaguera-Crona", 
     "posts": [ 
                 { 
                   "id": 1, 
                   "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit", "body": "quia et suscipit\nscipit refusndae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto" 
                 } 
     ] 
 }, 
 ... 
]

