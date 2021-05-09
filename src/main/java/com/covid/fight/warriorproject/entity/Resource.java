package com.covid.fight.warriorproject.entity;

import lombok.Builder;
import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "Resource")
@Data
@Builder
public class Resource {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private ResourceType resourceType;

    private District district;

    private State state;

    private String contactNumber;

    private String additionalInfo;
}
