package com.xfdmao.fcat.user.service.impl;

import com.xfdmao.fcat.common.service.impl.BaseServiceImpl;
import com.xfdmao.fcat.user.entity.BtcCoin;
import com.xfdmao.fcat.user.entity.TUserLog;
import com.xfdmao.fcat.user.mapper.BtcCoinMapper;
import com.xfdmao.fcat.user.mapper.TUserLogMapper;
import com.xfdmao.fcat.user.service.BtcCoinService;
import com.xfdmao.fcat.user.service.TUserLogService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by fier on 2017/11/28.
 */
@Service
public class BtcCoinServiceImpl extends BaseServiceImpl<BtcCoinMapper,BtcCoin> implements BtcCoinService {
    @Override
    public List<BtcCoin> listByPageNewRecord() {
        return mapper.listByPageNewRecord();
    }

    @Override
    @Transactional
    public boolean insertList(List<BtcCoin> btcCoinList) {
        return mapper.insertList(btcCoinList);
    }

}
