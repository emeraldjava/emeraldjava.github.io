---
title: Spring Boot -  Web Security
modified: 2017-01-25
tags: ["spring","java"]
draft: false
published: true
---

Spring Boot -  Web Security

```
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    //@Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
        auth.inMemoryAuthentication().withUser("admin").password("admin").roles("ADMIN");
        auth.inMemoryAuthentication().withUser("user").password("user").roles("USER");
    }

    //.csrf() is optional, enabled by default, if using WebSecurityConfigurerAdapter constructor
    @Override
    protected void configure(HttpSecurity http) throws Exception {

        http.authorizeRequests()
            .antMatchers("/daymember", "/export", "/header", "/list", "/member", "/menu", "/prereg").permitAll().anyRequest().authenticated()
            .and()
            .formLogin().loginPage("/login").permitAll().defaultSuccessUrl("/member")
                .and()
            .logout().permitAll();
    }

    /**
     * http://stackoverflow.com/questions/24726218/spring-security-refused-to-execute-script-from
     * @param web
     * @throws Exception
     */
    @Override
    public void configure(WebSecurity web) throws Exception {
        web.ignoring().antMatchers("/webjars/**","/js/**","/css/**","/images/**");
    }
}
```
