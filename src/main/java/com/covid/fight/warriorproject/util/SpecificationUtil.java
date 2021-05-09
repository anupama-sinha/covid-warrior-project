package com.covid.fight.warriorproject.util;

import com.covid.fight.warriorproject.entity.District;
import com.covid.fight.warriorproject.entity.Resource;
import com.covid.fight.warriorproject.entity.ResourceType;
import com.covid.fight.warriorproject.entity.State;
import org.springframework.data.jpa.domain.Specification;

public class SpecificationUtil {

    public static Specification<Resource> withDistrictName(District district) {
       return (Specification<Resource>) (root, query, builder) -> builder.equal(root.get("district"), district.ordinal());
    }

    public static Specification<Resource> withStateName(State state) {
        return (Specification<Resource>) (root, query, builder) -> builder.equal(root.get("state"), state.ordinal());
    }

    public static Specification<Resource> withResourceType(ResourceType resourceType) {
        return (Specification<Resource>) (root, query, builder) -> builder.equal(root.get("resourceType"), resourceType.ordinal());
    }
}
