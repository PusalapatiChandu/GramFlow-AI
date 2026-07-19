package com.gramflow.backend.service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import java.util.Map;

@Service
public class AiServiceClient {

    private final String AI_SERVICE_URL = "http://localhost:8000";
    private final RestTemplate restTemplate = new RestTemplate();

    public Map<String, Object> getRiskPrediction(String enterpriseId, double currentDebt, double income, double expense, boolean weatherAlert) {
        String url = AI_SERVICE_URL + "/predict/risk";
        
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        String requestJson = String.format(
            "{\"enterprise_id\":\"%s\", \"current_debt\":%f, \"monthly_income\":%f, \"monthly_expense\":%f, \"weather_alert\":%b}",
            enterpriseId, currentDebt, income, expense, weatherAlert
        );

        HttpEntity<String> entity = new HttpEntity<>(requestJson, headers);

        ResponseEntity<Map> response = restTemplate.postForEntity(url, entity, Map.class);
        return response.getBody();
    }
}
