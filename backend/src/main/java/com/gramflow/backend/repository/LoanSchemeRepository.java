package com.gramflow.backend.repository;

import com.gramflow.backend.entity.LoanScheme;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LoanSchemeRepository extends JpaRepository<LoanScheme, Long> {
}
