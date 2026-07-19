package com.gramflow.backend.config;

import com.gramflow.backend.entity.Enterprise;
import com.gramflow.backend.entity.FinancialTransaction;
import com.gramflow.backend.entity.LoanScheme;
import com.gramflow.backend.repository.EnterpriseRepository;
import com.gramflow.backend.repository.FinancialTransactionRepository;
import com.gramflow.backend.repository.LoanSchemeRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import java.time.LocalDate;
import java.util.Arrays;

@Configuration
public class DataSeeder {

    @Bean
    public CommandLineRunner loadData(EnterpriseRepository enterpriseRepository, 
                                      FinancialTransactionRepository transactionRepository,
                                      LoanSchemeRepository loanRepository) {
        return args -> {
            if (enterpriseRepository.count() == 0) {
                Enterprise ent = new Enterprise();
                ent.setName("Akhil's Dairy");
                ent.setOwnerName("Akhil");
                ent.setDistrict("Nellore, Andhra Pradesh");
                ent.setBusinessType("Dairy Farm");
                ent.setCurrentBalance(124500.0);
                ent.setHealthScore(91.0); // mapped to eligibility
                Enterprise savedEnt = enterpriseRepository.save(ent);

                // Transactions
                FinancialTransaction t1 = new FinancialTransaction();
                t1.setEnterpriseId(savedEnt.getId());
                t1.setTitle("Milk Sales (Heritage Foods)");
                t1.setAmount(45000.0);
                t1.setDate(LocalDate.now());
                t1.setType("income");
                t1.setCategory("Sales");

                FinancialTransaction t2 = new FinancialTransaction();
                t2.setEnterpriseId(savedEnt.getId());
                t2.setTitle("Cattle Feed Purchase");
                t2.setAmount(12500.0);
                t2.setDate(LocalDate.now().minusDays(2));
                t2.setType("expense");
                t2.setCategory("Inventory");

                FinancialTransaction t3 = new FinancialTransaction();
                t3.setEnterpriseId(savedEnt.getId());
                t3.setTitle("Veterinary Services");
                t3.setAmount(3200.0);
                t3.setDate(LocalDate.now().minusDays(5));
                t3.setType("expense");
                t3.setCategory("Services");

                FinancialTransaction t4 = new FinancialTransaction();
                t4.setEnterpriseId(savedEnt.getId());
                t4.setTitle("Govt Subsidy (Dairy)");
                t4.setAmount(15000.0);
                t4.setDate(LocalDate.now().minusDays(10));
                t4.setType("income");
                t4.setCategory("Subsidy");

                transactionRepository.saveAll(Arrays.asList(t1, t2, t3, t4));

                // Loan Schemes
                LoanScheme ls1 = new LoanScheme();
                ls1.setName("Kisan Credit Card (KCC)");
                ls1.setDescription("Short term credit for farmers and animal husbandry.");
                ls1.setInterestRate("4% p.a.");
                ls1.setMaxAmount("₹3 Lakhs");
                ls1.setSubsidy("2% Prompt Repayment");
                ls1.setMatchScore("98%");
                
                LoanScheme ls2 = new LoanScheme();
                ls2.setName("MUDRA Shishu Loan");
                ls2.setDescription("Micro credit for small enterprises to expand business.");
                ls2.setInterestRate("1% per month");
                ls2.setMaxAmount("₹50,000");
                ls2.setSubsidy("None");
                ls2.setMatchScore("91%");

                LoanScheme ls3 = new LoanScheme();
                ls3.setName("NABARD Dairy Scheme");
                ls3.setDescription("Subsidy scheme for establishing dairy farms.");
                ls3.setInterestRate("8% p.a.");
                ls3.setMaxAmount("₹7 Lakhs");
                ls3.setSubsidy("25% Capital Subsidy");
                ls3.setMatchScore("85%");

                loanRepository.saveAll(Arrays.asList(ls1, ls2, ls3));
            }
        };
    }
}
