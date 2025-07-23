import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import StandardScaler, LabelEncoder
from sklearn.model_selection import train_test_split
from joblib import dump

# === Load Raw CSV ===
csv_path = r"D:\SaAn\stock_api\all_stocks_5yr.csv"
print("📦 Loading CSV...")
df = pd.read_csv(csv_path)

# === Feature Engineering ===
print("⚙️ Preprocessing...")
df['date'] = pd.to_datetime(df['date'])
df.sort_values(['Name', 'date'], inplace=True)

df['daily_return'] = df.groupby('Name')['close'].pct_change()
df['5day_ma'] = df.groupby('Name')['close'].rolling(window=5).mean().reset_index(0,drop=True)
df['10day_ma'] = df.groupby('Name')['close'].rolling(window=10).mean().reset_index(0,drop=True)
df['future_return'] = df.groupby('Name')['close'].shift(-1) / df['close'] - 1
df['target'] = (df['future_return'] > 0).astype(int)
df.dropna(inplace=True)

# === Encode Stock Name ===
le = LabelEncoder()
df['Name_encoded'] = le.fit_transform(df['Name'])

# === Train Model ===
features = ['Name_encoded', 'daily_return', '5day_ma', '10day_ma']
X = df[features]
y = df['target']

X_train, _, y_train, _ = train_test_split(X, y, test_size=0.2, shuffle=False)

scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)

print("🚀 Training Model...")
model = RandomForestClassifier(n_estimators=200, random_state=42)
model.fit(X_train_scaled, y_train)

# === Save Artifacts ===
print("💾 Saving model artifacts...")
dump(model, "rf_model.joblib")
dump(scaler, "scaler.joblib")
dump(le, "label_encoder.joblib")
df.to_csv("cleaned_stock_data.csv", index=False)

print("✅ Done. Artifacts saved.")
