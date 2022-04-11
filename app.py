import os
import sys
from cs50 import SQL
from flask import Flask, flash, redirect, render_template, request, session, json
from flask_session import Session
from tempfile import mkdtemp
import datetime

# Configures app
app = Flask(__name__)

# To be done later setting permanent session
# session.permanent = True

# To be done later Set session to 1 day
# app.permanent_session_lifetime = datetime.timedelta(days=1)


# Auto reload Templates
app.config["TEMPLATES_AUTO_RELOAD"] = True 

# Configure CS50 library to use SQlite database
db = SQL("sqlite:///moviesmaster.db")

# Set up index page
@app.route("/")
def index():
    movies = db.execute("SELECT title, titleid FROM movielist;")
    todays_movie = movies[0]['title']
    todays_movieid = movies[0]['titleid']
    actors = db.execute("SELECT DISTINCT actornames.name FROM actornames JOIN actors ON actornames.personid = actors.personid JOIN movielist ON actors.titleid = movielist.titleid WHERE movielist.titleid =  (?) LIMIT 5", todays_movieid)
    all_movies = db.execute('SELECT title FROM movielist;')

    return render_template("index.html", todays_movie=todays_movie, actors=actors, all_movies=all_movies)
    