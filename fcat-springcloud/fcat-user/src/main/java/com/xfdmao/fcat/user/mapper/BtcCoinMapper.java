package com.xfdmao.fcat.user.mapper;

import com.xfdmao.fcat.user.entity.BtcCoin;
import tk.mybatis.mapper.common.Mapper;

import java.util.List;

public interface BtcCoinMapper extends Mapper<BtcCoin> {
    List<BtcCoin> listByPageNewRecord();

    boolean insertList(List<BtcCoin> btcCoinList);
}