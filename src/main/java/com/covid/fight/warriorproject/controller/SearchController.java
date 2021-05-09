package com.covid.fight.warriorproject.controller;

import com.covid.fight.warriorproject.dto.ResourceDto;
import com.covid.fight.warriorproject.dto.SearchFilterDto;
import com.covid.fight.warriorproject.entity.Resource;
import com.covid.fight.warriorproject.repo.ResourceRepo;
import com.covid.fight.warriorproject.service.DataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class SearchController {

    @Autowired
    ResourceRepo resourceRepo;

    @Autowired
    DataService dataService;

    @PostMapping("/test")
    Resource insertTestData(@RequestBody ResourceDto resourceDto){
        return resourceRepo.save(resourceDto.toResource());
    }

    @GetMapping("/test2")
    List<Resource> getResource(SearchFilterDto searchFilter) {
        return dataService.getResource(searchFilter);
    }
}
