package com.example.DashboardBackend.EwasteDetails;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EwasteFetchDataService extends JpaRepository<EwasteModel, Integer> {
    @Override
    List<EwasteModel> findAll();
}
