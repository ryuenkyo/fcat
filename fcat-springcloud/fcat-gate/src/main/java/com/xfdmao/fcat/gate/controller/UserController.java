package com.xfdmao.fcat.gate.controller;


import com.xfdmao.fcat.api.vo.authority.SessionInfo;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import java.security.Principal;

/**
 * Created by xiangfei on 2017/10/16.
 */
@Controller
@RequestMapping
public class UserController {
    @RequestMapping("/user/info")
    public String info(Principal principal,HttpServletRequest request,ModelMap modelMap){
        System.out.println(principal);
        String username = principal.getName();

		SessionInfo sessionInfo = new SessionInfo();
		sessionInfo.setUserName(username);
		request.getSession().setAttribute("sessionInfo", sessionInfo);

        return "redirect:/fcat-angular/index";
    }
    
    
}
