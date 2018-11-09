package com.xfdmao.fcat.coin.controller;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.xfdmao.fcat.coin.entity.BtcHold;
import com.xfdmao.fcat.coin.service.BtcHoldService;
import com.xfdmao.fcat.common.util.DateUtil;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * Created by fier on 2018/10/31.
 */
@Controller
public class HttpController {
    @RequestMapping(value = "")
    public String getHold100(){

        return "index";
    }

    public static void main(String[] args) {
        test1();
    }

    public static void test1() {
        Document doc = getDocument("https://btc.com/stats/rich-list");
        // 获取目标HTML代码
        Element element1 = doc.selectFirst("[class=diff-history]");
        Elements elementsTr = element1.select("tr");
        JSONArray jsonArray = new JSONArray();
        Long  balanceTotal = 0l;
        for(int i=0;i<elementsTr.size();i++){
            if(i==0)continue;
            Element element = elementsTr.get(i);
            Elements elementsTd = element.select("td");
            JSONObject jsonObject = new JSONObject();
            jsonObject.put("index",elementsTd.get(0).text());
            jsonObject.put("url",elementsTd.get(1).selectFirst("a").attr("href"));
            jsonObject.put("address",elementsTd.get(1).selectFirst("a").text());
            jsonObject.put("balance",elementsTd.get(2).text().replaceAll(",",""));
       /*     String balance = getBalance(jsonObject.getString("url"));
            if(balance!=null && !balance.equals(jsonObject.getString("balance"))){
                System.out.println("更新balance");
                jsonObject.put("balance",balance);
            }*/
            balanceTotal += jsonObject.getDouble("balance").longValue();
            jsonObject.put("colloct_date", DateUtil.formatDate(new Date(),DateUtil.TIME_PATTERN_DISPLAY));
            jsonArray.add(jsonObject);
        }
        System.out.println(jsonArray.toString());
        System.out.println(balanceTotal);
    }

    public static String getBalance(String url)  {
        Document doc = getDocument(url);
        // 获取目标HTML代码
        String balance = "";
        try{
            balance = doc.selectFirst("[class=abstract-section]").select("dl").get(1).text().replaceAll(",","").replaceAll("BTC","").replace("Balance","").replace(" ","");
        }catch (Exception e){
            System.out.println(url);
            try {
                Thread.sleep(2000);
            } catch (InterruptedException e1) {
                e1.printStackTrace();
            }
            return null;
        }

        System.out.println(balance);
        return balance;
    }

    /**
     *
     * @param url 访问路径
     * @return
     */
    public static Document getDocument (String url){
        try {
            //5000是设置连接超时时间，单位ms
            return Jsoup.connect(url).timeout(5000).get();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }

}
