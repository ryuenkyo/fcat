package com.xfdmao.fcat.coin.controller;

import com.alibaba.fastjson.JSONObject;
import com.xfdmao.fcat.common.util.StrUtil;
import org.apache.poi.hwpf.extractor.WordExtractor;
import org.apache.poi.openxml4j.exceptions.OpenXML4JException;
import org.apache.xmlbeans.XmlException;
import org.thymeleaf.expression.*;
import org.thymeleaf.expression.Arrays;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.lang.reflect.Array;
import java.util.*;

public class TestPoi {
    public static void main(String[] args) throws IOException, OpenXML4JException, XmlException {
        List<String> listA = new ArrayList<String>();
        Map<String,List<String>> mapB = new HashMap<String,List<String>>();
        Map<String,List<String>> mapC = new HashMap<String,List<String>>();
        String path = "E:\\1.doc";
        InputStream is = new FileInputStream(new File(path));
        WordExtractor extractor = new WordExtractor(is);
        String txt= extractor.getText();

        String splitA = "一、";
        String splitB = "二、";
        String splitC = "三、";
        String splitRN = "\r\n";
        String splitLeft = "（";
        String splitBlank = "　";
        System.out.println("=====================完整文章=====================");
        System.out.println(txt);
        System.out.println("=====================先进基层党组织=====================");
        String strA = txt.substring(txt.indexOf(splitA),txt.indexOf(splitB));
        String[] ssA = strA.split(splitRN);
        for(int i=1;i<ssA.length;i++){
            String s = ssA[i];
            String[] lines = s.split(" ");
            for(String str:lines){
                if(!StrUtil.isBlank(str)){
                    listA.add(str.replaceAll(" ","").replaceAll("　",""));
                }
            }
        }
        System.out.println(listA);

        System.out.println("=====================优秀党务工作者=====================");
        String strB = txt.substring(txt.indexOf(splitB),txt.indexOf(splitC));
        String[] ssB = strB.split(splitRN);

        getMap(mapB, splitLeft, splitBlank, ssB);
        System.out.println(mapB);

        System.out.println("=====================优秀共产党员=====================");
        int index = 0;
        String strC = txt.substring(txt.indexOf(splitC));
        strC = strC.substring(0,getindexC(strC));
        String[] ssC = strC.split(splitRN);
        getMap(mapC, splitLeft, splitBlank, ssC);
        System.out.println(mapC);
    }

    private static void getMap(Map<String, List<String>> mapB, String splitLeft, String splitBlank, String[] ssB) {
        String lastKey = "";
        for(int i=1;i<ssB.length;i++){
            String s = ssB[i];
            if(s.contains(splitLeft)){
                List<String> list = new ArrayList<>();
                String key = s.substring(0,s.indexOf(splitLeft));
                lastKey = key;
                mapB.put(key,list);
                continue;
            }
            List<String> list = mapB.get(lastKey);
            s = s.replace("  "," ").trim();
            //长度+1满足4的倍数
            if(!((s.length()+1)%4==0)){
                System.err.println("异常语句："+s);
                s=toNomal(s);
                System.err.println("修复异常语句："+s);
            }
            if(((s.length()+1)%4==0)){
                //正常格式
                int size = (s.length()+2)/4;
                for(int j=0;j<size;j++){
                    int endIndex = j*4+4;
                    if(j==size-1){
                        endIndex = j*4+3;
                    }
                    String str = s.substring(j*4,endIndex).replace(splitBlank,"").replace(" ","");
                    list.add(str);
                }
            }
            mapB.put(lastKey,list);
        }
    }


    private static int getindexC(String strC) {
        int minIndex = -1;
        String[] ss = new String[]{"的","，"};
        for(String s:ss){
            int index = strC.indexOf(s);
            if(minIndex==-1)minIndex = index;
            if(minIndex>index){
                minIndex = index;
            }
        }
        return minIndex;
    }

    private static String toNomal(String s) {
        int size = (s.length()+2)/4;
        for(int i=0;i<size;i++){
            if((i*4+4)>s.length())break;
            String str = s.substring(i*4,i*4+4);
            if(str.lastIndexOf("　")!=3){
                s = s.substring(0,i*4+3)+"　"+s.substring(i*4+3);
                s = toNomal(s);
                return s;
            }
        }
        return s;
    }
}