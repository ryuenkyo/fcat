package com.xfdmao.fcat.coin.service;

import com.xfdmao.fcat.coin.entity.BtcCoin;
import com.xfdmao.fcat.common.service.BaseService;

import java.util.Date;
import java.util.List;

/**
 * Created by fier on 2018/10/22
 */
public interface BtcCoinService extends BaseService<BtcCoin>{
    void saveBtcCoins(List<List<String>> lists, Date colloctDate);

    boolean selectListByColloctDate(Date colloctDate);
}
