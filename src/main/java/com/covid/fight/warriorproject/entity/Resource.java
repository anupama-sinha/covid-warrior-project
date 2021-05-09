package com.covid.fight.warriorproject.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "Resource")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Resource {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private ResourceType resourceType;

    private District district;

    private State state;

    private String contactPerson;

    private String contactNumber;

    private String additionalInfo;
}
