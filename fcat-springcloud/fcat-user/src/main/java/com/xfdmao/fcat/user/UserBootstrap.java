package com.xfdmao.fcat.user;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.ServletComponentScan;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.netflix.feign.EnableFeignClients;
import org.springframework.cloud.netflix.hystrix.EnableHystrix;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.scheduling.annotation.EnableAsync;

/**
 * ${DESCRIPTION}
 *
 * @author xiangfei
 * @create 2017-05-25 12:44
 */

@SpringBootApplication

@EnableDiscoveryClient  //激活eureka中的DiscoveryClient实现
@ComponentScan(basePackages = {"com.xfdmao.fcat.user", "com.xfdmao.fcat.api.config"})
public class UserBootstrap {
    public static void main(String[] args) {
        new SpringApplicationBuilder(UserBootstrap.class).run(args);    }
}
 