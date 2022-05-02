package com.example.DashboardBackend.EwasteDetails;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "ewaste_details")
public class EwasteModel {
    @Id
    @Column(name = "item_id")
    int itemId;
    @Column(name = "item_name")
    String itemName;
    @Column(name = "item_weight")
    Float itemWeight;
    @Column(name = "item_category")
    String itemCategory;

    public int getItemId() {
        return itemId;
    }

    public void setItemId(int itemId) {
        this.itemId = itemId;
    }

    public String getItemName() {
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }

    public Float getItemWeight() {
        return itemWeight;
    }

    public void setItemWeight(Float itemWeight) {
        this.itemWeight = itemWeight;
    }

    public String getItemCategory() {
        return itemCategory;
    }

    public void setItemCategory(String itemCategory) {
        this.itemCategory = itemCategory;
    }
}
