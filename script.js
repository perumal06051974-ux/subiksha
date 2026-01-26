<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>General Knowledge Quiz</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        .login-container, .quiz-container {
            background-color: white;
            padding: 30px 40px;
            border-radius: 12px;
            box-shadow: 0 0 15px rgba(0,0,0,0.2);
            width: 500px;
            text-align: center;
        }
        .login-container input {
            width: 80%;
            padding: 10px;
            margin: 8px 0;
            border-radius: 8px;
            border: 1px solid #ccc;
            font-size: 16px;
        }
        .login-container button {
            width: 50%;
            padding: 10px;
            margin-top: 10px;
            font-size: 16px;
            border-radius: 8px;
            border: none;
            background-color: #4CAF50;
            color: white;
            cursor: pointer;
        }
        .login-container button:hover {
            background-color: #45a049;
        }
        h2 {
            margin-bottom: 20px;
        }
        .options button {
            display: block;
            width: 100%;
            margin: 8px 0;
            padding: 12px;
            font-size: 16px;
            border-radius: 8px;
            border: none;
            cursor: pointer;
            transition: 0.2s;
        }
        .options button:hover {
            background-color: #ddd;
        }
        #nextBtn {
            margin-top: 15px;
            background-color: #4CAF50;
            color: white;
            padding: 10px 20px;
            font-size: 16px;
            border-radius: 8px;
            border: none;
            cursor: pointer;
        }
        #nextBtn:hover {
            background-color: #45a049;
        }
    </style>
</head>
<body>

<!-- Login Form -->
<div class="login-container">
    <h2>Login</h2>
    <input type="text" id="username" placeholder="Enter username">
    <input type="password" id="password" placeholder="Enter password">
    <button onclick="login()">Login</button>
    <p id="login-msg" style="color:red;"></p>
</div>

<!-- Quiz Container -->
<div class="quiz-container" style="display:none;">
    <h2 id="question">Question will appear here</h2>
    <div class="options">
        <button id="a" onclick="checkAnswer(this)">Option A</button>
        <button id="b" onclick="checkAnswer(this)">Option B</button>
        <button id="c" onclick="checkAnswer(this)">Option C</button>
        <button id="d" onclick="checkAnswer(this)">Option D</button>
    </div>
    <button id="nextBtn" onclick="nextQuestion()">Next</button>
</div>

<script src="script.js"></script>
</body>
</html>