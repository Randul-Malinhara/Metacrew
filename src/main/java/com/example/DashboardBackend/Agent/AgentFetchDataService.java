package com.example.DashboardBackend.Agent;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AgentFetchDataService extends JpaRepository<AgentsModel, Integer> {
    @Override
    List<AgentsModel> findAll();

    AgentsModel findByName(String name);

    AgentsModel findById(int id);
}
