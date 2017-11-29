package com.xfdmao.fcat.user.entity;

import java.util.Date;
import javax.persistence.*;

@Table(name = "t_user_log")
public class TUserLog {
    @Id
    private Integer id;

    /**
     * 用户名
     */
    private String username;

    /**
     * 操作时间
     */
    @Column(name = "opt_time")
    private Date optTime;

    /**
     * 用户sessionId
     */
    @Column(name = "session_id")
    private String sessionId;

    /**
     * 操作
     */
    private String action;

    /**
     * 访问的方法
     */
    private String method;

    /**
     * 数据库创建时间
     */
    @Column(name = "create_time")
    private Date createTime;

    /**
     * @return id
     */
    public Integer getId() {
        return id;
    }

    /**
     * @param id
     */
    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * 获取用户名
     *
     * @return username - 用户名
     */
    public String getUsername() {
        return username;
    }

    /**
     * 设置用户名
     *
     * @param username 用户名
     */
    public void setUsername(String username) {
        this.username = username;
    }

    /**
     * 获取操作时间
     *
     * @return opt_time - 操作时间
     */
    public Date getOptTime() {
        return optTime;
    }

    /**
     * 设置操作时间
     *
     * @param optTime 操作时间
     */
    public void setOptTime(Date optTime) {
        this.optTime = optTime;
    }

    /**
     * 获取用户sessionId
     *
     * @return session_id - 用户sessionId
     */
    public String getSessionId() {
        return sessionId;
    }

    /**
     * 设置用户sessionId
     *
     * @param sessionId 用户sessionId
     */
    public void setSessionId(String sessionId) {
        this.sessionId = sessionId;
    }

    /**
     * 获取操作
     *
     * @return action - 操作
     */
    public String getAction() {
        return action;
    }

    /**
     * 设置操作
     *
     * @param action 操作
     */
    public void setAction(String action) {
        this.action = action;
    }

    /**
     * 获取访问的方法
     *
     * @return method - 访问的方法
     */
    public String getMethod() {
        return method;
    }

    /**
     * 设置访问的方法
     *
     * @param method 访问的方法
     */
    public void setMethod(String method) {
        this.method = method;
    }

    /**
     * 获取数据库创建时间
     *
     * @return create_time - 数据库创建时间
     */
    public Date getCreateTime() {
        return createTime;
    }

    /**
     * 设置数据库创建时间
     *
     * @param createTime 数据库创建时间
     */
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }
}