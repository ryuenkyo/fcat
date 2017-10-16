package com.xfdmao.fcat.user.controller;

import javax.servlet.http.HttpServletRequest;

import com.xfdmao.fcat.user.entity.TUser;
import com.xfdmao.fcat.user.rpc.TUserServiceRpc;
import com.xfdmao.fcat.user.service.TUserService;
import org.apache.commons.beanutils.BeanUtils;
import org.apache.commons.lang.RandomStringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.alibaba.fastjson.JSONObject;
import com.xfdmao.fcat.api.vo.authority.SessionInfo;
import com.xfdmao.fcat.common.util.JsonUtil;
import com.xfdmao.fcat.user.service.LoginUserService;
import com.xfdmao.fcat.user.entity.LoginUser;

import io.swagger.annotations.ApiOperation;

/**
 * Created by xiangfei on 2017/7/25.
 */
@RestController
@RequestMapping("v1/SessionController")
public class SessionController extends TUserServiceRpc{
    @Autowired
    protected HttpServletRequest request;
    @Autowired
    private LoginUserService loginUserService;

    /**
     * 测试从session中获取用户信息
     * @return
     * @throws RuntimeException
     */
    @ApiOperation(value = "测试session中的用户信息" )
    @RequestMapping(value = "session/userInfo", method = RequestMethod.GET)
    public JSONObject sessionUserInfo()throws Exception{
        try {
            SessionInfo sessionInfo  = (SessionInfo) request.getSession().getAttribute("sessionInfo");
            System.err.println("sessionInfo :"+sessionInfo);
            return JsonUtil.getSuccessJsonObject(sessionInfo);
        }catch ( Exception e){
            e.printStackTrace();
        }
        return JsonUtil.getFailJsonObject();
    }


    @ApiOperation(value = "测试session中的用户信息" )
    @RequestMapping(value = "login", method = RequestMethod.GET)
    public JSONObject login(String username) {
        String password = String.valueOf(RandomStringUtils.randomNumeric(6));
        LoginUser loginUser = loginUserService.saveLoginUser(username,password);
        LoginUser loginUser1 = loginUserService.getLoginUser(username);
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("设置redis中的loginUser",loginUser);
        System.out.println(loginUser);
        jsonObject.put("读取redis中loginUser",loginUser1);
        System.out.println(loginUser1);
        return jsonObject;
    }


}
