package com.talenboost.project.server.controllers;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.talenboost.project.server.CardRepository;
import com.talenboost.project.server.models.Card;
import com.talenboost.project.server.services.CardService;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import java.util.ArrayList;
import java.util.List;

import static org.junit.Assert.assertEquals;

@RunWith(SpringJUnit4ClassRunner.class)
@WebMvcTest(CardController.class)
public class TestCardController {
    @Autowired
    private MockMvc mvc;

    @MockBean
    private CardRepository repository;

    @MockBean
    private CardService service;

    private List<Card> allMemes;

    public TestCardController() throws Exception {
    }

    @Before
    public void setUp() {
        allMemes = new ArrayList<>();
        allMemes.add(new Card("kiro", "sdsda.jpg"));

    }

    @Test
    public void testGetAll() throws Exception {
        String apiUrl = "/meme";
        Mockito.when(service.findAll()).thenReturn(allMemes);

        RequestBuilder rb = MockMvcRequestBuilders.get(apiUrl).accept(MediaType.APPLICATION_JSON);
        MvcResult r = mvc.perform(rb).andReturn(); // throws Exception
        ObjectMapper mapper = new ObjectMapper();

        List<Card> actual = mapper.readValue(r.getResponse().getContentAsString(), new TypeReference<List<Card>>() {
        });

        assertEquals(actual.size(), 1);
    }

}
