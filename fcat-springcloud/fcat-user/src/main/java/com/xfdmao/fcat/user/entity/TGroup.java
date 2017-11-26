package com.xfdmao.fcat.user.entity;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

@Table(name = "t_group")
@Data
public class TGroup {
    @Id
    private Integer id;

    private String code;

    private String name;

    @Column(name = "parent_id")
    private Integer parentId;

    private String path;

    @Column(name = "group_type_id")
    private Integer groupTypeId;

    @Column(name = "create_time")
    private Date createTime;

    @Column(name = "update_time")
    private Date updateTime;

}