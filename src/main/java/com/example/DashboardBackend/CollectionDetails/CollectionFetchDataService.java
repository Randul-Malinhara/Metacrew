package com.example.DashboardBackend.CollectionDetails;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface CollectionFetchDataService extends JpaRepository<CollectionModel, Integer> {
    @Override
    List<CollectionModel> findAll();
    List<CollectionModel> findAllByAgentId(int agentId);
}
