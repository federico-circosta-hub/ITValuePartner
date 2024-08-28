### Il progetto è strutturato in due directory:
  - **app** => dove risiede la web app lato frontend react (porta 3000)
  - **server** => dove risiede la parte backend node.js (porta 3001)


## Funzionalità
La web app attualmente supporta il solo evento di trigger sul bottone **"Import"** premuto il quale si apre la finestra di scelta dei file del PC.
La web app accetta solo file di csv.
Una volta caricato un file csv viene chiamata l'api postCsv e vengono restituiti i dati relativi ai due account bancari:
  - balance in EUR e USD
  - balance delle securities
  - i volumi dei circuiti di pagamento usati
I dati vengono quindi visualizzati nell'area sottostante al bottone di import, con possibilità di reset per caricare un altro file.

Per questioni di tempo non è stato possibile implementare altre feature.
Lato server avrei srutturato i dati e poi effettuato delle query per ottenere i dati.
Attualmente i dati vengono calcolati durante la lettura delle righe del file e composti in una variabile che viene poi passata come json tramite api.
