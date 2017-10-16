package com.xfdmao.fcat.user.mapper;

import com.xfdmao.fcat.user.entity.TUser;
import tk.mybatis.mapper.common.Mapper;

public interface TUserMapper extends Mapper<TUser> {
    TUser getByUsername(String userName);
}