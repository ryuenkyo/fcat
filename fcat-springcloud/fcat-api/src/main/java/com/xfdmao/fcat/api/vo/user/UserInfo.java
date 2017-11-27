package com.xfdmao.fcat.api.vo.user;

import lombok.Data;

import java.io.Serializable;

/**
 * Created by fier on 2017/11/22.
 */
@Data
public class UserInfo implements Serializable {
    /**
     * 用户基本信息
     */
    private TUserVo tUserVo;

    /**
     * 权限标识集合
     */
    private String[] permissions;

    /**
     * 角色集合
     */
    private String[] roles;

}
