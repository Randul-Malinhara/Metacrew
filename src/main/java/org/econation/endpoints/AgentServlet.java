package org.econation.endpoints;

import org.econation.manager.AgentManager;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/agent")
public class AgentServlet extends HttpServlet {

    private final AgentManager agentManager = new AgentManager();

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
       // agentManager.getAgents();
    }
}
