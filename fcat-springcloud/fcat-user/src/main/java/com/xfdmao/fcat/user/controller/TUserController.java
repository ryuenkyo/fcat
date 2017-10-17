package com.xfdmao.fcat.user.controller;

import com.alibaba.fastjson.JSONObject;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.xfdmao.fcat.common.constant.CommonConstant;
import com.xfdmao.fcat.common.rest.BaseController;
import com.xfdmao.fcat.common.util.JsonUtil;
import com.xfdmao.fcat.user.entity.TUser;
import com.xfdmao.fcat.user.service.TUserService;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

/**
 * Created by xiangfei on 2017/7/25.
 */
@RestController
@RequestMapping("v1/tUser")
public class TUserController extends BaseController<TUserService,TUser,Integer>{
    @Autowired
    protected HttpServletRequest request;
    @Autowired
    private TUserService tUserService;

    /**
     * 测试从session中获取用户信息
     * @return
     * @throws RuntimeException
     */
    @ApiOperation(value = "测试session中的用户信息" )
    @RequestMapping(value = "getTUsersByPage", method = RequestMethod.GET)
    public JSONObject getTUsersByPage(Integer pageNum, Integer pageSize)throws Exception{

        pageNum = pageNum == null? CommonConstant.PAGE_NUM:pageNum;
        pageSize = pageSize == null?CommonConstant.PAGE_SIZE:pageSize;

        PageHelper.startPage(pageNum, pageSize);
        List<TUser> tUserList = tUserService.selectListAll();
        PageInfo page = new PageInfo(tUserList);
        return JsonUtil.getSuccessJsonObject(page);
    }

}
