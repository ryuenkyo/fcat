package com.xfdmao.fcat.user.controller;

import com.xfdmao.fcat.common.rest.BaseController;
import com.xfdmao.fcat.user.entity.TUser;
import com.xfdmao.fcat.user.service.TUserService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by xiangfei on 2017/10/17.
 */
@RestController
@RequestMapping("v1/tUser")
public class TUserController extends BaseController<TUserService,TUser,Integer>{

}