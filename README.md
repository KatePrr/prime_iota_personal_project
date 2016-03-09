Farm Stand Finder
The Client 
March 7, 2016 | Version 1.1
Document Objectives
The purpose of this document is to provide detailed documentation to Beatrice Bartholomew ("The Client") that 
clearly defines the work that Prime Student Kati Lueth ("The Company") will perform and the deliverables you will
 receive within the scope of this project. By accepting this document you acknowledge your understanding and agreement to this scope of work. Any requirement which falls outside the specifications in this document will be considered "Out of Scope" and may require reprioritization or removal of other features to implement.

This document takes precedence over any other documentation provided regarding scope of work.
Scope of Work Feature Details
Farm Stand Finder will be a full stack web application for use in browsers as well as mobile friendly. The purpose 
of this application is to provide The Client an application that will compile smaller, local food distribution market 
data into an easily accessible, scalable and user friendly platform. Currently, there is no way to locate or access 
information about individually owned or operated farm stands in Minnesota. The Farm Stand Finder application will 
provide critical data for The Client and connect consumers with fresh, local produce and the farmers who grow it. 

Features
Login
Users will be required to login for use of the Favorites and Add New features. For application simplicity and 
efficiency Google Authentication with Passport will be used. An Admin will be assigned to oversee application data. 
The search function will be accessible to a general audience without logging in. 
Search Field
Users will be able to use the search field on the homepage to find vendors by zip code, vendor name, or product. 
Search criteria will be entered into the form field on the Homepage, the user will select the type of search from a 
dropdown menu containing zip code, vendor name, or product. Upon selection the form will be submitted.

The National Farmers Market Directory API and user-submitted data in a Mongo database will be queried via the search
 function.

Results will be displayed below the search field of the home page in a list emphasizing the name. A thumbnail map 
will be included in each result. When the title of a search result item is clicked the container will expand 
revealing the detailed information available about the vendor. 
Map Viewq
Upon clicking on the ‘Map View’ button, a map displaying the entirety of search results will displayed on a map of 
70% of page view. Google Maps API will be the source of the map and thumbnails.  
Add New
Registered users will be able to add new vendors to the database. The Add New page contains a form with fields 
including vendor name, farm name, location, products, about, last-seen, phone, payment, association and url. When 
the submit button is clicked an alert box will notify the user that the form has been successfully submitted.The 
form information will be emailed to the Admin and upon approval entered into the database. 


Responsive Design
Adhere to a responsive web design approach to optimize user experience across different screen sizes.


Stretch goals:
Favorites
Users will be able to save favorites and view in a ‘favorites’ page. A ‘favorite’ button will be associated with
 each vendor. Upon clicking, the vendor will be added to the ‘favorites’ page.  
Page animations 
Improve overall site styling to include page animations on page and/or element transitions. 
Related API
Include a related api with information about local vendors and/or food systems. Examples include CSAs, U-Pick 
farms, home-based small food businesses, ranches etc.

Comments 
A comment button and field will be added to allow registered users to add a short (up to140 characters) comment 
to any database entry that will appear when user clickes the ‘details’ button of the entry.
Ratings
A 5 carrot rating system will be available for registered users to rate each entry in the database.

Social Media
A hashtag, instagram, twitter and pinterest link will be displayed on the navbar connected to related accounts.


Project Milestones
If approval of this Scope of Work is received by The Company no later than March 9, 2016 at 3pm, development 
shall become effective on March 10, 2016, and the following deadlines will become effective. Changes, if necessary, 
will be reported by Kati via email to Kris, Antoinette, and Casie. The Client acknowledged and agrees that The 
Client's failure to adhere to deadlines (including, but not limited to: <things>) will impact The Company's deadlines
 and estimated cost and, in such instances, The Company will not be responsible for missed deadlines, including 
 final delivery/deployment, and increased costs and expenses.


Milestone
Responsibility
Date
Submit for Approval
Kati
3/8
Finalize SOW & Mockups
Kati
3/9
Project skeleton setup, database setup
Kati
3/9
Templates setup
Kati
3/11
Working Database and API connections
Kati
3/11
Google Maps API working
Kati
3/14
Styling review & approval 
Kati
3/16
Final Review
Kati
3/17
Submit Project
Kati
3/18
Browsers
Application will fully support only the below listed browsers and QA will test only in the following browsers and 
versions. All browsers or versions not listed below are considered out of scope.

Browser Name
Version
Chrome


Schedule/Meetings

Event
Date
Time
Approval Meeting
3/9/2016


Review
3/16/2016


Submission Deadline
3/18/2016



Assumptions
While completing this estimate the following assumptions were made.
AngularJS
jQuery
JavaScript
MongoDB
Mongoose
Express
Passport
Node.js
GitHub
Heroku
USDA National Farmers Market Directory
Google Maps API
Source Code
All source code produced by The Company for this project will be provided to The Client via… The Client is free to 
work with other service providers on future modifications to the project utilizing the provided source code unless 
otherwise stipulated.
Approvals
Client Signature _____________________________________

Client Name (printed) _________________________________

If approval of this Scope of Work is received by The Company no later than March 9, 2016 at 3pm, development shall 
begin by March 10, 2016.



