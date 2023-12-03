package fstt.lsi.kafkaproducer.services;

import fstt.lsi.kafkaproducer.models.LigneModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@Service
public class KafkaProducer {

    private static final String TOPIC_LIGNE = "topic_ligne";

    @Autowired
    private KafkaTemplate<String, LigneModel> kafkaTemplateLigne;

    public void sendLigneValue(LigneModel ligneModel) {
        kafkaTemplateLigne.send(TOPIC_LIGNE, ligneModel);
    }


}
