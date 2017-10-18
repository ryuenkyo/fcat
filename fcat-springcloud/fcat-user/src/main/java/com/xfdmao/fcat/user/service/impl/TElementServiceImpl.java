package com.xfdmao.fcat.user.service.impl;

import com.xfdmao.fcat.common.service.impl.BaseServiceImpl;
import com.xfdmao.fcat.user.entity.TElement;
import com.xfdmao.fcat.user.mapper.TElementMapper;
import com.xfdmao.fcat.user.service.TElementService;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by xiangfei on 2017/10/17.
 */
@Service
public class TElementServiceImpl extends BaseServiceImpl<TElementMapper,TElement> implements TElementService {

    @Override
    public List<TElement> getListByMenuId(Integer menuId) {
        return mapper.getListByMenuId(menuId);
    }
}
