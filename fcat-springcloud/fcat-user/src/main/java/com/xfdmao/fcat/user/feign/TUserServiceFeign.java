package com.xfdmao.fcat.user.feign;

import com.xfdmao.fcat.api.vo.user.TUserVo;
import com.xfdmao.fcat.user.entity.TUser;
import com.xfdmao.fcat.user.service.TGroupService;
import com.xfdmao.fcat.user.service.TUserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;

/**
 * Created by xiangfei on 2017/10/16.
 */
@RestController
@RequestMapping("tUserServiceFeign")
public class TUserServiceFeign {
	private Logger logger = LoggerFactory.getLogger(TUserServiceFeign.class);
	@Autowired
	private TGroupService tGroupService;

	@Autowired
	private TUserService tUserService;
	/**
	 * 通过用户名获取用户的基本信息
	 * @param username
	 * @return
	 */
	@RequestMapping(value = "/user/username/{username}", method = RequestMethod.POST)
	public TUserVo getByUsername(@PathVariable("username") String username) {
		TUserVo tUserVo = null;
		logger.info("RPC通过用户名{}获取用户信息");
		try {
			TUser tUser = tUserService.getByUsername(username);
			if (tUser != null) {
				tUserVo = new TUserVo();
				BeanUtils.copyProperties(tUser,tUserVo);
				String[] roles = tGroupService.getCodeByUsername(username);
				tUserVo.setRoleList(Arrays.asList(roles));
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return tUserVo;
	}
}