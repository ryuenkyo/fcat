package com.xfdmao.fcat.gate.config;

import com.alibaba.fastjson.JSON;
import com.xfdmao.fcat.common.enumtype.ResultCodeEnum;
import com.xfdmao.fcat.common.util.HttpHelper;
import com.xfdmao.fcat.common.util.JsonUtil;
import com.xfdmao.fcat.gate.filter.CodeUsernamePasswordAuthenticationFilter;
import com.xfdmao.fcat.gate.filter.CorsFilter;
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
import org.springframework.security.authentication.RememberMeAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.oauth2.client.OAuth2ClientContext;
import org.springframework.security.oauth2.client.OAuth2RestTemplate;
import org.springframework.security.oauth2.client.filter.OAuth2ClientAuthenticationProcessingFilter;
import org.springframework.security.oauth2.client.token.grant.code.AuthorizationCodeResourceDetails;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableAuthorizationServer;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableOAuth2Client;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.security.oauth2.config.annotation.web.configuration.ResourceServerConfigurerAdapter;
import org.springframework.security.web.authentication.*;
import org.springframework.security.web.authentication.logout.LogoutFilter;
import org.springframework.security.web.authentication.rememberme.RememberMeAuthenticationFilter;
import org.springframework.security.web.authentication.rememberme.TokenBasedRememberMeServices;
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

  @Autowired
  private CorsFilter corsFilter;

  @Override
  public void configure(AuthenticationManagerBuilder auth) throws Exception {
    auth.userDetailsService(detailsService).and()
            .authenticationProvider(rememberMeAuthenticationProvider()) /*.passwordEncoder(new BCryptPasswordEncoder())*/;
  }

  @Override
  @Bean
  public AuthenticationManager authenticationManagerBean() throws Exception {
    return super.authenticationManagerBean();
  }

  /**
   * 忽略静态文件
   */
  @Override
  public void configure(WebSecurity web) throws Exception {
    web.ignoring().antMatchers("/js/**", "/img/**", "/css/**", "/images/**","fav.ico");
  }

  @Override
  protected void configure(HttpSecurity http) throws Exception {
    //解决Refused to display 'http://......' in a frame because it set 'X-Frame-Options' to 'DENY'. "错误
    http.headers().frameOptions().disable();




    http.authorizeRequests().antMatchers("/", "/login/**").permitAll()
            // user权限可以访问的请求
            .antMatchers("/security/user").hasRole("user")
            // admin权限可以访问的请求
            .antMatchers("/security/admin").hasRole("admin")
            // SpEL表达式:需要拥有user权限，且进行了完全认证
            .antMatchers("/user/account").access("hasRole('user') and isFullyAuthenticated()")
            // 其他地址的访问均需验证权限（需要登录）
            .anyRequest().authenticated().and()
            .addFilterBefore(corsFilter,UsernamePasswordAuthenticationFilter.class)
            .addFilterAt(codeUsernamePasswordAuthenticationFilter(), UsernamePasswordAuthenticationFilter.class).exceptionHandling()
            .authenticationEntryPoint((request, response, authException) -> {
              String result = JSON.toJSONString(JsonUtil.getResultJson(ResultCodeEnum.NOLOGIN));
              HttpHelper.setResponseJsonData(response,result);
            }).and()
            .addFilterBefore(corsFilter,LogoutFilter.class)
            .addFilterAt(rememberMeAuthenticationFilter(), LogoutFilter.class)
            .formLogin().loginPage("/login_page")
            .loginProcessingUrl("/login").permitAll().and()
            .logout().deleteCookies("remember-me").logoutSuccessHandler(new CustomLogoutSuccessHandler()).permitAll();
    http.csrf().disable();
  }


  @Bean
  public CodeUsernamePasswordAuthenticationFilter codeUsernamePasswordAuthenticationFilter() throws Exception {
    CodeUsernamePasswordAuthenticationFilter codeUsernamePasswordAuthenticationFilter = new CodeUsernamePasswordAuthenticationFilter();
    codeUsernamePasswordAuthenticationFilter.setAuthenticationManager(authenticationManagerBean());
    codeUsernamePasswordAuthenticationFilter.setAuthenticationSuccessHandler(authenticationSuccessHandler());
    codeUsernamePasswordAuthenticationFilter.setAuthenticationFailureHandler(authenticationFailureHandler());
    codeUsernamePasswordAuthenticationFilter.setRememberMeServices(tokenBasedRememberMeServices());
    return codeUsernamePasswordAuthenticationFilter;
  }



  @Bean
  public AuthenticationSuccessHandler authenticationSuccessHandler() {
    return new CustomAuthenticationSuccessHandler();
  }


  @Bean
  public AuthenticationFailureHandler authenticationFailureHandler() {
    return new CustomAuthenticationFailureHandler();
  }

  @Bean
  public RememberMeAuthenticationProvider rememberMeAuthenticationProvider() {
    RememberMeAuthenticationProvider rmap = new RememberMeAuthenticationProvider("testallKey");
    return rmap;
  }

  @Bean
  public TokenBasedRememberMeServices tokenBasedRememberMeServices() {
    TokenBasedRememberMeServices tbrms = new TokenBasedRememberMeServices("testallKey", detailsService);
    // 设置cookie过期时间为2天
    tbrms.setTokenValiditySeconds(60 * 60 * 24 * 2);
    // 设置checkbox的参数名为rememberMe（默认为remember-me），注意如果是ajax请求，参数名不是checkbox的name而是在ajax的data里
    tbrms.setParameter("rememberMe");
    tbrms.setAlwaysRemember(false);
    return tbrms;
  }


  @Bean
  public RememberMeAuthenticationFilter rememberMeAuthenticationFilter() throws Exception {
    RememberMeAuthenticationFilter myFilter = new RememberMeAuthenticationFilter(authenticationManagerBean(), tokenBasedRememberMeServices());
    return myFilter;
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
