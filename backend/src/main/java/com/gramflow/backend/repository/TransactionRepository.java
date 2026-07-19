package com.gramflow.backend.repository;

import com.gramflow.backend.entity.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface TransactionRepository extends JpaRepository<Transaction, Long> {
    List<Transaction> findByEnterpriseIdOrderByTransactionDateDesc(Long enterpriseId);
}
