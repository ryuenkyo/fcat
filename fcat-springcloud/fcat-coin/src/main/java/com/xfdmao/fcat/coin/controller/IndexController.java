package com.xfdmao.fcat.coin.controller;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.xfdmao.fcat.coin.entity.BtcCoin;
import com.xfdmao.fcat.coin.entity.BtcHold;
import com.xfdmao.fcat.coin.service.BtcCoinService;
import com.xfdmao.fcat.coin.service.BtcHoldService;
import com.xfdmao.fcat.common.util.DateUtil;
import com.xfdmao.fcat.common.util.JsonUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * Created by fier on 2018/10/31.
 */
@Controller
public class IndexController {
    @Autowired
    private BtcHoldService btcHoldService;
    @RequestMapping(value = "")
    public String todayDataEx(Model model){
        List<BtcHold> resultList = btcHoldService.selectListAll();
        List<String> colloctDates = new ArrayList<>();
        List<Double> prices = new ArrayList<>();
        List<Long> totals = new ArrayList<>();
        for(int i=0;i<resultList.size();i++){
            System.out.println(resultList.get(i));
            BtcHold btcHold = resultList.get(i);
            colloctDates.add(DateUtil.formatDate(btcHold.getColloctDate(),DateUtil.TIME_PATTERN_DAY));
            prices.add(btcHold.getPrice().doubleValue());
            totals.add(btcHold.getTotal());
        }
        for(BtcHold btcHold:resultList){
            colloctDates.add(DateUtil.formatDate(btcHold.getColloctDate(),DateUtil.TIME_PATTERN_DAY));
            prices.add(btcHold.getPrice().doubleValue());
            totals.add(btcHold.getTotal());
        }
        model.addAttribute("colloctDates",colloctDates);
        model.addAttribute("prices",prices);
        model.addAttribute("totals",totals);
        return "index";
    }
}
