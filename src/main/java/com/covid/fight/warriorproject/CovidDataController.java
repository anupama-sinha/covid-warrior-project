package com.covid.fight.warriorproject;

import com.covid.fight.warriorproject.dto.ResourceDto;
import com.covid.fight.warriorproject.entity.Resource;
import com.covid.fight.warriorproject.repo.ResourceRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CovidDataController {

    @Autowired
    ResourceRepo resourceRepo;

    @PostMapping("/test")
    Resource insertTestData(@RequestBody ResourceDto resourceDto){
        return resourceRepo.save(resourceDto.toResource());
    }
}
