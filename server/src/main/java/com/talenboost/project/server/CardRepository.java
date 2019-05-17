package com.talenboost.project.server;


import com.talenboost.project.server.models.Card;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CardRepository
        extends JpaRepository<Card, Integer> {

}

