package com.xfdmao.fcat.common.util;

import com.alibaba.fastjson.JSONObject;
import com.aliyun.oss.ClientException;
import com.aliyun.oss.OSSClient;
import com.aliyun.oss.OSSException;
import com.aliyun.oss.model.*;

import java.io.File;
import java.io.InputStream;
import java.util.List;

/**
 * Created by xiangfei on 2017/9/23.
 */
public class OssUtil {
    private static String endpoint = "http://oss-cn-beijing.aliyuncs.com";
    private static String accessKeyId = "LTAIhJpxs9yxJ1pG";
    private static String accessKeySecret = "Wvy95GjBqJqAwHuAN8o5eCKdFwkDnx";

    private static String bucketName = "oss-xfdmao-01";
    private static String key = "images/abc.png";

    // @Override
    public static int uploadFileToOss(File f, String path) {
        OSSClient client = new OSSClient(endpoint, accessKeyId, accessKeySecret);

        try {
            System.out.println("Uploading a new object to OSS from a file\n");
            client.putObject(new PutObjectRequest(bucketName, path, f));
        } catch (OSSException oe) {
            System.out.println("Caught an OSSException, which means your request made it to OSS, "
                    + "but was rejected with an error response for some reason.");
            System.out.println("Error Message: " + oe.getErrorCode());
            System.out.println("Error Code:       " + oe.getErrorCode());
            System.out.println("Request ID:      " + oe.getRequestId());
            System.out.println("Host ID:           " + oe.getHostId());
        } catch (ClientException ce) {
            System.out.println("Caught an ClientException, which means the client encountered "
                    + "a serious internal problem while trying to communicate with OSS, "
                    + "such as not being able to access the network.");
            System.out.println("Error Message: " + ce.getMessage());
        } finally {
            client.shutdown();
        }
        return 0;
    }

    public static int uploadFileToOss(InputStream f, String path) {
        OSSClient client = new OSSClient(endpoint, accessKeyId, accessKeySecret);

        try {
            client.putObject(new PutObjectRequest(bucketName, path, f));
        } catch (OSSException oe) {
            System.err.print(JSONObject.toJSONString(oe));
        } catch (ClientException ce) {
            System.err.print(JSONObject.toJSONString(ce));
        } finally {
            client.shutdown();
        }
        return 0;
    }


    public static void listAllObjectsInFolder(String bucketName,String prefix,List<String> fileList) {
        OSSClient client = new OSSClient(endpoint, accessKeyId, accessKeySecret);
        ListObjectsRequest listObjectsRequest = new ListObjectsRequest(bucketName);
        listObjectsRequest.setDelimiter("/");
        listObjectsRequest.setPrefix(prefix);
        ObjectListing listing = client.listObjects(listObjectsRequest);
        for (OSSObjectSummary objectSummary : listing.getObjectSummaries()) {
            if(objectSummary.getKey().contains(".")){
                //默认带.的为文件
                fileList.add(objectSummary.getKey());
            }
        }
        //递归子文件夹
        for (String commonPrefix : listing.getCommonPrefixes()) {
            if(commonPrefix.contains(".")){
                //默认带.的为文件
                fileList.add(commonPrefix);
            }else listAllObjectsInFolder(bucketName, commonPrefix, fileList);
        }
    }

    public static final InputStream getOSS2InputStream(OSSClient client, String bucketName, String diskName,
                                                       String key) {
        OSSObject ossObj = client.getObject(bucketName, diskName + key);
        return ossObj.getObjectContent();
    }
}
