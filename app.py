import os
import sys
from cs50 import SQL
from flask import Flask, flash, redirect, render_template, request, session
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
    return render_template("index.html")
    