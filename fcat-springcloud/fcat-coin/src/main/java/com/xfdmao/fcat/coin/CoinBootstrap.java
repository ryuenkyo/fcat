package com.xfdmao.fcat.coin;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.ServletComponentScan;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.session.data.redis.RedisFlushMode;
import org.springframework.session.data.redis.config.annotation.web.http.EnableRedisHttpSession;

/**
 * Created by fier on 2018/09/20
 */
@SpringBootApplication
@ServletComponentScan("com.xfdmao.fcat.coin.config.druid")
//@EnableEurekaClient
//@EnableDiscoveryClient
@EnableAsync
@EnableRedisHttpSession(redisFlushMode = RedisFlushMode.IMMEDIATE)
@EnableCaching
public class CoinBootstrap {
    public static void main(String[] args) {
        new SpringApplicationBuilder(CoinBootstrap.class).web(true).run(args);    }
}
 