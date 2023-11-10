from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
import random

app = Flask(__name__)
CORS(app)

# Dummy data for demonstration purposes (replace with actual meal planning logic)
breakfast=["Puttu with kadala curry","Idiyappam with egg curry","Dosai with coconut chutney and sambar","Appam with chicken curry"," Idli with coconut chutney and tomato thokku","Ragi puttu with banana","Wheat dosa with potato curry","Ney pathiri with egg roast","Palappam with vegetable stew","Rava dosa with coconut chutney","Vattayappam with chicken curry","Uthappam with coconut chutney"]
lunch=["Lemon rice with curd","Aviyal with red rice"," Erissery with puliyinchi and rice","Olan with theeyal and brown rice","Koottu curry with red rice","Pineapple pulissery with matta rice","Thoran with sambar rice","Cabbage thoran with red rice","Kaalan with matta rice","Pumpkin erissery with parboiled rice","Chena mezhukkupuratti with rasam rice","Beans thoran with red rice"]
dinner=["Fish molee with steamed rice","Chappathi with Chicken Curry","Chappathi with Paneer butter masala","Wheat Dosa and Sambar","Chappathi with Mushrrom curry","Wheat puttu and kadala curry","Kanji and Payar","Chappathi and Tomato Curry","Chappathi and Beef Curry","Chappathi and egg curry"]

sample_meal_plan = [
    {"day": "Sunday", "Breakfast": random.choice(breakfast), "Lunch": random.choice(lunch), "Dinner": random.choice(dinner)},
    {"day": "Monday", "Breakfast": random.choice(breakfast), "Lunch": random.choice(lunch), "Dinner": random.choice(dinner)},
    {"day": "Tuesday", "Breakfast": random.choice(breakfast), "Lunch": random.choice(lunch), "Dinner": random.choice(dinner)},
    {"day": "Wednesday", "Breakfast": random.choice(breakfast), "Lunch": random.choice(lunch), "Dinner": random.choice(dinner)},
    {"day": "Thursday", "Breakfast": random.choice(breakfast), "Lunch": random.choice(lunch), "Dinner": random.choice(dinner)},
    {"day": "Friday", "Breakfast": random.choice(breakfast), "Lunch": random.choice(lunch), "Dinner": random.choice(dinner)},
    {"day": "Saturday", "Breakfast": random.choice(breakfast), "Lunch": random.choice(lunch), "Dinner": random.choice(dinner)}
]

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/generate_meal_plan', methods=['POST'])
def generate_meal_plan():
    # Retrieve user preferences from the frontend
    user_preferences = request.json

    # Implement your meal planning logic here using Python
    # For simplicity, just returning the sample meal plan
    return jsonify({'meal_plan': sample_meal_plan})

if __name__ == '__main__':
    app.run(debug=True)
