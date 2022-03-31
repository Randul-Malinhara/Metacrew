package org.econation.manager;

import org.econation.dataaccess.AgentDataAccess;
import org.econation.model.Laptop;
import org.econation.model.mobilePhone;

import java.util.List;

public class AgentManager {

    private final AgentDataAccess agentDataAccess = new AgentDataAccess();

    public List<Laptop> getLaptops(){
        List<Laptop> laptops = agentDataAccess.getLaptops();

        return laptops;
    }
    public List<mobilePhone> getMobilePhones(){
        List<mobilePhone> mobilePhones = agentDataAccess.getMobilePhones();

        return mobilePhones;
    }
}
