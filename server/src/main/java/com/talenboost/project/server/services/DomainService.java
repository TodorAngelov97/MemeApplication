package com.talenboost.project.server.services;


import com.talenboost.project.server.models.Card;
import com.talenboost.project.server.models.Domain;
import me.xdrop.fuzzywuzzy.FuzzySearch;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Configuration
public class DomainService {

//    private final String URL = "http://localhost:8090/domain";
      private final String URL = "https://meme-it-platform-service-api.herokuapp.com/domain";

    private RestTemplate restTemplate;

    public DomainService() {
        restTemplate = new RestTemplate();
    }


    public List<Card> getMatchedMemes(String key) {

        List<Domain> allDomains = getAllDomains();
        List<Card> allMemes = getAllMemes(allDomains);
        List<Card> matchedMemes = getMatchedMemes(key, allMemes);
        if (!hasMatches(matchedMemes)) {
            addSuggestion(key, allMemes, matchedMemes);
        } else {
            System.out.println(matchedMemes.size());
        }
        return matchedMemes;
    }


    public List<Domain> getAllDomains() {
        return Arrays.asList(restTemplate.getForObject(URL, Domain[].class));

    }

    private List<Card> getAllMemes(List<Domain> allDomains) {

        List<Card> allMemes = new ArrayList<>();
        for (Domain domain : allDomains) {
            List<Card> allMemesFromDomain = getAllMemesFromDomain(domain);
            allMemes.addAll(allMemesFromDomain);
        }
        return allMemes;
    }

    private List<Card> getAllMemesFromDomain(Domain domain) {

        String address = domain.getAddress();
        String requestUrl = address + "/meme";
        System.out.println();
        return Arrays.asList(restTemplate.getForObject(requestUrl, Card[].class));
    }

    private List<Card> getMatchedMemes(String key, List<Card> allMemes) {

        List<Card> matchedMemes = new ArrayList<>();
        for (Card card : allMemes) {
            if (isContainsMemeWithSearchWord(card, key)) {
                matchedMemes.add(card);
            }
        }
        return matchedMemes;
    }

    private boolean isContainsMemeWithSearchWord(Card card, String key) {

        String title = card.getTitle().trim();
        return title.toLowerCase().contains(key.toLowerCase().trim());
    }

    private boolean hasMatches(List<Card> matchedMemes) {
        return matchedMemes.size() > 0;
    }


    private void addSuggestion(String key, List<Card> allMemes, List<Card> emptyList) {
        List<String> allWordsFromMemes = getAllWordsFromMemes(allMemes);

        String suggestion = FuzzySearch.extractOne(key, allWordsFromMemes).getString();
        Card newSuggestion = new Card(suggestion, "empty");
        newSuggestion.setId(0);
        System.out.println(suggestion);
        emptyList.add(newSuggestion);
    }

    private List<String> getAllWordsFromMemes(List<Card> allMemes) {

        List<String> allWords = new ArrayList<>();
        for (Card meme : allMemes) {
            List<String> allWordFromOneMeme = getAllWordsFromOneMeme(meme);
            allWords.addAll(allWordFromOneMeme);
        }
        return allWords;
    }

    private List<String> getAllWordsFromOneMeme(Card meme) {

        String title = meme.getTitle();
        String[] titleSplitted = title.split(" ");
        List<String> allMemes = new ArrayList<>();
        for (String word : titleSplitted) {
            allMemes.add(word.trim());
        }
        return allMemes;
    }
}
