package com.covid.fight.warriorproject.controller;

import com.covid.fight.warriorproject.service.DataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class HomeController {

    @Autowired
    DataService dataService;

    @GetMapping("/state")
    List<String> getStatesList() {
     return dataService.getStatesList();
    }

    @GetMapping("/district/{stateName}")
    List<String> getStatesList(@PathVariable("stateName") String stateName) {
        return dataService.getDistrictListByState(stateName);
    }

    @GetMapping("/resourceTypes")
    List<String> getResourceTypeList() {
        return dataService.getResourceTypes();
    }
}
