package org.econation.dataaccess;

import org.econation.model.Admin;
import org.econation.model.Laptop;

import java.util.ArrayList;
import java.util.List;

public class AgentDataAccess {

    public List<Laptop> getLaptops(){

        List<Laptop> laptops = new ArrayList<>();



        return laptops;
    }

    public List<Laptop> getLaptops1(){

        List<Laptop> laptops = new ArrayList<>();
        Laptop hpLaptop = new Laptop("HP", 2);
        Laptop asusLaptop = new Laptop("Asus", 3);
        Laptop dellLaptop = new Laptop("Dell", 5);
        laptops.add(hpLaptop);
        laptops.add(asusLaptop);
        laptops.add(dellLaptop);

        return laptops;
    }

}
