package com.xfdmao.fcat.user.controller;

import com.alibaba.fastjson.JSONObject;
import com.xfdmao.fcat.common.rest.BaseController;
import com.xfdmao.fcat.common.util.JsonUtil;
import com.xfdmao.fcat.user.entity.TGroup;
import com.xfdmao.fcat.user.entity.TUser;
import com.xfdmao.fcat.user.service.TUserService;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by xiangfei on 2017/10/17.
 */
@RestController
@RequestMapping("v1/tUser")
public class TUserController extends BaseController<TUserService,TUser,Integer>{

    /**
     * 通过名称模糊搜索获取用户列表
     * @return
     * @throws RuntimeException
     */
    @ApiOperation(value = "通过名称模糊搜索获取用户列表" )
    @RequestMapping(value = "getList/{key}", method = RequestMethod.GET)
    public JSONObject getList(@PathVariable String key)throws Exception{
        List<TUser> result = bsi.getByKey(key);
        return JsonUtil.getSuccessJsonObject(result);
    }

    /**
     * 通过组织ID获取用户列表
     * @return
     * @throws RuntimeException
     */
    @ApiOperation(value = "通过组织ID获取管理者用户列表" )
    @RequestMapping(value = "getListByGroupId/{groupId}", method = RequestMethod.GET)
    public JSONObject getLeadersByGroupId(@PathVariable Integer groupId)throws Exception{
        JSONObject result = new JSONObject();
        List<TUser> leaders = bsi.getLeadersByGroupId(groupId);
        List<TUser> members = bsi.getMembersByGroupId(groupId);
        result.put("leaders",leaders);
        result.put("members",members);
        return JsonUtil.getSuccessJsonObject(result);
    }
}
