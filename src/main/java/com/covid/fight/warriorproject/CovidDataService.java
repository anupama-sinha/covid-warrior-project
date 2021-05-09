package com.covid.fight.warriorproject;

import com.covid.fight.warriorproject.dto.SearchFilterDto;
import com.covid.fight.warriorproject.entity.Resource;
import com.covid.fight.warriorproject.repo.ResourceRepo;
import com.covid.fight.warriorproject.util.SpecificationUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CovidDataService {

    @Autowired
    ResourceRepo resourceRepo;

    List<Resource> getResource(SearchFilterDto searchFilter) {
        Specification<Resource> spec = prepareSpecification(searchFilter);
        if(spec != null)
            return resourceRepo.findAll(spec);
        else
            return resourceRepo.findAll();
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
