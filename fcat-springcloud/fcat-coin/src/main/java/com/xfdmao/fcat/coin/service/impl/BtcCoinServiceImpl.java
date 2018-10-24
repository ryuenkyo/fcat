package com.xfdmao.fcat.coin.service.impl;

import com.xfdmao.fcat.coin.entity.BtcCoin;
import com.xfdmao.fcat.coin.mapper.BtcCoinMapper;
import com.xfdmao.fcat.coin.service.BtcCoinService;
import com.xfdmao.fcat.common.service.impl.BaseServiceImpl;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * Created by fier on 2018/10/22
 */
@Service
public class BtcCoinServiceImpl extends BaseServiceImpl<BtcCoinMapper,BtcCoin> implements BtcCoinService{
    @Override
    @Transactional
    public void saveBtcCoins(List<List<String>> lists, Date colloctDate) {
        List<BtcCoin> resultList = new ArrayList<>();
        int i=0;
        for(List<String> obj:lists){
            if(i++==0)continue;
            BtcCoin btcCoin = new BtcCoin();
            btcCoin.setName(obj.get(0));
            if(obj.get(0).contains("-")){
                btcCoin.setCode(obj.get(0).substring(0,obj.get(0).indexOf("-")));
            }else{
                btcCoin.setCode(obj.get(0));
            }
            btcCoin.setMarketValue(obj.get(1));
            try {
                btcCoin.setPrice(Double.valueOf(obj.get(2)));
            }catch (Exception e){

            }
            btcCoin.setMarketQuantity(obj.get(3));
            try {
                btcCoin.setTurnover24h(Math.round(Double.valueOf(obj.get(4))));
            }catch (Exception e){

            }
            btcCoin.setGain24h(obj.get(5));
            btcCoin.setTurnoverRate(obj.get(6));
            btcCoin.setMarketRate(obj.get(7));
            btcCoin.setFork(obj.get(8));
            try {
                btcCoin.setCrowdfundingPrice(BigDecimal.valueOf(Double.valueOf(obj.get(9))));
            }catch (Exception e){

            }
            try {
                btcCoin.setCollecteTime(colloctDate);
            }catch (Exception e){

            }
            btcCoin.setCreateTime(new Date());
            resultList.add(btcCoin);
            insert(btcCoin);
        }
    }

    @Override
    public boolean selectListByColloctDate(Date colloctDate) {
        BtcCoin btcCoin = new BtcCoin();
        btcCoin.setCollecteTime(colloctDate);
        List<BtcCoin> btcCoins = selectList(btcCoin);
        if(btcCoins==null || btcCoins.isEmpty()){
            return false;
        }
        return true;
    }
}
