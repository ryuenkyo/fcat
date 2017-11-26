package com.xfdmao.fcat.user.entity;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

@Table(name = "t_element")
@Data
public class TElement {
    @Id
    private Integer id;

    private String code;

    private String type;

    private String name;

    private String uri;

    @Column(name = "menu_id")
    private Integer menuId;

    @Column(name = "parent_id")
    private Integer parentId;

    private String path;

    private String method;

    @Column(name = "create_time")
    private Date createTime;

    @Column(name = "update_time")
    private Date updateTime;

}