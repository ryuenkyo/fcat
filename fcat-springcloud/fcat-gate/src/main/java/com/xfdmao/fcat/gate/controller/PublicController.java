package com.xfdmao.fcat.gate.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by xiangfei on 2017/10/16.
 */
@Controller
public class PublicController {

    @RequestMapping("/")
    public String index(){

        return "login";
    }

}
