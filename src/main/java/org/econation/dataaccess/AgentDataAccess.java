package org.econation.dataaccess;

import org.econation.model.Laptop;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class AgentDataAccess {

    public List<Laptop> getLaptops() {

        Connection con = null;
        List<Laptop> laptops = new ArrayList<>();

        try {
            Class.forName("com.mysql.jdbc.Driver");
            con = DriverManager.getConnection("jdbc:mysql://localhost:3306/eco_nation", "econation", "econation");
            Statement stmt = con.createStatement();

            ResultSet rs = stmt.executeQuery("select * from laptops");

            while (rs.next()) {
                Laptop laptop = new Laptop(rs.getString(1), rs.getInt(2));
                laptops.add(laptop);
            }

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if(con != null) {
                try {
                    con.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
        }


        return laptops;
    }

    public List<Laptop> getLaptops1() {

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
