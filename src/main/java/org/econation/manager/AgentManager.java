package org.econation.manager;

import org.econation.dataaccess.AgentDataAccess;
import org.econation.model.Admin;
import org.econation.model.Laptop;

import java.util.List;

public class AgentManager {

    private final AgentDataAccess agentDataAccess = new AgentDataAccess();

    public List<Laptop> getLaptops(){
        List<Laptop> laptops = agentDataAccess.getLaptops();

        return laptops;
    }
}
