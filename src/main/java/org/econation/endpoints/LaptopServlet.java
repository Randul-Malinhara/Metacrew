package org.econation.endpoints;

import com.google.gson.Gson;
import org.econation.manager.AgentManager;
import org.econation.model.Laptop;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

@WebServlet("/laptops")
public class LaptopServlet extends HttpServlet {

    private final AgentManager agentManager = new AgentManager();

    private final Gson gson = new Gson();

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        List<Laptop> laptops = agentManager.getLaptops();
        String laptopJsonString = this.gson.toJson(laptops);

        PrintWriter out = resp.getWriter();
        resp.setContentType("application/json");
        resp.setCharacterEncoding("UTF-8");
        out.print(laptopJsonString);
        out.flush();
    }
}
