package com.xfdmao.fcat.user.service;

import com.xfdmao.fcat.common.service.BaseService;
import com.xfdmao.fcat.user.entity.BtcCoin;
import com.xfdmao.fcat.user.entity.TUserLog;

import java.util.List;

/**
 * Created by fier on 2018/03/28.
 */
public interface BtcCoinService extends BaseService<BtcCoin>{
    List<BtcCoin> listByPageNewRecord();
    boolean insertList(List<BtcCoin> btcCoinList);
}
