package com.example.DashboardBackend.EwasteDetails;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class EwasteController {

    @Autowired
    EwasteFetchDataService ewasteFetchDataService;

    @GetMapping(path = "getEwasteDetails")
    List<EwasteModel> findAll(){
        return ewasteFetchDataService.findAll();
    }
}
