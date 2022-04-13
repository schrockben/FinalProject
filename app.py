import os
import sys
from cs50 import SQL
from flask import Flask, flash, redirect, render_template, request, session, json, make_response
from flask_session import Session
from tempfile import mkdtemp
import datetime

# Configures app
app = Flask(__name__)
app.config['SECRET_KEY'] = 'khDfhaidn3862Dhfgjkdakdnloaiy8'

# To be done later setting permanent session
# session.permanent = True

# To be done later Set session to 1 day
# app.permanent_session_lifetime = datetime.timedelta(days=1)


# Auto reload Templates
app.config["TEMPLATES_AUTO_RELOAD"] = True 

# Configure CS50 library to use SQlite database
db = SQL("sqlite:///moviesmaster.db")

#Set session
@app.route("/set")
def setcookie():
    resp = make_response(redirect("/splash"))
    resp.set_cookie('user', 'returning') # set initial cookie if user has been here before
    resp.set_cookie('streak', '0') # set streak to 0
    resp.set_cookie('total', '0') # set total number of plays
    return resp


    # framework = request.cookies.get('framework')

@app.route("/splash")
def splash():

    return render_template("splash.html")
    

# Set up index page
@app.route("/")
def index():
    framework = request.cookies.get('user')
    if framework != 'returning':
        return redirect('/set')
    else:
        movies = db.execute("SELECT title, titleid FROM movielist;")
        todays_movie = movies[2]['title']
        todays_movieid = movies[2]['titleid']
        actors = db.execute("SELECT DISTINCT actornames.name FROM actornames JOIN actors ON actornames.personid = actors.personid JOIN movielist ON actors.titleid = movielist.titleid WHERE movielist.titleid =  (?) AND (actornames.category = 'actor' OR actornames.category = 'actress') LIMIT 4", todays_movieid)
        all_movies = db.execute('SELECT title FROM movielist;')

        return render_template("index.html", todays_movie=todays_movie, actors=actors, all_movies=all_movies)


    