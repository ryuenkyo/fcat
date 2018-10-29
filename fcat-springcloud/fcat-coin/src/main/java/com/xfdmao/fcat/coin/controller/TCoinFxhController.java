package com.xfdmao.fcat.coin.controller;

import com.alibaba.fastjson.JSONObject;
import com.netflix.discovery.converters.Auto;
import com.xfdmao.fcat.coin.entity.BtcCoin;
import com.xfdmao.fcat.coin.entity.TDict;
import com.xfdmao.fcat.coin.service.BtcCoinService;
import com.xfdmao.fcat.coin.service.TDictService;
import com.xfdmao.fcat.common.controller.BaseController;
import com.xfdmao.fcat.common.util.DateUtil;
import com.xfdmao.fcat.common.util.ExcelReaderUtil;
import com.xfdmao.fcat.common.util.JsonUtil;
import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.params.BasicHttpParams;
import org.apache.http.params.HttpConnectionParams;
import org.apache.http.params.HttpParams;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.File;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * Created by fier on 2018/10/22
 */
@RestController
@RequestMapping("v1/coinFxh")
public class TCoinFxhController  {

    @Value("${coin.fxh.allCoinDataFilePath}")
    private  String  allCoinFileSavePath;

    @Autowired
    private BtcCoinService btcCoinService;

   @Scheduled(cron = "0 5 8 * * ?")
    @GetMapping(value = "/getFile")
    public JSONObject getFile(){
        String urlsrc = "https://api.feixiaohao.com/coins/download/";
        String outpath = allCoinFileSavePath+"/"+DateUtil.formatDate(new Date(),DateUtil.TIME_PATTERN_DAY)+".xls";
        // 输入流
        InputStream in = null;
        // 文件输出流
        FileOutputStream out = null;
       File outFile = new File(outpath);
       if(!outFile.exists()){
           try{
               HttpClient httpClient = HttpClients.createDefault();
               HttpGet httpget2 = new HttpGet(urlsrc); //对下载链接get实现下载
               HttpResponse httpResponse2 = httpClient.execute(httpget2);
               HttpEntity entity = httpResponse2.getEntity(); // 获取响应里面的内容
               in = entity.getContent(); // 得到服务气端发回的响应的内容（都在一个流里面）
               out = new FileOutputStream(outFile);
               byte[] b = new byte[1024];
               int len = 0;
               while((len=in.read(b))!= -1){
                   out.write(b,0,len);
               }
               in.close();
               out.close();
               dealTodayFile();
           }catch(Exception e){
               e.printStackTrace();
               return JsonUtil.getFailJsonObject();
           }
       }
        return JsonUtil.getSuccessJsonObject();
    }

    @GetMapping(value = "/dealTodayFile")
    public JSONObject dealTodayFile(){
        new Thread() {
            public void run() {
                List<File> files = new ArrayList<File>();
                File file= new File(allCoinFileSavePath);
                if(!file.isDirectory()){
                }else if(file.isDirectory()){
                    String[] filelist=file.list();
                    for(int i = 0;i<filelist.length;i++){
                        File readfile = new File(allCoinFileSavePath+"/"+filelist[i]);
                        files.add(readfile);
                        String dateString = "";
                        if(readfile.getAbsolutePath().contains("//")){
                            dateString = readfile.getAbsolutePath().substring(readfile.getAbsolutePath().lastIndexOf("\\")+1).replaceAll(".xls","");
                        }else{
                            dateString = readfile.getAbsolutePath().substring(readfile.getAbsolutePath().lastIndexOf("/")+1).replaceAll(".xls","");
                        }
                        Date colloctDate = DateUtil.toDate(dateString,DateUtil.TIME_PATTERN_DAY);
                        boolean flag = btcCoinService.selectListByColloctDate(colloctDate);
                        if(!flag){
                            if(colloctDate.equals(DateUtil.toDate(DateUtil.formatDate(new Date(),DateUtil.TIME_PATTERN_DAY),DateUtil.TIME_PATTERN_DAY))){
                                new Thread() {
                                    public void run() {
                                        btcCoinService.saveBtcCoins(ExcelReaderUtil.readExcel(readfile.getAbsolutePath()),colloctDate);
                                    }
                                }.start();
                            }
                        }
                    }
                }
            }
        }.start();
        return JsonUtil.getSuccessJsonObject();
    }

    @GetMapping(value = "/dealFile")
    public JSONObject dealFile(){
        new Thread() {
            public void run() {
                List<File> files = new ArrayList<File>();
                File file= new File(allCoinFileSavePath);
                if(!file.isDirectory()){
                }else if(file.isDirectory()){
                    String[] filelist=file.list();
                    for(int i = 0;i<filelist.length;i++){
                        File readfile = new File(allCoinFileSavePath+"/"+filelist[i]);
                        files.add(readfile);
                        String dateString = "";
                        try{
                            dateString = readfile.getAbsolutePath().substring(readfile.getAbsolutePath().lastIndexOf("\\")+1).replaceAll(".xls","");
                        }catch (Exception e){
                            dateString = readfile.getAbsolutePath().substring(readfile.getAbsolutePath().lastIndexOf("/")+1).replaceAll(".xls","");
                        }
                        Date colloctDate = DateUtil.toDate(dateString,DateUtil.TIME_PATTERN_DAY);
                        boolean flag = btcCoinService.selectListByColloctDate(colloctDate);
                        if(!flag){
                            new Thread() {
                                public void run() {
                                    btcCoinService.saveBtcCoins(ExcelReaderUtil.readExcel(readfile.getAbsolutePath()),colloctDate);
                                }
                            }.start();
                        }
                    }
                }
            }
        }.start();
        return JsonUtil.getSuccessJsonObject();
    }
}
