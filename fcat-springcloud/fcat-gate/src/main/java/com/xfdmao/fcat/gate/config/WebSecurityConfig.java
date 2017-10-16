package com.xfdmao.fcat.gate.config;

import com.xfdmao.fcat.gate.service.GateUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.oauth2.resource.ResourceServerProperties;
import org.springframework.boot.autoconfigure.security.oauth2.resource.UserInfoTokenServices;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.context.properties.NestedConfigurationProperty;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.oauth2.client.OAuth2ClientContext;
import org.springframework.security.oauth2.client.OAuth2RestTemplate;
import org.springframework.security.oauth2.client.filter.OAuth2ClientAuthenticationProcessingFilter;
import org.springframework.security.oauth2.client.token.grant.code.AuthorizationCodeResourceDetails;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableAuthorizationServer;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableOAuth2Client;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.security.oauth2.config.annotation.web.configuration.ResourceServerConfigurerAdapter;
import org.springframework.security.web.authentication.LoginUrlAuthenticationEntryPoint;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

import javax.servlet.Filter;
/**
 * Created by xiangfei on 2017/10/16.
 */
@Configuration
@EnableOAuth2Client
@EnableAuthorizationServer
@Order(6)
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

  @Autowired
  private GateUserDetailsService detailsService;

  @Autowired
  OAuth2ClientContext oauth2ClientContext;

  @Override
  public void configure(AuthenticationManagerBuilder auth) throws Exception {
    auth.userDetailsService(detailsService)/*.passwordEncoder(new BCryptPasswordEncoder())*/;
  }

  @Override
  @Bean
  public AuthenticationManager authenticationManagerBean() throws Exception {
    return super.authenticationManagerBean();
  }

  @Override
  protected void configure(HttpSecurity http) throws Exception {
    //解决Refused to display 'http://......' in a frame because it set 'X-Frame-Options' to 'DENY'. "错误
    http.headers().frameOptions().disable();
    http
            .authorizeRequests()
            .antMatchers("/user/**").authenticated().anyRequest().permitAll()
            .and()
            .exceptionHandling()
            .authenticationEntryPoint(new LoginUrlAuthenticationEntryPoint("/login"))
            .and()
            .formLogin()
            .loginPage("/login")
            .defaultSuccessUrl("/user/info").permitAll()
            .failureUrl("/login?err=1").permitAll()
            .and()
            .logout()
            .logoutRequestMatcher(new AntPathRequestMatcher("/logout"))
            .logoutSuccessUrl("/login").permitAll()
            .and()
            .addFilterBefore(githubFilter(), BasicAuthenticationFilter.class);
    http.csrf().disable();
  }


  private Filter githubFilter() {
    OAuth2ClientAuthenticationProcessingFilter githubFilter = new OAuth2ClientAuthenticationProcessingFilter("/login/github");
    OAuth2RestTemplate githubTemplate = new OAuth2RestTemplate(githubClient().getClient(), oauth2ClientContext);
    githubFilter.setRestTemplate(githubTemplate);
    githubFilter.setTokenServices(new UserInfoTokenServices(githubClient().getResource().getUserInfoUri(), githubClient().getClient().getClientId()));
    return githubFilter;
  }

  @Bean
  @ConfigurationProperties("github")
  public ClientResources githubClient() {
    return new ClientResources();
  }

  @Configuration
  @EnableResourceServer
  protected static class ResourceServerConfiguration extends ResourceServerConfigurerAdapter {
    @Override
    public void configure(HttpSecurity http) throws Exception {
      http.antMatcher("/v1/**").authorizeRequests().anyRequest().authenticated()
      ;
    }
  }

}

class ClientResources {

  @NestedConfigurationProperty
  private AuthorizationCodeResourceDetails client = new AuthorizationCodeResourceDetails();

  @NestedConfigurationProperty
  private ResourceServerProperties resource = new ResourceServerProperties();

  public AuthorizationCodeResourceDetails getClient() {
    return client;
  }

  public ResourceServerProperties getResource() {
    return resource;
  }
}
