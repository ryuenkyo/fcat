package com.xfdmao.fcat.auth.feign;

import com.xfdmao.fcat.api.vo.user.TUserVo;
import com.xfdmao.fcat.auth.feign.fallback.UserServiceFallbackImpl;
import org.springframework.cloud.netflix.feign.FeignClient;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Created by fier on 2017/11/22.
 */
@FeignClient(name = "fcat-user", fallback = UserServiceFallbackImpl.class)
public interface UserService {

    /**
     * 通过用户名查询用户和角色信息
     * @param username
     * @return
     */
    @RequestMapping(value = "/tUserServiceFeign/user/username/{username}", method = RequestMethod.POST)
    TUserVo getByUsername(@PathVariable("username") String username);
}
