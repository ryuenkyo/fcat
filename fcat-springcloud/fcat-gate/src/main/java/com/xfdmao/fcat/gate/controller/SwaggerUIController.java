package com.xfdmao.fcat.gate.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by xiangfei on 2017/10/16.
 */
@Controller
@RequestMapping("/swagger-ui")
public class SwaggerUIController {
    @RequestMapping("/fcat-user")
    public String fcatUser(){
        return "swagger-ui/fcat-user";
    }
}
