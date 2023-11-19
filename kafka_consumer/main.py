from fastapi import FastAPI
from kafka import KafkaConsumer
import asyncio
from queue import Queue
import pickle
import pandas as pd
import json
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Global variables
loop = asyncio.get_event_loop()
kafka_messages = Queue()
# Ordre souhaité des colonnes
desired_order = ["Age", "Total_Purchase", "Account_Manager", "Years", "Num_Sites"]
with open('model/best_model.pkl', 'rb') as file:
    model = pickle.load(file)

async def consume_messages():
    consumer = KafkaConsumer(
        "topic_ligne",
        bootstrap_servers="127.0.0.1:9092",
        group_id="group_id",
        auto_offset_reset="earliest",
        value_deserializer=lambda x: x.decode("utf-8")
    )

    try:
        # Utiliser asyncio.to_thread pour appeler la fonction synchrone
        while True:
            message = await loop.run_in_executor(None, consumer.poll, 1000)
            for _, records in message.items():
                for record in records:
                    kafka_messages.put(record.value)  # Ajouter le message à la file
                    print(record.value)  # Afficher le message dans le terminal
    finally:
        consumer.close()

def predict():
    if not kafka_messages.empty():
        dataToPredict = kafka_messages.get()
        dataToPredict = json.loads(dataToPredict)  # Convertir la chaîne JSON en objet Python
        column_names = {
            "age": "Age",
            "total_Purchase": "Total_Purchase",
            "account_Manager": "Account_Manager",
            "years": "Years",
            "num_Sites": "Num_Sites",
        }
        #Renommer les colonnes pour les adapter au modèle
        dataToPredict = {column_names[key]: value for key, value in dataToPredict.items()}
        # Réorganiser les données dans l'ordre souhaité
        dataToPredict = {col: dataToPredict[col] for col in desired_order}
        # Créer un nouvel objet JSON avec les noms de colonnes modifiés
        dataPrepared = pd.DataFrame([dataToPredict])       
        print(dataToPredict)
       
        prediction = model.predict(dataPrepared) 
        print("----------------------------------------------------------------------------------")
        print("Prédiction :")
        print(prediction)
        print("----------------------------------------------------------------------------------")
        return {"prediction": str(prediction[0])}
    else:
        return {"message": "Aucun message disponible pour la prédiction."}

@app.get("/predict")
async def read_root():
    return predict()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Lancer le consommateur Kafka en arrière-plan
loop.create_task(consume_messages())
