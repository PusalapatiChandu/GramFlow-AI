package com.gramflow.backend.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "loan_schemes")
public class LoanScheme {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String description;
    private String interestRate;
    private String maxAmount;
    private String subsidy;
    private String matchScore;

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getInterestRate() { return interestRate; }
    public void setInterestRate(String interestRate) { this.interestRate = interestRate; }

    public String getMaxAmount() { return maxAmount; }
    public void setMaxAmount(String maxAmount) { this.maxAmount = maxAmount; }

    public String getSubsidy() { return subsidy; }
    public void setSubsidy(String subsidy) { this.subsidy = subsidy; }

    public String getMatchScore() { return matchScore; }
    public void setMatchScore(String matchScore) { this.matchScore = matchScore; }
}
