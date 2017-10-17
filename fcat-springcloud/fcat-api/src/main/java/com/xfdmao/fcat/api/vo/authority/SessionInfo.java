package com.xfdmao.fcat.api.vo.authority;

import java.io.Serializable;

import com.xfdmao.fcat.api.vo.user.AuthInfo;

import lombok.Data;

/**
 * Created by xiangfei on 2017/10/16.
 */
@Data
public class SessionInfo implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = -8081309947551163572L;
	/**
	 * 用户id
	 */
	private Integer userId;
	/**
	 * 登录名
	 */
    private String userName;

    private AuthInfo authinfo;

}
