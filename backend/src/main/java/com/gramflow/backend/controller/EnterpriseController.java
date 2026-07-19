package com.gramflow.backend.controller;

import com.gramflow.backend.entity.Enterprise;
import com.gramflow.backend.repository.EnterpriseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/enterprises")
@CrossOrigin(origins = "*") // Allow frontend access during dev
public class EnterpriseController {

    @Autowired
    private EnterpriseRepository enterpriseRepository;

    @Autowired
    private com.gramflow.backend.repository.FinancialTransactionRepository transactionRepository;

    @Autowired
    private com.gramflow.backend.repository.LoanSchemeRepository loanRepository;

    @GetMapping
    public List<Enterprise> getAllEnterprises() {
        return enterpriseRepository.findAll();
    }

    @PostMapping
    public Enterprise createEnterprise(@RequestBody Enterprise enterprise) {
        return enterpriseRepository.save(enterprise);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Enterprise> getEnterpriseById(@PathVariable Long id) {
        return enterpriseRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/{id}/transactions")
    public ResponseEntity<List<com.gramflow.backend.entity.FinancialTransaction>> getTransactions(@PathVariable Long id) {
        return ResponseEntity.ok(transactionRepository.findByEnterpriseIdOrderByDateDesc(id));
    }

    @GetMapping("/schemes")
    public ResponseEntity<List<com.gramflow.backend.entity.LoanScheme>> getSchemes() {
        return ResponseEntity.ok(loanRepository.findAll());
    }

    @GetMapping("/{id}/risk")
    public ResponseEntity<?> getEnterpriseRisk(@PathVariable Long id) {
        return enterpriseRepository.findById(id)
                .map(enterprise -> {
                    // Actual prediction params from DB (mocked for now, just sending to AI service)
                    double income = 15000.0;
                    double expense = 8000.0;
                    double debt = 5000.0;
                    boolean weatherAlert = false;
                    
                    com.gramflow.backend.service.AiServiceClient aiService = new com.gramflow.backend.service.AiServiceClient();
                    java.util.Map<String, Object> riskData = aiService.getRiskPrediction(
                        enterprise.getId().toString(), debt, income, expense, weatherAlert
                    );
                    
                    return ResponseEntity.ok(riskData);
                })
                .orElse(ResponseEntity.notFound().build());
    }
}
