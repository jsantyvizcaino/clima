## CLIMA


Esta aplicacion esta disenada con NodeJS y permite conocer el clima de una ciudad por medio de su latitud y longuitud obtenida dentro de esta misma aplicacion por medio del nombre de la ciudad.

Las opciones que tiene esta aplicacion son:
- Buscar por nombre de la ciudad

La estructura de arbol de la aplicacion es

- controlador
    - clima.js
    - ubicacion.js
- .gitignore
- app.js

#### Buscar por ciudad

La sintaxix de esta opcion es:

~~~
node app -n Quito
~~~

Este comando permite encontrar la latitud y longuitud de la ciudad que es ingresada por medio de la opcion -n que es de caracter obligatoria ya que esta definira el nombre de la Ciudad. El argumento que espera como entrada es un string.


