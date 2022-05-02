package com.example.DashboardBackend.Agent;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class AgentsController {

    @Autowired
    AgentFetchDataService agentFetchDataService;

    @GetMapping(path = "getAgents")
    List<AgentsModel> getAgents(){
        return agentFetchDataService.findAll();
    }

    @GetMapping(path = "getAgentByName")
    AgentsModel getAgentByName(@RequestParam String name){
        return agentFetchDataService.findByName(name);
    }

    @GetMapping(path = "getAgentById")
    AgentsModel getAgentById(@RequestParam int id){
        return agentFetchDataService.findById(id);
    }

    @GetMapping(path = "getAgentCount")
    int getAgentCount(){
        return agentFetchDataService.findAll().size();
    }
}
