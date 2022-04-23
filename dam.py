""" read from a SQLite database and return data """
import sqlite3
from flask import Flask, render_template, redirect, url_for, request
from flask_bootstrap import Bootstrap
from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired
from flask_sqlalchemy import SQLAlchemy
import requests
import json
import csv

from streetaddress import StreetAddressFormatter, StreetAddressParser




app = Flask(__name__, static_url_path='')

# the name of the database; add path if necessary
db_name = 'rodman_data.sqlite'

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + db_name

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True

db = SQLAlchemy(app)

app.config['SECRET_KEY'] = 'Dana'

Bootstrap(app)

# each table in the database needs a class to be created for it
# db.Model is required - don't change it
# identify all columns by name and data type
class Street_addresses(db.Model):
    __tablename__ = 'rodman_address_data'
    id = db.Column(db.String, primary_key=True)
    Street = db.Column(db.String)
    CityandZip = db.Column(db.String)
    Fulladdress = db.Column(db.String)
    Latitude = db.Column(db.String)
    Longitude = db.Column(db.String)


def convert_to_dict(filename):
    """
    Convert a CSV file to a list of Python dictionaries
    """
    # open a CSV file - note - must have column headings in top row
    datafile = open(filename, newline='')

    # create DictReader object
    my_reader = csv.DictReader(datafile)

    # create a regular Python list containing dicts
    list_of_dicts = list(my_reader)

    # close original csv file
    datafile.close()

    # return the list
    return list_of_dicts


address_list = convert_to_dict("FULL_RODMAN_DATA_FINAL.csv")


def get_names(source):
    names = []
    for row in source:
        # lowercase all the names for better searching
        name = row["Street"].lower()
        names.append(name)
    return sorted(names)
   

def get_id(source, name):
    for row in source:
        # lower() makes the string all lowercase
        if name.lower() == row["Street"].lower():
            id = row["key_id"]
            # change number to string
            id = str(id)
            # return id if name is valid
            return id
    # return these if id is not valid - not a great solution, but simple
    return "Unknown"
# first route



class NameForm(FlaskForm):
    name = StringField('Find your address', validators=[DataRequired()])
    submit = SubmitField('Submit')

#routes
all_addresses = Street_addresses.query.all()



@app.route('/')
def index():
    addresses = Street_addresses.query.all()
    data = address_list
    names = get_names(address_list)
    # you must tell the variable 'form' what you named the class, above
    # 'form' is the variable name used in this template: index.html
    
    return render_template('index.html', addresses=addresses, data=data, names=names)


@app.route('/<int:address_id>/')
def address(address_id):
    address = Street_addresses.query.get_or_404(address_id)
    data = {'latitude': address.Latitude, 'longitude': address.Longitude, 'address': address.Street}

    return render_template('address.html', address=address, data=data)

@app.route('/wrong')
def wrong():
    return render_template('wrong.html')


# street address cleaner
addr_parser = StreetAddressParser()

def parse_address(name):
    fixed= ""
    addr = addr_parser.parse(name)
    if addr['street_type'] == "road":
        addr['street_type'] = 'rd'
        print( addr['street_type'])

    if addr['street_type'] == "street":
        addr['street_type'] = 'st'
        print( addr['street_type'])

    if addr['street_type'] == "drive":
        addr['street_type'] = 'dr'
        print( addr['street_type'])
    
    if addr['street_type'] == "lane":
        addr['street_type'] = 'ln'
        print( addr['street_type'])
    
    if addr['street_type'] == "court":
        addr['street_type'] = 'ct'
        print( addr['street_type'])
    
    if addr['street_type'] == "trail":
        addr['street_type'] = 'trl'
        print( addr['street_type'])

    fixed = str(addr['house'])+ " "+ str(addr['street_name']) + " " + str(addr['street_type']).strip()
    fixed= fixed.lower()
    fixed= fixed.replace("south","s")
    fixed= fixed.replace("west","w")
    fixed= fixed.replace("east","e")
    fixed= fixed.replace("north","n")


    return fixed

def get_parsed_addresses(names):
    fixed_names = []
    for row in names:
        addr = addr_parser.parse(row)
        fixed_names.append(str(addr['house'])+ " "+ str(addr['street_name']) + " " + str(addr['street_type']).strip())
    return sorted(fixed_names)



@app.route('/search', methods=['GET', 'POST'])
def search():
    addresses = Street_addresses.query.all()
    data = address_list
    names = get_names(address_list)
    parsed_streets = get_parsed_addresses(names)
   
    # you must tell the variable 'form' what you named the class, above
    # 'form' is the variable name used in this template: index.html
    form = NameForm()
    message = ""
    if form.validate_on_submit():
        name = form.name.data
        name= name.lower()
        parsed_name= parse_address(name)
        name = name.replace("road","rd")
        name = name.replace("street","st")
        name = name.replace("drive","dr")
        name = name.replace("lane","ln")
        name = name.replace("court","ct")
        name = name.replace("trail","tl")

        name = name.replace("south","s")
        name = name.replace("east","e")
        name = name.replace("west","w")
        name = name.replace("north","n")

        if parsed_name in parsed_streets:
            # empty the form field
            form.name.data = ""
            id = get_id(address_list, name)
            
         
            # redirect the browser to another route and template
            return redirect(url_for("address", address_id=id) )
        else:
            return redirect(url_for("wrong") )
    return render_template('search.html', addresses=addresses, data=data, names=names, form=form, message=message)
    

if __name__ == '__main__':
    app.run(debug=True)
    address_list = convert_to_dict("FULL_RODMAN_DATA_FINAL.csv")

