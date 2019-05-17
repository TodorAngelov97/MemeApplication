package com.talenboost.project.server.controllers;

import com.talenboost.project.server.CardRepository;
import com.talenboost.project.server.models.Card;
import com.talenboost.project.server.services.CardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@CrossOrigin()
@RestController
public class CardController {

    final String UPLOADED_FOLDER = "/images/";

    @Autowired
    private CardRepository repository;

    @Autowired
    private CardService cardServcie;

    private Sort sortByIdToGetInCorrectOrder() {
        return new Sort(Sort.Direction.DESC, "id");
    }

    @GetMapping("/meme")
    public List<Card> findAll() {
        return cardServcie.findAll();
    }


    @PostMapping(value = "/post", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public Card create(@RequestParam("title") String title, @RequestParam("file") MultipartFile file
    ) throws IOException {

        return cardServcie.save(title, file);
    }

    @DeleteMapping("/card/{id}")
    public ResponseEntity<?> deleteCard(@PathVariable("id") int id) {
        return cardServcie.deleteCard(id);
    }


    @PutMapping("/card/{id}")
    public ResponseEntity<Card> updateCard(@PathVariable("id") int id, @RequestParam("title") String title, @RequestParam("file") MultipartFile file
    ) {
        return cardServcie.update(id, title, file);
    }
}













