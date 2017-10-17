package com.xfdmao.fcat.user.controller;

import com.xfdmao.fcat.common.rest.BaseController;
import com.xfdmao.fcat.user.entity.TGroup;
import com.xfdmao.fcat.user.service.TGroupService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by xiangfei on 2017/10/17.
 */
@RestController
@RequestMapping("v1/tGroup")
public class TGroupController extends BaseController<TGroupService,TGroup,Integer>{

}
