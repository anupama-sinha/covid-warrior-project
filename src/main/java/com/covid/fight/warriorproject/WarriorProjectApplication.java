package com.covid.fight.warriorproject;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;

@EnableCaching
@SpringBootApplication
public class WarriorProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(WarriorProjectApplication.class, args);
	}

}
