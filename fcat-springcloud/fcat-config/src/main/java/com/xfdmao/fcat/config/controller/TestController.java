package com.xfdmao.fcat.config.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by xiangfei on 2017/11/20.
 */
@RestController
public class TestController {
    @RequestMapping("/test")
    public String test() {
        return "test success";
    }
}
