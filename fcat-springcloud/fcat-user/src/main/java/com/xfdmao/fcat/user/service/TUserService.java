package com.xfdmao.fcat.user.service;

import com.xfdmao.fcat.user.entity.TUser;

/**
 * Created by xiangfei on 2017/10/16.
 */
public interface TUserService{

    TUser getByUsername(String userName);
}
