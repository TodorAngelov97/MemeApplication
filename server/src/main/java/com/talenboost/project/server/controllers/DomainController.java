package com.talenboost.project.server.controllers;

import com.talenboost.project.server.models.Card;
import com.talenboost.project.server.models.Domain;
import com.talenboost.project.server.services.DomainService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin()
@RestController
public class DomainController {
    public static String ID = "";



    //I used local server not http://localhost:8090/domain/register?name=todor&address=http://localhost:8080

    @Autowired
    private DomainService domainService;


    @GetMapping("/domain")
    public List<Domain> getAllDomains() {
        return domainService.getAllDomains();
    }


    @PostConstruct
    public void registerOnInit() {
//        final String URL = "https://meme-it-platform-service-api.herokuapp.com/
        final String URL = "http://localhost:8090/domain/register?name=todor&address=http://localhost:8080";
        RestTemplate restTemplate = new RestTemplate();
        ID = restTemplate.postForObject(URL, null, String.class);
        System.out.println(ID);
    }


    @PreDestroy
    public void unRegisterOnDestroy() {

        final String URL = "http://localhost:8090/domain/deregister/{id}";
        Map<String, String> params = new HashMap<String, String>();
        params.put("id", ID);
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.delete(URL, params);
    }

    @GetMapping("/advanced-search/{key}")
    public List<Card> getMatchedMemes(@PathVariable("key") String key) {
        return domainService.getMatchedMemes(key);
    }


}