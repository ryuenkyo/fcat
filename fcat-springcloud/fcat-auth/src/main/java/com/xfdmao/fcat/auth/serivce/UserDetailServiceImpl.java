package com.xfdmao.fcat.auth.serivce;

import com.xfdmao.fcat.api.vo.user.TUserVo;
import com.xfdmao.fcat.auth.feign.UserService;
import com.xfdmao.fcat.auth.dto.UserInfo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.io.Serializable;

/**
 * Created by fier on 2017/11/22.
 */
@Service("userDetailService")
public class UserDetailServiceImpl implements UserDetailsService, Serializable {
    private Logger logger = LoggerFactory.getLogger(UserDetailServiceImpl.class);
    @Autowired
    private UserService userService;

    @Override
    public UserInfo loadUserByUsername(String username) throws UsernameNotFoundException {
        logger.info("FCat:loadUserByUsername:{}",username);
        TUserVo tUser = userService.getByUsername(username);
        return new UserInfo(tUser);
    }
}
