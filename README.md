# Massdrop Internship Challenge

Task:

> Create a job queue whose workers fetch data from a URL and store the results in a database.  The job queue should expose a REST API >for adding jobs and checking their status / results.
>
>Example:
>
>User submits www.google.com to your endpoint.  The user gets back a job id. Your system fetches www.google.com (the result of which >would be HTML) and stores the result.  The user asks for the status of the job id and if the job is complete, he gets a response that >includes the HTML for www.google.com

I implemented this so that the user is provided an HTML web interface to perform tasks. Requires MongoDB.

# Setup

Install dependencies:

> $ npm install

> "dependencies": {
    "express": "^4.15.2",
    "mongoose": "^4.9.7",
    "path": "^0.12.7",
    "pug": "^2.0.0-beta.12",
    "request": "^2.81.0"
  }

# Run

Run MongoDB:

> $ mongod

Run index.js:

> $ node index.js

Access server at: 

> localhost:3000

or open html/index.html

# Use

> localhost:3000/

![](http://i.imgur.com/mUVdZen.png)

> /response_page

![](http://i.imgur.com/NQECphO.png)

> /status

![](http://i.imgur.com/SSXZ66b.png) ![](http://i.imgur.com/FReBKiA.png)

> (error messages)

![](http://i.imgur.com/0FAA3ey.png) ![](http://i.imgur.com/auOGglT.png)


