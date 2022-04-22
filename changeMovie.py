from flask import Flask, flash, redirect, render_template
import datetime

todaysDate = datetime.date.today()
startDate = datetime.date(2022, 4, 17)
difference = todaysDate - startDate
x = int(difference.days)