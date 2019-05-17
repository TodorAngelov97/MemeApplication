package com.talenboost.project.server.services;

import com.talenboost.project.server.CardRepository;
import com.talenboost.project.server.models.Card;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.UUID;

@Configuration
public class CardService {
    @Autowired
    private CardRepository repository;

    String REGEX_FOR_MATCH_FILE_EXTENSION = "\\.(?=[^\\.]+$)";
    int INDEX_OF_FILE_EXTENSION = 1;

    final String URL = "/images/";


    private final String UPLOADED_FOLDER = "src/main/resources/static/images/";


    public List<Card> findAll() {
        List<Card> allCards = repository.findAll(this.sortByIdToGetInCorrectOrder());
        allCards.forEach(card -> card.setImage(URL + card.getImage()));
        return allCards;
    }

    private Sort sortByIdToGetInCorrectOrder() {
        return new Sort(Sort.Direction.DESC, "id");
    }

    public Card save(String title, MultipartFile file) throws IOException {

        String newImageName = generateNewImageName(file);
        saveUploadedFile(file, newImageName);
        Card newCard = new Card(title, newImageName);
        return repository.save(newCard);
    }

    private String generateNewImageName(MultipartFile file) {

        String generatedName = generateName();
        String fileExtension = getFileExtension(file);
        String newImageName = generatedName + "." + fileExtension;
        return newImageName;
    }

    private String generateName() {
        return UUID.randomUUID().toString();
    }

    private String getFileExtension(MultipartFile file) {
        String fileName = file.getOriginalFilename();
        return fileName.split(REGEX_FOR_MATCH_FILE_EXTENSION)[INDEX_OF_FILE_EXTENSION];
    }


    public void saveUploadedFile(MultipartFile file, String pathOfImage) throws IOException {
        if (!file.isEmpty()) {
            byte[] bytes = file.getBytes();
            Path path = Paths.get(UPLOADED_FOLDER + pathOfImage);
            Files.write(path, bytes);
        }
    }
    public ResponseEntity<?> deleteCard(int id) {
        return repository.findById(id)
                .map(record -> {
                    delete(record.getImage(), id);
                    return ResponseEntity.ok().build();
                }).orElse(ResponseEntity.notFound().build());
    }

    private void delete(String imageName, int id) {

        File file = new File(URL + imageName);
        file.delete();
        repository.deleteById(id);
    }
    public ResponseEntity<Card> update(int id, String title, MultipartFile file) {
        return repository.findById(id)
                .map(card -> {
                    card.setTitle(title);
                    String newImageName = generateNewImageName(file);
                    try {
                        saveUploadedFile(file, newImageName);
                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                    File oldFile = new File(URL + card.getImage());
                    oldFile.delete();
                    card.setImage(newImageName);
                    Card updated = repository.save(card);
                    return ResponseEntity.ok().body(updated);
                }).orElse(ResponseEntity.notFound().build());
    }
}
