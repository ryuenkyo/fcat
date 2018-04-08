package com.xfdmao.fcat.user.controller;

import com.alibaba.fastjson.JSONObject;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.sun.tools.internal.xjc.reader.xmlschema.bindinfo.BIConversion;
import com.xfdmao.fcat.common.constant.CommonConstant;
import com.xfdmao.fcat.common.controller.BaseController;
import com.xfdmao.fcat.common.util.JsonUtil;
import com.xfdmao.fcat.user.constant.UserConstant;
import com.xfdmao.fcat.user.entity.BtcCoin;
import com.xfdmao.fcat.user.entity.TUserLog;
import com.xfdmao.fcat.user.service.BtcCoinService;
import com.xfdmao.fcat.user.service.TUserLogService;
import com.xfdmao.fcat.user.util.ReadWriteExcel;
import com.xfdmao.fcat.user.util.UrlUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.io.File;
import java.io.IOException;
import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * Created by fier on 2017/11/28.
 */
@RestController
@RequestMapping("v1/btcCoin")
public class BtcCoinController extends BaseController<BtcCoinService,BtcCoin,Integer> {
    @Autowired
    private UserConstant userConstant;
    private Logger logger = LoggerFactory.getLogger(BtcCoinController.class);

    @RequestMapping(value = "/listByPage",method = RequestMethod.GET)
    @ResponseBody
    public JSONObject listByPage(Integer pageNum, Integer pageSize){

        pageNum = pageNum == null? CommonConstant.PAGE_NUM:pageNum;
        pageSize = pageSize == null?CommonConstant.PAGE_SIZE:pageSize;

        PageHelper.startPage(pageNum, pageSize);
        List<BtcCoin> tMenuList = baseServiceImpl.listByPageNewRecord();
        PageInfo page = new PageInfo(tMenuList);
        return JsonUtil.getSuccessJsonObject(page);
    }

    @Scheduled(fixedRate = 216000000, initialDelay = 0)
    @RequestMapping(value = "/getExcel",method = RequestMethod.GET)
    @ResponseBody
    public JSONObject getExcel() throws IOException {
        Date now = new Date();
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd-hh-mm-ss");
        String savePath = userConstant.btcExcelPath;
        String fileName = sdf.format(now)+".xls";
        File excelFile = new File(savePath+"/"+fileName);
        try{
            UrlUtil.downLoadFromUrl("https://api.feixiaohao.com/coins/download/",
                    fileName,savePath);
        }catch (Exception e) {
            logger.error(e.toString());
           return JsonUtil.getFailJsonObject();
        }
        List<JSONObject> coinList = ReadWriteExcel.getList(excelFile); // 创建文件对象)

        List<BtcCoin> btcCoinList = new ArrayList<BtcCoin>();
        for(JSONObject jsonObject:coinList){
            BtcCoin btcCoin = new BtcCoin();
            btcCoin.setCode(jsonObject.getString("1").split("-")[0]);
            btcCoin.setCreateTime(now);
            btcCoin.setCollecteTime(now);
            String cfp = jsonObject.getString("10");
            if(cfp==null || cfp.trim()=="" || cfp.isEmpty()){
                btcCoin.setCrowdfundingPrice(null);
            }else{
                btcCoin.setCrowdfundingPrice(new BigDecimal(cfp));
            }
            btcCoin.setFork(jsonObject.getString("9").isEmpty() ?"否":"是");
            btcCoin.setGain24h(jsonObject.getString("6"));
            btcCoin.setMarketQuantity(jsonObject.getString("4"));
            btcCoin.setMarketRate(jsonObject.getString("8"));
            btcCoin.setMarketValue(jsonObject.getString("2"));
            btcCoin.setName(jsonObject.getString("1"));
            try{
                btcCoin.setPrice(new Double(jsonObject.getString("3")));
            }catch (Exception e){
                btcCoin.setPrice(0.0);
            }
            try{
                btcCoin.setTurnover24h(Math.round(Double.valueOf(jsonObject.getString("5"))));
            }catch (Exception e){
                btcCoin.setTurnover24h(0L);
            }
            String tor = jsonObject.getString("7");
            if(tor!=null && !tor.trim().equals("?") && !tor.isEmpty()){
                btcCoin.setTurnoverRate(Double.valueOf(tor));
            }else{
                btcCoin.setTurnoverRate(0.0);
            }

            if(userConstant.btcCoinMyCoins.indexOf(btcCoin.getCode())>-1){
                System.out.println(btcCoin.getName()+"    "+btcCoin.getPrice());
            }
            btcCoinList.add(btcCoin);
        }
         if(!btcCoinList.isEmpty()){
            baseServiceImpl.insertList(btcCoinList);
        }
        excelFile.delete();
        return JsonUtil.getSuccessJsonObject();
    }
}
