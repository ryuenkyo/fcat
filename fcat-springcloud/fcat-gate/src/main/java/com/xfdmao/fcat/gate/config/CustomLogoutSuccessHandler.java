package com.xfdmao.fcat.gate.config;


import com.alibaba.fastjson.JSON;
import com.xfdmao.fcat.common.util.HttpHelper;
import com.xfdmao.fcat.common.util.JsonUtil;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.logout.LogoutSuccessHandler;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Created by xiangfei on 2017/10/24.
 */
public class CustomLogoutSuccessHandler implements LogoutSuccessHandler {

    @Override
    public void onLogoutSuccess(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse,
                                Authentication authentication) throws IOException, ServletException {
      String result = JSON.toJSONString(JsonUtil.getSuccessJsonObject(true));
      if (authentication != null && authentication.getDetails() != null) {
          try {
              httpServletRequest.getSession().invalidate();
              httpServletResponse.setStatus(HttpServletResponse.SC_OK);
          } catch (Exception e) {
              e.printStackTrace();
          }
      }
      HttpHelper.setResponseJsonData(httpServletResponse,result);
    }
}