package com.xfdmao.fcat.user.entity;

import java.math.BigDecimal;
import java.util.Date;
import javax.persistence.*;

@Table(name = "btc_coin")
public class BtcCoin {
    @Id
    private Integer id;

    /**
     * 名称
     */
    private String name;

    /**
     * 币代号
     */
    private String code;

    /**
     * 流通市值
     */
    @Column(name = "market_value")
    private String marketValue;

    /**
     * 价格
     */
    private Double price;

    /**
     * 流通数量
     */
    @Column(name = "market_quantity")
    private String marketQuantity;

    /**
     * 24小时成交额
     */
    @Column(name = "turnover_24h")
    private String turnover24h;

    /**
     * 24小时涨幅
     */
    @Column(name = "gain_24h")
    private String gain24h;

    /**
     * 换手率
     */
    @Column(name = "turnover_rate")
    private String turnoverRate;

    /**
     * 流通率
     */
    @Column(name = "market_rate")
    private String marketRate;

    /**
     * 是否分叉
     */
    private String fork;

    /**
     * 众筹价格
     */
    @Column(name = "crowdfunding_price")
    private BigDecimal crowdfundingPrice;

    @Column(name = "collecte_time")
    private Date collecteTime;

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
     * 获取名称
     *
     * @return name - 名称
     */
    public String getName() {
        return name;
    }

    /**
     * 设置名称
     *
     * @param name 名称
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * 获取币代号
     *
     * @return code - 币代号
     */
    public String getCode() {
        return code;
    }

    /**
     * 设置币代号
     *
     * @param code 币代号
     */
    public void setCode(String code) {
        this.code = code;
    }

    /**
     * 获取流通市值
     *
     * @return market_value - 流通市值
     */
    public String getMarketValue() {
        return marketValue;
    }

    /**
     * 设置流通市值
     *
     * @param marketValue 流通市值
     */
    public void setMarketValue(String marketValue) {
        this.marketValue = marketValue;
    }

    /**
     * 获取价格
     *
     * @return price - 价格
     */
    public Double getPrice() {
        return price;
    }

    /**
     * 设置价格
     *
     * @param price 价格
     */
    public void setPrice(Double price) {
        this.price = price;
    }

    /**
     * 获取流通数量
     *
     * @return market_quantity - 流通数量
     */
    public String getMarketQuantity() {
        return marketQuantity;
    }

    /**
     * 设置流通数量
     *
     * @param marketQuantity 流通数量
     */
    public void setMarketQuantity(String marketQuantity) {
        this.marketQuantity = marketQuantity;
    }

    /**
     * 获取24小时成交额
     *
     * @return turnover_24h - 24小时成交额
     */
    public String getTurnover24h() {
        return turnover24h;
    }

    /**
     * 设置24小时成交额
     *
     * @param turnover24h 24小时成交额
     */
    public void setTurnover24h(String turnover24h) {
        this.turnover24h = turnover24h;
    }

    /**
     * 获取24小时涨幅
     *
     * @return gain_24h - 24小时涨幅
     */
    public String getGain24h() {
        return gain24h;
    }

    /**
     * 设置24小时涨幅
     *
     * @param gain24h 24小时涨幅
     */
    public void setGain24h(String gain24h) {
        this.gain24h = gain24h;
    }

    /**
     * 获取换手率
     *
     * @return turnover_rate - 换手率
     */
    public String getTurnoverRate() {
        return turnoverRate;
    }

    /**
     * 设置换手率
     *
     * @param turnoverRate 换手率
     */
    public void setTurnoverRate(String turnoverRate) {
        this.turnoverRate = turnoverRate;
    }

    /**
     * 获取流通率
     *
     * @return market_rate - 流通率
     */
    public String getMarketRate() {
        return marketRate;
    }

    /**
     * 设置流通率
     *
     * @param marketRate 流通率
     */
    public void setMarketRate(String marketRate) {
        this.marketRate = marketRate;
    }

    /**
     * 获取是否分叉
     *
     * @return fork - 是否分叉
     */
    public String getFork() {
        return fork;
    }

    /**
     * 设置是否分叉
     *
     * @param fork 是否分叉
     */
    public void setFork(String fork) {
        this.fork = fork;
    }

    /**
     * 获取众筹价格
     *
     * @return crowdfunding_price - 众筹价格
     */
    public BigDecimal getCrowdfundingPrice() {
        return crowdfundingPrice;
    }

    /**
     * 设置众筹价格
     *
     * @param crowdfundingPrice 众筹价格
     */
    public void setCrowdfundingPrice(BigDecimal crowdfundingPrice) {
        this.crowdfundingPrice = crowdfundingPrice;
    }

    /**
     * @return collecte_time
     */
    public Date getCollecteTime() {
        return collecteTime;
    }

    /**
     * @param collecteTime
     */
    public void setCollecteTime(Date collecteTime) {
        this.collecteTime = collecteTime;
    }

    /**
     * @return create_time
     */
    public Date getCreateTime() {
        return createTime;
    }

    /**
     * @param createTime
     */
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }
}