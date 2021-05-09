package com.covid.fight.warriorproject.service;

import com.covid.fight.warriorproject.dto.SearchFilterDto;
import com.covid.fight.warriorproject.entity.District;
import com.covid.fight.warriorproject.entity.Resource;
import com.covid.fight.warriorproject.entity.ResourceType;
import com.covid.fight.warriorproject.entity.State;
import com.covid.fight.warriorproject.repo.ResourceRepo;
import com.covid.fight.warriorproject.util.SpecificationUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class DataService {

    @Autowired
    ResourceRepo resourceRepo;

    public List<Resource> getResource(SearchFilterDto searchFilter) {
        Specification<Resource> spec = prepareSpecification(searchFilter);
        if(spec != null)
            return resourceRepo.findAll(spec);
        else
            return resourceRepo.findAll();
    }

    @Cacheable("states")
    public List<String> getStatesList() {
        return Arrays.stream(State.values())
                .map(State::name)
                .collect(Collectors.toList());
    }

    @Cacheable("districtByState")
    public List<String> getDistrictListByState(String stateName) {
        State state = State.valueOf(stateName);
        return Arrays.stream(District.values())
                .filter(district -> district.getStateCode() == state.ordinal())
                .map(District::name)
                .collect(Collectors.toList());
    }

    @Cacheable("resourceTypes")
    public List<String> getResourceTypes() {
        return Arrays.stream(ResourceType.values())
                .map(ResourceType::name)
                .collect(Collectors.toList());
    }

    private Specification<Resource> prepareSpecification(SearchFilterDto filter) {
        Specification<Resource> spec = null;

        if(filter.getSt() != null) {
            spec = SpecificationUtil.withStateName(filter.getSt());
        }
        if (filter.getDt() != null) {
            Specification<Resource> stateSpecification = SpecificationUtil.withDistrictName(filter.getDt());
            if(spec == null)
                spec = stateSpecification;
            else
                spec = spec.and(stateSpecification);
        }
        if(filter.getRt() != null) {
            Specification<Resource> resourceSpecification = SpecificationUtil.withResourceType(filter.getRt());
            if(spec == null)
                spec = resourceSpecification;
            else
                spec = spec.and(resourceSpecification);
        }
        return spec;
    }
}
