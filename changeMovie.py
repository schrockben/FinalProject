from flask import Flask, flash, redirect, render_template
import datetime

todaysDate = datetime.date.today()
startDate = datetime.date(2022, 4, 18)
difference = todaysDate - startDate
x = int(difference.days)
