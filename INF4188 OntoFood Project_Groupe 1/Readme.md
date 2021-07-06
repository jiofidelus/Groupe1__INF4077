##  `Descritpion of Ontofood`

`Ontofood` is a food ontology platform developed by INF4188 Group 1 `Masters I students` of the university of Yaounde I under the supervision of `Dr. Jiomekong Azanzi.`
OntoFood is a knowlegde base that uses semantic web technologies to provide a graph representation of  information about Meals, Meals eaten in a particular Region, illnesses and meals that can help out. OntoFood is a semantic  that enables us:
- As a meal planner who wants to prepare meal for people comming from  a given `Country`, `region` or `city`   get a series of meals to better serve them.
- As a patient who is suffering from an illness, OntoFood can propose an approprate meal to help your situation.
- As a domain expert add information to our knowledge base.
- A semantic search engine for exploring our knowledge base.

## `Tools and technologies used`

The following were used in the design and implementation of `OntoFood platform`
- `Protégé`: is a free open source ontology editor and framework for building intelligent systems. We use it in our project to build our Ontology. And do local consistency checks on the Ontology using Fact ++ Reasoning Engine.
- `python`: It is a general purpose programming language for developing applications it is used as the main language for developing our platform. 
- `Django Framework`: it is a high-level python web framework that enables rapid development of secure and maintainable platforms.it was used to construct our Ontology web Application.
- `Jena Fuseki Server`: it’s a SPARQL server which takes our Ontology file and provides a SPARQL End point for interacting with our Ontology.
- `Elastic Search`: Elastic search is a distributed free and open search and Analytics engine for all types of data, including textual, numerical, Geospatial, structured and unstructured. It will help us to do text search and phrase search on our ontology.
- `Kibana`: kibana provides an interface to our elastic search instance and offers the possibility of having a graphical view of our Ontology.
- `Postgres`: it’s a free and open source database management server which will be used in our system to store user login credentials and other user information such as profile. 

## `Project structure`
- `FoodOnto_Platform`
    - `requirements.txt:` Contains the list of libraries need used in our platform
    - `FoodOntoApp:` this is the main folder that contains the entire application source code
- `ontologies`: This folder contains our ontology file designed using protege
- `apache-jena-fuseki-4.0.0`: This folder contains the jena fuseki server which serves as our triple store for storing our ontology and providing a sparQl endpoint for interacting with the ontology.
- `elasticsearch-7.13.2`: Contains our elastic search engine and configurations
- `kibana-7.13.2`: contains our kibana server files

## `How to Setup `
- open command prompt windows
    - cd into `FoodOntoApp` Directory and run the command `python manage.py to runserver` OntoFood application server.
    - if everything goes on well the server is going to start running on the `localhost:8000`
    - cd into `apache-jena-fuseki-4.0.0` Directory and run the command `java -xmx900m -jar fuseki-server.jar` to launch fuseki server.
    - if everything goes on well the server is going to start running on the `localhost:3030`
    - cd into `elasticsearch-7.13.2/bin` Directory and run the command `Elastic Search instance`.
    - if everything goes on well the server is going to start running on the `localhost:9200`
    - cd into `kibana-7.13.2/bin` Directory and run the command `kibana` OntoFood application server.
    1 if everything goes on well the server is going to start running on the `localhost:5601`
  After launching all these servers succesfully we can open our application server in the browser and start using the application.

`Due to the size of these tools a url will be provided  to download them instead of pushing heavy files to github.`
## `Links to download tools`
- Elastic search:https://www.elastic.co/fr/downloads/elasticsearch
- jena-fuseki server: https://jena.apache.org/download/
- kibana:https://www.elastic.co/cn/downloads/kibana
- Protege: https://protege.stanford.edu/download/protege/4.3/installanywhere/Web_Installers/

## `Development Team`
- 19W2615	TEKOH PALMA ACHU
- 20U2268	SEFFI TCHANGA PEGUY	
- 15Q2550	FONGANG NOUSSI NICOLAS	
- 17Q2890	ETALI ETALI MATHIAS JUNIOR	

