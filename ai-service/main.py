from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI(
    title="GramFlow AI Service",
    description="AI Service for Cash Flow Prediction and Risk Flagging",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class CashFlowPredictionRequest(BaseModel):
    enterprise_id: str
    months: int = 3

@app.get("/")
def read_root():
    return {"message": "Welcome to GramFlow AI Service"}

@app.post("/predict/cashflow")
def predict_cashflow(request: CashFlowPredictionRequest):
    # Mock response for cashflow
    return {
        "enterprise_id": request.enterprise_id,
        "prediction_months": request.months,
        "predictions": [
            {"month": 1, "predicted_cashflow": 15000, "confidence": 0.85},
            {"month": 2, "predicted_cashflow": 16000, "confidence": 0.82},
            {"month": 3, "predicted_cashflow": 14500, "confidence": 0.79}
        ]
    }

class RiskPredictionRequest(BaseModel):
    enterprise_id: str
    current_debt: float
    monthly_income: float
    monthly_expense: float
    weather_alert: bool

@app.post("/predict/risk")
def predict_risk(request: RiskPredictionRequest):
    # Mock XGBoost / SHAP explanation logic
    risk_level = "High" if (request.monthly_expense > request.monthly_income or request.weather_alert) else "Low"
    score = 85.5 if risk_level == "High" else 20.0
    
    shap_explanations = [
        {"feature": "weather_alert", "impact": "+30.0", "description": "Incoming severe drought warning increases risk."} if request.weather_alert else {"feature": "weather_alert", "impact": "-5.0", "description": "Favorable weather conditions."},
        {"feature": "debt_ratio", "impact": "+15.2" if request.current_debt > 50000 else "-10.0", "description": "Debt to income ratio is critical."}
    ]

    return {
        "enterprise_id": request.enterprise_id,
        "risk_score": score,
        "risk_level": risk_level,
        "shap_explanations": shap_explanations,
        "recommendation": "Consider restructuring your loan or delaying capital expenditures this month." if risk_level == "High" else "Maintain current financial strategy."
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
