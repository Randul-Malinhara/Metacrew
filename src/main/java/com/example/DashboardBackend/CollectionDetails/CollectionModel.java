package com.example.DashboardBackend.CollectionDetails;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.sql.Date;

@Entity
@Table(name = "collection_details")
public class CollectionModel {
    @Id
    @Column(name = "c_id")
    int trackingId;
    @Column(name = "agent_id")
    int agentId;
    @Column(name = "item_id")
    int itemId;
    @Column(name = "date")
    Date date;
    @Column(name = "bin_id")
    int binId;

    public CollectionModel(int trackingId, int agentId, int itemId, Date date, int binId) {
        this.trackingId = trackingId;
        this.agentId = agentId;
        this.itemId = itemId;
        this.date = date;
        this.binId = binId;
    }

    public CollectionModel() {

    }

    public int getTrackingId() {
        return trackingId;
    }

    public void setTrackingId(int trackingId) {
        this.trackingId = trackingId;
    }

    public int getAgentId() {
        return agentId;
    }

    public void setAgentId(int agentId) {
        this.agentId = agentId;
    }

    public int getItemId() {
        return itemId;
    }

    public void setItemId(int itemId) {
        this.itemId = itemId;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public int getBinId() {
        return binId;
    }

    public void setBinId(int binId) {
        this.binId = binId;
    }
}
