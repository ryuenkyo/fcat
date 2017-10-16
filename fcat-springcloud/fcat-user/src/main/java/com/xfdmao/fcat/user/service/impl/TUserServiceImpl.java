package com.xfdmao.fcat.user.service.impl;

import com.xfdmao.fcat.common.service.impl.BaseServiceImpl;
import com.xfdmao.fcat.user.entity.TUser;
import com.xfdmao.fcat.user.mapper.TUserMapper;
import com.xfdmao.fcat.user.service.TUserService;
import org.springframework.stereotype.Service;

/**
 * Created by xiangfei on 2017/10/16.
 */
@Service
public class TUserServiceImpl extends BaseServiceImpl<TUserMapper,TUser> implements TUserService{

    @Override
    public TUser getByUsername(String userName) {
        return mapper.getByUsername(userName);
    }
}
