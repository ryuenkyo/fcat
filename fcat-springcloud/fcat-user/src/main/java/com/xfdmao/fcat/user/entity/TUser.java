package com.xfdmao.fcat.user.entity;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

@Table(name = "t_user")
@Data
public class TUser {
    @Id
    private Integer id;

    private String username;

    private String password;

    private String name;

    private String birthday;

    private String address;

    @Column(name = "mobile_phone")
    private String mobilePhone;

    @Column(name = "tel_phone")
    private String telPhone;

    private String email;

    /**
     * 'F'-女，'M'-男，'S'-保密
     */
    private String sex;

    /**
     * 'Y'-激活，'N'-未激活，'D'-已删除
     */
    private String status;

    @Column(name = "create_time")
    private Date createTime;

    @Column(name = "update_time")
    private Date updateTime;

}