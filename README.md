For the final assignment in Bloc, we were asked to create a grocery list that users can add, update, and delete items from. So far, I implemented the ability to add, update, delete from one list and the ability to sign up and log in. I used React and Material UI for the frontend, Node and Express for the backend, Postgres for the database, and Sequelize as the ORM. Any template for the frontend was from Material UI's documentation and a few handful of unused backend files come from this gist https://gist.github.com/colophonemes/9701b906c5be572a40a84b08f4d2fa4e

The reason for the unused files from the link above is that I tried to implement a trigger and listener on the postgres database for real time updates. Unfortunately, since I have not implemented this before, I ran out of time trying to get it to work. Currently, if another user were to update an item on the list, those updates will show after 30 seconds. While not in real time, I believe it is works for the nature of the app since multiple users will not probably be viewing and updating the grocery lists at the exact same time.

One of the biggest challenges I faced when starting this project was getting the front end to communicate with the backend in production. First, many of the tutorials online for pushing a React/Node app to Heroku were rebuilding the front end everytime when pushing to production. It caused many errors and it took me even longer to find a tutorial that didn't attempt to do this. Second, I couldn't figured out how to get Node's request module to work as expected for a long time so I had to use axios to handle requests. After talking to my mentor, I realized this was a better method anyways as axios is used in many apps. Third, I haven't used React in about 6 months; there were some gotchas that I forgot about that I had to re-learn.

While there are many things I would change about this project, there were a few things I am proud of. I like how simple the interface is and how easy it is to login, sign up, add an item, remove an item, etc. I also did a decent job of organizing my frontend and backend code so that it is somewhat easy to follow and read.

If I were to continue to work on this project, I would:
- Improve the "real time" feature. i.e. Get the triggers & listeners to work
- List items by ID, not if purchased or not
- Add ability to create different lists.
- Add ability to invite certain people to certain lists.
- Write more comprehensive test suites to catch bugs quicker.
