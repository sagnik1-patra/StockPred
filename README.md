# 📈 StockPred — AI-Powered Stock Prediction Dashboard

Welcome to **StockPred**, a futuristic stock prediction system that uses machine learning to forecast the most promising stocks for the next trading day. Built with FastAPI + React + Tailwind + 🔮 RandomForest + 📊 Financial Data.

---


🚀 How to Run Locally
Follow these steps to set up and launch StockPred on your local machine:

1. Clone the Repository
bash
git clone https://github.com/annansadr22/StockPred.git
cd StockPred
2. Train the ML Model
Run this step once to prepare your trained model and preprocess the dataset.

bash
cd stock_api
python train_model.py
Upon successful execution, the following files will be generated:

rf_model.joblib

scaler.joblib

label_encoder.joblib

cleaned_stock_data.csv

These artifacts are essential for AI-based predictions by the FastAPI backend.

3. Start the Backend API (FastAPI)
bash
uvicorn main:app --reload
API runs at: http://127.0.0.1:8000

Swagger API Docs: http://127.0.0.1:8000/docs

4. Start the Frontend (React + Vite)
In a new terminal window:

bash
cd ../frontend
npm install
npm run dev
Open in your browser at: http://localhost:5173

✨ What You Can Do
With StockPred, you can:

Select a historical date 📅 for prediction.

Choose how many stocks to predict (Top N) 🔢.

View AI-driven stock predictions and their associated probabilities 💹.

Enjoy exploring AI-powered investment insights with StockPred!
EOP
