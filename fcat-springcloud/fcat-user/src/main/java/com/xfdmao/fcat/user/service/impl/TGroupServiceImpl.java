package com.xfdmao.fcat.user.service.impl;

import com.xfdmao.fcat.common.service.impl.BaseServiceImpl;
import com.xfdmao.fcat.user.entity.TGroup;
import com.xfdmao.fcat.user.mapper.TGroupMapper;
import com.xfdmao.fcat.user.service.TGroupService;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by xiangfei on 2017/10/17.
 */
@Service
public class TGroupServiceImpl extends BaseServiceImpl<TGroupMapper,TGroup> implements TGroupService {

    @Override
    public List<TGroup> getListBygroupTypeId(Integer groupTypeId) {
        List<TGroup> resultList = mapper.getListByGroupTypeId(groupTypeId);
        return resultList;
    }
}
