package com.xfdmao.fcat.user.controller;

import com.alibaba.fastjson.JSONObject;
import com.xfdmao.fcat.common.rest.BaseController;
import com.xfdmao.fcat.common.util.JsonUtil;
import com.xfdmao.fcat.user.entity.TGroup;
import com.xfdmao.fcat.user.service.TGroupService;
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
@RequestMapping("v1/tGroup")
public class TGroupController extends BaseController<TGroupService,TGroup,Integer>{

    /**
     * 通过groupTypeId获取组织列表
     * @return
     * @throws RuntimeException
     */
    @ApiOperation(value = "通过menuId获取元素列表" )
    @RequestMapping(value = "groupTypeId/{groupTypeId}", method = RequestMethod.GET)
    public JSONObject getByMenuId(@PathVariable Integer groupTypeId)throws Exception{
        List<TGroup> result = bsi.getListBygroupTypeId(groupTypeId);
        return JsonUtil.getSuccessJsonObject(result);
    }
}
