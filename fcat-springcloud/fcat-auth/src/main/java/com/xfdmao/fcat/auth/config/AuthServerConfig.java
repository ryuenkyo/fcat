package com.xfdmao.fcat.auth.config;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

/**
 * Created by fier on 2017/11/22.
 */
@Configuration
@ConfigurationProperties(prefix = "fcat.auth")
@Data
public class AuthServerConfig {
    private String clientId;
    private String clientSecret;
    private String scope;
}
