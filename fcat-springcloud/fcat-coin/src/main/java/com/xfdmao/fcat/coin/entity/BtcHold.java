package com.xfdmao.fcat.coin.entity;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.*;

@Table(name = "btc_hold")
public class BtcHold {
    @Id
    private Integer id;

    @Column(name = "colloct_date")
    private Date colloctDate;

    private Double price;

    private Long total;

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
     * @return colloct_date
     */
    public Date getColloctDate() {
        return colloctDate;
    }

    /**
     * @param colloctDate
     */
    public void setColloctDate(Date colloctDate) {
        this.colloctDate = colloctDate;
    }

    /**
     * @return price
     */
    public Double getPrice() {
        return price;
    }

    /**
     * @param price
     */
    public void setPrice(Double price) {
        this.price = price;
    }

    /**
     * @return total
     */
    public Long getTotal() {
        return total;
    }

    /**
     * @param total
     */
    public void setTotal(Long total) {
        this.total = total;
    }

    @Override
    public String toString() {
        return "BtcHold{" +
                "id=" + id +
                ", colloctDate=" + colloctDate +
                ", price=" + price +
                ", total=" + total +
                '}';
    }
}