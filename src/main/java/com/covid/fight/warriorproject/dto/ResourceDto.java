package com.covid.fight.warriorproject.dto;

import com.covid.fight.warriorproject.entity.District;
import com.covid.fight.warriorproject.entity.Resource;
import com.covid.fight.warriorproject.entity.ResourceType;
import com.covid.fight.warriorproject.entity.State;
import lombok.Data;

@Data
public class ResourceDto {
    private ResourceType resourceType;
    private District district;
    private State state;
    private String contactPerson;
    private String contactNumber;
    private String additionalInfo;

    public Resource toResource() {
        return Resource.builder()
                .resourceType(resourceType)
                .district(district)
                .state(state)
                .contactNumber(contactNumber)
                .additionalInfo(additionalInfo)
                .build();
    }
}
