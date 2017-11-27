package com.xfdmao.fcat.api.util;


import com.alibaba.fastjson.JSONObject;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.servlet.http.HttpServletRequest;
import java.util.Base64;
import java.util.List;

/**
 * Created by xiangfei on 2017/10/23.
 */
public class UserDetailsUtil {
    private static Logger logger = LoggerFactory.getLogger(UserDetailsUtil.class);
    /**
     * 根据请求heard中的token获取用户
     *
     * @return 用户名
     */
    public static String getUsername(HttpServletRequest request) {
        String authorization = request.getHeader(com.xfdmao.fcat.api.constant.CommonConstant.REQ_HEADER);
        logger.debug("FCat:authorization:{}",authorization);
        String token = StringUtils.substringAfter(authorization, com.xfdmao.fcat.api.constant.CommonConstant.TOKEN_SPLIT);
        logger.debug("FCat:token:{}",token);
        String key = Base64.getEncoder().encodeToString(com.xfdmao.fcat.api.constant.CommonConstant.JWT_SIGN_KEY.getBytes());
        logger.debug("FCat:key:{}",key);
        Claims claims = Jwts.parser().setSigningKey(key).parseClaimsJws(token).getBody();
        logger.debug("FCat:claims:{}", JSONObject.toJSONString(claims));
        return claims.get("user_name").toString();
    }

    /**
     * 根据请求heard中的token获取用户角色
     *
     * @return 角色名
     */
    public static List<String> getRole(HttpServletRequest request) {
        String authorization = request.getHeader(com.xfdmao.fcat.api.constant.CommonConstant.REQ_HEADER);
        String token = StringUtils.substringAfter(authorization, com.xfdmao.fcat.api.constant.CommonConstant.TOKEN_SPLIT);
        String key = Base64.getEncoder().encodeToString(com.xfdmao.fcat.api.constant.CommonConstant.JWT_SIGN_KEY.getBytes());
        Claims claims = Jwts.parser().setSigningKey(key).parseClaimsJws(token).getBody();
        List<String> roleNames = (List<String>) claims.get("authorities");
        return roleNames;
    }
}
