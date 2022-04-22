from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

# the name of the database; add path if necessary
db_name = 'rodman_data.sqlite'

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + db_name

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True

# this variable, db, will be used for all SQLAlchemy commands
db = SQLAlchemy(app)

# each table in the database needs a class to be created for it
# db.Model is required - don't change it
# identify all columns by name and data type
class Sock(db.Model):
    __tablename__ = 'rodman_address_data'
    id = db.Column(db.String, primary_key=True)
    Street = db.Column(db.String)
    CityandZip = db.Column(db.String)
    Fulladdress = db.Column(db.String)
    Latitude = db.Column(db.String)
    Longitude = db.Column(db.String)



   
#routes
@app.route('/')
def index():
    try:
        socks = Sock.query.order_by(Sock.Street).all()
        sock_text = '<ul>'
        for sock in socks:
            sock_text += '<li>' + sock.Street + '</li>'
        sock_text += '</ul>'
        return sock_text
    except Exception as e:
        # e holds description of the error
        error_text = "<p>The error:<br>" + str(e) + "</p>"
        hed = '<h1>Something is broken.</h1>'
        return hed + error_text

if __name__ == '__main__':
    app.run(debug=True)
