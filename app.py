import os
import sys
from cs50 import SQL
from flask import Flask, flash, redirect, render_template, request, session, json, make_response
from flask_session import Session
from tempfile import mkdtemp
import datetime
import schedule

# Configures app
app = Flask(__name__)

# Auto reload Templates
app.config["TEMPLATES_AUTO_RELOAD"] = True 

# Configure CS50 library to use SQlite database
db = SQL("sqlite:///moviesmaster.db")

# Set up index page
@app.route("/")
def index():
    todaysDate = datetime.date.today()
    startDate = datetime.date(2022, 4, 15)
    difference = todaysDate - startDate
    x = difference.days
    movies = db.execute("SELECT title, titleid FROM movielist;")
    todays_movie = movies[x]['title']
    todays_movieid = movies[x]['titleid']
    actors = db.execute("SELECT DISTINCT actornames.name FROM actornames JOIN actors ON actornames.personid = actors.personid JOIN movielist ON actors.titleid = movielist.titleid WHERE movielist.titleid =  (?) AND (actornames.category = 'actor' OR actornames.category = 'actress') LIMIT 4", todays_movieid)
    all_movies = db.execute('SELECT title FROM movielist;')
    date = datetime.date.today()

    return render_template("index.html", todays_movie=todays_movie, actors=actors, all_movies=all_movies, date=date)



    