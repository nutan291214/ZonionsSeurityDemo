package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.RegistrationEntityDto;

@Repository
public interface RegistrationDtoRepository extends JpaRepository<RegistrationEntityDto, Long> {

}
