package fstt.lsi.kafkaproducer.models;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class LigneModelDto {
    private int age;
    private double totalPurchase;
    private int accountManager;
    private double years;
    private int numSites;
}
