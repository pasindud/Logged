#[Logged](https://github.com/pasindud/Logged)
***

Logged is a realtime Log monitor tool | web app for a log stream, NO Databases , just push  and it will work. Can be used to debug programs, the url can be shared with anyone to watch incomming logs.

Live on - [http://logged.herokuapp.com](http://logged.herokuapp.com)

You can also browse to  http://logged.herokuapp.com/_something_ to make your own custom path
***
####POST the following JSON to the mentioned URL to view the logs 

    {
        log:" { your log details } " ,
        time:"the log time here",
        level : " log level INFO || WARNING  "
    }
***
#### Following are the modules and libs used


* [Express.js](http://expressjs.com) - Node.js Web Framework
* [Jade](http://jade-lang.com/) -  Templating Engine
* [Twitter Bootstrap](http://twitter.github.com/bootstrap/) -  CSS Framework
* [Flat UI](https://github.com/designmodo/Flat-UI) -  CSS Framework
* [Socket.io](http://socket.io/) - Library for realtime applications
* [Datatables](http://datatables.net/) - Library for sortable, paging and searchable tables
***


####Installation & Setup
This assumes you already have node.js & npm installed.

```
git clone https://github.com/pasindud/Logged
cd Logged
npm install
node app
browse to http://localhost:3000 || Or the port shown on the console
```


####Sample PHP Log Code

    <?php
    
         $log=array("log"=>"Logges Here","level"=>"1002","time"=>"12.1002");

         sendrequestLogged( json_encode($log));
  
         function sendrequestLogged($jsonstream){
             $ch = curl_init("http://logged.herokuapp.com/1001");
             curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
             curl_setopt($ch, CURLOPT_POST, 1);
             curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
             curl_setopt($ch, CURLOPT_POSTFIELDS,$jsonstream);
             curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
             $res = curl_exec($ch);
             curl_close($ch);
          }
         
    ?>

****
Tested on Firefox 22v and Chrome 27v
***
## License

(The MIT License)

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

