from cs50 import SQL
from flask import Flask, flash, redirect, render_template
import datetime
from changeMovie import x

# Configures app
app = Flask(__name__)

# Auto reload Templates
app.config["TEMPLATES_AUTO_RELOAD"] = True 

# Configure CS50 library to use SQlite database
db = SQL("sqlite:///movies.db")

# Set up index page
@app.route("/")
def index():
    movies = db.execute("SELECT title, titleid FROM movielist;")
    todays_movie = movies[x]['title']
    todays_movieid = movies[x]['titleid']
    actors = db.execute("SELECT DISTINCT actornames.name FROM actornames JOIN actors ON actornames.personid = actors.personid JOIN movielist ON actors.titleid = movielist.titleid WHERE movielist.titleid =  (?) AND (actornames.category = 'actor' OR actornames.category = 'actress') LIMIT 4", todays_movieid)
    all_movies = db.execute('SELECT title FROM movielist;')
    date = datetime.date.today()
    if len(actors) == 1:
        actors.append({'name': 'No other actors/actresses'})

    if len(actors) == 2:
        actors.append({'name': 'No other actors/actresses'})
        actors.append({'name': 'No other actors/actresses'})

    if len(actors) == 3:
        actors.append({'name': 'No other actors/actresses'})



    return render_template("index.html", todays_movie=todays_movie, actors=actors, all_movies=all_movies, date=date)

@app.route("/😭😭😭😭")
def sendItBack():
    return redirect("/")

@app.route("/🎞️◻️◻️◻️")
def sendItBack1():
    return redirect("/")

@app.route("/😭🎞️◻️◻️")
def sendItBack2():
    return redirect("/")

@app.route("/😭😭🎞️◻️")
def sendItBack3():
    return redirect("/")

@app.route("/😭😭😭🎞️")
def sendItBack4():
    return redirect("/")
    