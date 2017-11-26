package com.xfdmao.fcat.user.entity;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

@Table(name = "t_menu")
@Data
public class TMenu {
    @Id
    private Integer id;

    private String code;

    private String title;

    @Column(name = "parent_id")
    private Integer parentId;

    private String href;

    private String icon;

    @Column(name = "order_num")
    private Integer orderNum;

    private String path;

    private String enabled;

    @Column(name = "create_time")
    private Date createTime;

    @Column(name = "update_time")
    private Date updateTime;

}