package com.covid.fight.warriorproject.repo;

import com.covid.fight.warriorproject.entity.Resource;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.List;

public interface ResourceRepo extends JpaRepository<Resource, Integer>,
        JpaSpecificationExecutor<Resource> {

    List<Resource> findAll(Specification<Resource> spec);

    Page<Resource> findAll(Specification<Resource> spec, Pageable pageable);

    List<Resource> findAll(Specification<Resource> spec, Sort sort);
}
