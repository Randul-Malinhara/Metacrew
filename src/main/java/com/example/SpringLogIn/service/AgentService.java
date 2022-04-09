package com.example.SpringLogIn.service;

import com.example.SpringLogIn.domain.Agent;
import com.example.SpringLogIn.repository.AgentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AgentService {
    @Autowired
    private AgentRepository repo;

    public Agent login(String username, String password){
        return repo.findByUsernameAndPassword(username, password);
    }
}
