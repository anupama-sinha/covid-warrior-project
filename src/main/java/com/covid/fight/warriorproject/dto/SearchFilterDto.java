package com.covid.fight.warriorproject.dto;

import com.covid.fight.warriorproject.entity.District;
import com.covid.fight.warriorproject.entity.ResourceType;
import com.covid.fight.warriorproject.entity.State;
import lombok.Data;

@Data
public class SearchFilterDto {
    private ResourceType rt;
    private District dt;
    private State st;
}
