package com.xfdmao.fcat.auth.feign.fallback;

import com.xfdmao.fcat.api.vo.user.TUserVo;
import com.xfdmao.fcat.auth.feign.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

/**
 * Created by fier on 2017/11/22.
 */
@Service
public class UserServiceFallbackImpl implements UserService {
    private Logger logger = LoggerFactory.getLogger(this.getClass());

    @Override
    public TUserVo getByUsername(@PathVariable("username") String username) {
        logger.error("调用{}异常:{}", "findUserByUsername", username);
        return new TUserVo();
    }
}
