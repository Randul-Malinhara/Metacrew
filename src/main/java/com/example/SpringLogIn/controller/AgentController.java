package com.example.SpringLogIn.controller;

import com.example.SpringLogIn.domain.Agent;
import com.example.SpringLogIn.service.AgentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.ModelAndView;

import java.io.PrintWriter;
import java.util.Objects;

@Controller
public class AgentController {
    @Autowired
    private AgentService agentService;

    @GetMapping("/login")
    public ModelAndView login(){
        ModelAndView mav = new ModelAndView("login");
        mav.addObject("agent", new Agent());
        return mav;
    }

    @PostMapping("/login")
    public String login(@ModelAttribute("agent") Agent agent){
        Agent oauthAgent = agentService.login(agent.getUsername(), agent.getPassword());
        System.out.print(oauthAgent);
        if (Objects.nonNull(oauthAgent)){
            return "redirect:/";
        }else {
            System.out.println("Incorrect Username or Password !!!");
            return "redirect:/login";
        }
    }
}
