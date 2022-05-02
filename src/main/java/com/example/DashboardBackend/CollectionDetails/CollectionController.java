package com.example.DashboardBackend.CollectionDetails;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.util.List;

@RestController
public class CollectionController {

    @Autowired
    CollectionFetchDataService collectionFetchDataService;

    @GetMapping(path = "getCollectionDetails")
    List<CollectionModel> findAll(){
        return collectionFetchDataService.findAll();
    }

    @GetMapping(path = "getCollectionDetailsByAgent")
    List<CollectionModel> findAllByAgentId(@RequestParam int id){
        return collectionFetchDataService.findAllByAgentId(id);
    }

    @PutMapping(path = "updateCollection")
    ResponseEntity<CollectionModel> updateCollections(@RequestBody int trackingId, int agentId, int itemId, Date date, int binId){
        CollectionModel collectionModel = new CollectionModel(trackingId, agentId, itemId, date, binId);
        return new ResponseEntity<CollectionModel>(collectionFetchDataService.save(collectionModel), HttpStatus.OK);
    }
}
