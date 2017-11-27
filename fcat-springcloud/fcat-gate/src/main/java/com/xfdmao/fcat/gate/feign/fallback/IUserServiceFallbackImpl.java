package com.xfdmao.fcat.gate.feign.fallback;

import com.xfdmao.fcat.api.vo.authority.PermissionInfo;
import com.xfdmao.fcat.api.vo.user.TUserVo;
import com.xfdmao.fcat.gate.feign.IUserServiceFeign;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.Set;

/**
 * Created by xiangfei on 2017/11/20.
 */
@Service
public class IUserServiceFallbackImpl implements IUserServiceFeign {
    private Logger logger = LoggerFactory.getLogger(this.getClass());

    @Override
    public TUserVo getByUsername(@PathVariable("username") String username) {
        logger.error("调用{}异常{}","getByUsername",username);
        return null;
    }

    @Override
    public Set<PermissionInfo> findPermissionInfoByRoles(@PathVariable("role") String role) {
        logger.error("调用{}异常{}","findPermissionInfoByCode",role);
        return null;
    }
}
