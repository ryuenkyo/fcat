package com.xfdmao.fcat.user.controller;

import com.xfdmao.fcat.common.rest.BaseController;
import com.xfdmao.fcat.user.entity.TUserGroup;
import com.xfdmao.fcat.user.service.TUserGroupService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by xiangfei on 2017/10/17.
 */
@RestController
@RequestMapping("v1/tUserGroup")
public class TUserGroupController extends BaseController<TUserGroupService,TUserGroup,Integer>{
}
