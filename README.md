#[Logged](https://github.com/pasindud/Logged)
***

Logged is a realtime Log monitor tool | web app for a log stream, NO Databases , just push  and it will work. Can be used to debug programs, the url can be shared with anyone to watch incomming logs.

Live is on - [http://logged.herokuapp.com](http://logged.herokuapp.com)

You can also browse to  http://logged.herokuapp.com/_soemthing_ to make your own custom path

####POST the following JSON to the mentioned URL to view the logs 

    {
        log:" { your log details } " ,
        time:"the log time here",
        level : " log level INFO || WARNING  "
    }

#### Following are the modules and libs used


* [Express.js](http://expressjs.com) - Node.js Web Framework
* [Jade](http://jade-lang.com/) -  Templating Engine
* [Twitter Bootstrap](http://twitter.github.com/bootstrap/) -  CSS Framework
* [Flat UI](https://github.com/designmodo/Flat-UI) -  CSS Framework
* [Socket.io](http://socket.io/) - Library for realtime applications
* [Datatables](http://datatables.net/) - Library for sortable, paging and searchable tables