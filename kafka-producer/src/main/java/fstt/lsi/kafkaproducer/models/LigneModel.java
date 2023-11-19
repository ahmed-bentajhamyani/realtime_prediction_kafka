package fstt.lsi.kafkaproducer.models;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class LigneModel {
    private int Age;
    private double Total_Purchase;
    private int Account_Manager;
    private double Years;
    private int Num_Sites;
}
