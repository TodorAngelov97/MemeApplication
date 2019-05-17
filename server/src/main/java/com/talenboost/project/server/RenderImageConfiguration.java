package com.talenboost.project.server;

import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

public class RenderImageConfiguration implements WebMvcConfigurer {

    public void addImageHandler(ResourceHandlerRegistry resourceHandlerRegistry) {
        resourceHandlerRegistry.addResourceHandler("/images/**").addResourceLocations("file:src/main/resources/static/images/");

    }

}
