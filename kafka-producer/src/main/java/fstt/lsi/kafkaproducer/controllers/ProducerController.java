package fstt.lsi.kafkaproducer.controllers;

import fstt.lsi.kafkaproducer.models.LigneModel;
import fstt.lsi.kafkaproducer.models.LigneModelDto;
import fstt.lsi.kafkaproducer.services.KafkaProducer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class ProducerController {
    @Autowired
    private KafkaProducer kafkaProducer;

    @PostMapping("/send-ligne")
    public void sendAgeValue(@RequestBody LigneModelDto lineModelDto) {
        System.out.println("-----------------------------------------------------------------------------------------------");
        System.out.println(lineModelDto);
        System.out.println("-----------------------------------------------------------------------------------------------");

        LigneModel lineModel = new LigneModel(
                lineModelDto.getAge(),
                lineModelDto.getTotalPurchase(),
                lineModelDto.getAccountManager(),
                lineModelDto.getYears(),
                lineModelDto.getNumSites()
        );
        kafkaProducer.sendLigneValue(lineModel);
    }
}
