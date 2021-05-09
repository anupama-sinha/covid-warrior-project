package com.covid.fight.warriorproject.repo;

import com.covid.fight.warriorproject.entity.Resource;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ResourceRepo extends JpaRepository<Resource, Integer> {
}
