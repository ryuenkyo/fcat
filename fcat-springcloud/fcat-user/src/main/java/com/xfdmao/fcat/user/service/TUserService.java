package com.xfdmao.fcat.user.service;

import com.xfdmao.fcat.common.service.BaseService;
import com.xfdmao.fcat.user.entity.TUser;

/**
 * Created by xiangfei on 2017/10/16.
 */
public interface TUserService extends BaseService<TUser>{

    TUser getByUsername(String userName);
}
