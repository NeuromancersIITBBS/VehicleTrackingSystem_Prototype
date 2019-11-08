from flask import Flask, jsonify
from flask_cors import CORS

# app = Flask(__name__, template_folder="")
app=Flask(__name__)
CORS(app)

posts = [
[{ "permissions": [
  "http://www.google.com/",
  "https://www.google.com/"
],"latitude": "20.143341","longitude": "85.674471","seatsAvailable": "5"},{"latitude": "20.143341","longitude": "85.674471","seatsAvailable": "5"},{"latitude": "20.143341","longitude": "85.674471","seatsAvailable": "5"}],

[{ "permissions": [
  "http://www.google.com/",
  "https://www.google.com/"
],"latitude": "20.1475507","longitude": "85.6725238","seatsAvailable": "5"},{"latitude": "20.1475507","longitude": "85.6725238","seatsAvailable": "5"},{"latitude": "20.1475507","longitude": "85.6725238","seatsAvailable": "5"}],

[{"permissions": [
  "http://www.google.com/",
  "https://www.google.com/"
], "latitude": "20.1475507","longitude": "85.6725238","seatsAvailable": "5"},{"latitude": "20.1475507","longitude": "85.6725238","seatsAvailable": "5"},{"latitude": "20.1475507","longitude": "85.6725238","seatsAvailable": "5"}],

[{"latitude": "20.1454433","longitude": "85.6743883","seatsAvailable": "5"},{"latitude": "20.1454433","longitude": "85.6743883","seatsAvailable": "5"},{"latitude": "20.1454433","longitude": "85.6743883","seatsAvailable": "5"}],

[{"latitude": "20.1454433","longitude": "85.6743883","seatsAvailable": "5"},{"latitude": "20.1454433","longitude": "85.6743883","seatsAvailable": "5"},{"latitude": "20.1454433","longitude": "85.6743883","seatsAvailable": "5"}],

[{"latitude": "20.1434275","longitude": "85.679052","seatsAvailable": "5"},{"latitude": "20.1434275","longitude": "85.679052","seatsAvailable": "5"},{"latitude": "20.1434275","longitude": "85.679052","seatsAvailable": "5"}],


[{"latitude": "20.1435385","longitude": "85.6788858","seatsAvailable": "5"},{"latitude": "20.1435385","longitude": "85.6788858","seatsAvailable": "5"},{"latitude": "20.1435385","longitude": "85.6788858","seatsAvailable": "5"}],



[{"latitude": "20.1435385","longitude": "85.6788858","seatsAvailable": "5"},{"latitude": "20.1435385","longitude": "85.6788858","seatsAvailable": "5"},{"latitude": "20.1435385","longitude": "85.6788858","seatsAvailable": "5"}],

[{"latitude": "20.1443677","longitude": "85.6787434","seatsAvailable": "5"},{"latitude": "20.1443677","longitude": "85.6787434","seatsAvailable": "5"},{"latitude": "20.1443677","longitude": "85.6787434","seatsAvailable": "5"}],


[{"latitude": "20.1447815","longitude": "85.6786787","seatsAvailable": "5"},{"latitude": "20.1447815","longitude": "85.6786787","seatsAvailable": "5"},{"latitude": "20.1447815","longitude": "85.6786787","seatsAvailable": "5"}],


[{"latitude": "20.145536","longitude": "85.6788843","seatsAvailable": "5"},{"latitude": "20.145536","longitude": "85.6788843","seatsAvailable": "5"},{"latitude": "20.145536","longitude": "85.6788843","seatsAvailable": "5"}],


[{"latitude": "20.145536","longitude": "85.6788843","seatsAvailable": "5"},{"latitude": "20.145536","longitude": "85.6788843","seatsAvailable": "5"},{"latitude": "20.145536","longitude": "85.6788843","seatsAvailable": "5"}],


[{"latitude": "20.1461364,","longitude": "85.6788176","seatsAvailable": "5"},{"latitude": "20.1461364,","longitude": "85.6788176","seatsAvailable": "5"},{"latitude": "20.1461364,","longitude": "85.6788176","seatsAvailable": "5"}],

[{"latitude": "20.146813","longitude": "85.6787612","seatsAvailable": "5"},{"latitude": "20.146813","longitude": "85.6787612","seatsAvailable": "5"},{"latitude": "20.146813","longitude": "85.6787612","seatsAvailable": "5"}],


[{"latitude": "20.1466034","longitude": "85.6789232","seatsAvailable": "5"},{"latitude": "20.1466034","longitude": "85.6789232","seatsAvailable": "5"},{"latitude": "20.1466034","longitude": "85.6789232","seatsAvailable": "5"}],


[{"latitude": "20.1466034","longitude": "85.6789232","seatsAvailable": "5"},{"latitude": "20.1466034","longitude": "85.6789232","seatsAvailable": "5"},{"latitude": "20.1466034","longitude": "85.6789232","seatsAvailable": "5"}],


[{"latitude": "20.1470571","longitude": "85.6788216","seatsAvailable": "5"},{"latitude": "20.1470571","longitude": "85.6788216","seatsAvailable": "5"},{"latitude": "20.1470571","longitude": "85.6788216","seatsAvailable": "5"}],
[{"latitude": "20.1470571","longitude": "85.6788216","seatsAvailable": "3"},{"latitude": "20.1470571","longitude": "85.6788216","seatsAvailable": "3"},{"latitude": "20.1470571","longitude": "85.6788216","seatsAvailable": "3"}],
[{"latitude": "20.1470571","longitude": "85.6788216","seatsAvailable": "3"},{"latitude": "20.1470571","longitude": "85.6788216","seatsAvailable": "3"},{"latitude": "20.1470571","longitude": "85.6788216","seatsAvailable": "3"}],
[{"latitude": "20.1470571","longitude": "85.6788216","seatsAvailable": "2"},{"latitude": "20.1470571","longitude": "85.6788216","seatsAvailable": "2"},{"latitude": "20.1470571","longitude": "85.6788216","seatsAvailable": "2"}],

[{"latitude": "20.1457338","longitude": "85.6794463","seatsAvailable": "2"},{"latitude": "20.1457338","longitude": "85.6794463","seatsAvailable": "2"},{"latitude": "20.1457338","longitude": "85.6794463","seatsAvailable": "2"}],
[{"latitude": "20.1457338","longitude": "85.6794463","seatsAvailable": "2"},{"latitude": "20.1457338","longitude": "85.6794463","seatsAvailable": "2"},{"latitude": "20.1457338","longitude": "85.6794463","seatsAvailable": "2"}],
[{"latitude": "20.1457338","longitude": "85.6794463","seatsAvailable": "1"},{"latitude": "20.1457338","longitude": "85.6794463","seatsAvailable": "1"},{"latitude": "20.1457338","longitude": "85.6794463","seatsAvailable": "1"}],
[{"latitude": "20.1457338","longitude": "85.6794463","seatsAvailable": "1"},{"latitude": "20.1457338","longitude": "85.6794463","seatsAvailable": "1"},{"latitude": "20.1457338","longitude": "85.6794463","seatsAvailable": "1"}]

]

class count:
	def __init__(self,post):
		self.count=0
		self.dir=1
		self.post=post
		self.limit=len(post)
	def get(self):
		if(self.count==0):
			self.dir=1
			self.count=0
			self.count+=self.dir
			return jsonify(self.post[self.count-1])
		elif(self.count<self.limit):
			self.count+=self.dir
			return jsonify(self.post[self.count-1])
		else:
			self.dir=-1
			self.count+=self.dir
			return jsonify(self.post[self.count-1])



c=count(posts)

@app.route("/")
@app.route("/home")
def hello():
	# return render_template('home.html', posts=posts)
	return c.get()


if __name__ == '__main__':
	app.run(debug=True)