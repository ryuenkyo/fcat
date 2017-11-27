package com.xfdmao.fcat.auth.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.connection.RedisConnectionFactory;
import org.springframework.security.oauth2.provider.token.store.redis.RedisTokenStore;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

/**
 * Created by fier on 2017/11/22.
 */
@RestController
public class UserController {
    @Autowired
    private RedisConnectionFactory redisConnectionFactory;

    @RequestMapping("/user")
    public Object user(Principal user) {
        return user;
    }

    /**
     * 清除Redis中 accesstoken refreshtoken
     * @param accesstoken  accesstoken
     * @param refreshToken refreshToken
     * @return true/false
     */
    @PostMapping("/removeToken")
    public Boolean removeToken(String accesstoken, String refreshToken) {
        RedisTokenStore tokenStore = new RedisTokenStore(redisConnectionFactory);
        tokenStore.removeRefreshToken(refreshToken);
        tokenStore.removeAccessToken(accesstoken);
        return Boolean.TRUE;
    }

}