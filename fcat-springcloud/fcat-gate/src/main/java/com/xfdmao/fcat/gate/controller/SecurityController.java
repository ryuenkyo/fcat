package com.xfdmao.fcat.gate.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

/**
 * Created by xiangfei on 2017/10/16.
 */
@Controller
public class SecurityController {

	
	@RequestMapping(value = "/login", method = RequestMethod.GET)
	public String login(HttpServletRequest request,String err,ModelMap modelMap) {
		if("1".equals(err)){
			modelMap.put("errMsg", "用户名密码错误");
		}
		//判断该用户是否已经登录
		HttpSession httpSession = request.getSession();
		String redirectUrl =  (String) httpSession.getAttribute("redirectUrl");
		if(redirectUrl != null){
			return redirectUrl;
		}
		return "login";
	}

	@RequestMapping(value = "/gets", method = RequestMethod.GET)
	public String gets() {
		return "gets";
	}


}
