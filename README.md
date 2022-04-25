# High Hazard 
Live website:
https://wuft-dam-project.herokuapp.com/

Dana Cassidy built this application for WUFT in supplement to the main reporting and writing done by Alan Halaly.

##### This project is hosted on a heroku site but attached to the main reporting published by WUFT. Please contact danacassidy1@gmail.com for further questions about implementation if republishing the primary story and this project in your news outlet. 

TLDR; This is a full-stack application that relies on flask to generate a 3D "scrollytelling" map and postgresql interactive database. 

## Primary technologies used:
 - "Scrollytelling" 3D map template from Mapbox: https://demos.mapbox.com/scrollytelling/
 - Flask/Jinja
 - Postgresql and Sqlite
 - JQuery and intersection obsever
 - Heroku
 - Python address parsing library
 - A little bit of bootstrap

## About the project and reporting:
"Half a century ago, the great environmental awakening that swept Florida and the nation helped stop the Cross-Florida Barge Canal.

But the project’s last remnant, Rodman Dam on the Ocklawaha River, still stands, entangled in political discourse as residents continue to use the area recreationally. The aging dam threatens more than ecosystems.

State officials acknowledge that, amid worsening storms and extreme rains associated with climate change, the dam is now at a high risk of breaching—endangering hundreds of rural homeowners who live nearby.

Officials haven't yet notified families of the risk, and activists worry about the dam causing potential loss of not only marine life but human life as well if the dam isn't fixed or taken down."

## How I built it:

This project served as my final senior project for Advanced Web Applications (server side) at the University of Florida. I built everything by myself, starting with a flask app, then building a sqlite database and connecting it to WTForms and finally converting it to Postgresql to connect to Heroku. I was inspired to use the 3D Mapbox "Scrollytelling" template after viewing a ProPublica article that used the same template. 

The database responds correctly to both "road" vs "rd", "street" vs "st", etc. as well as "North" vs "N", etc. inputs. I was able to achieve this using a Python address parsing library and relying on dictionaries to break up the parts of speech and place them back together in a way that matches the strings in a DB-turned-CSV.

I developed the website completely by myself, outside of the written content and some color/font suggestions from a designer. It took me about a week to build, as I had to learn how to input and customize the 3D template, figure out how to make the search aspect dynamic, use proper Git and Heroku CLI/deployment, convert my database to PostgreSQL, and other challenging design aspects.

If you have any questions about my building process and/or my work as a full-stack newsroom developer, please feel free to contact me at danacassidy1@gmail.com. 
