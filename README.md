# Rick and Morty GraphQL Server

Este repositorio contiene un servidor GraphQL simple que proporciona información de personajes de Rick and Morty. Sigue los siguientes pasos para ejecutar el servidor localmente.

## Requisitos

Asegúrate de tener Node.js instalado en tu sistema. Si no lo tienes, puedes descargarlo e instalarlo desde [nodejs.org](https://nodejs.org/).

## Instrucciones


1. Clona el repositorio desde Git utilizando el siguiente comando:

```bash
git clone https://github.com/YorkDau/rick_and_morty_back.git
```
2. Ejecutar 
```bash
npm install
npm run dev
```
## Una vez que el servidor esté en funcionamiento, puedes utilizar GraphQL Playground para explorar y realizar consultas a la API GraphQL. Aquí tienes un ejemplo de consulta:
```bash
query {
  characters {
    id
    name
    status
    species
  }
}
```
## Notas

Este es un servidor GraphQL de ejemplo con datos simulados. Puedes personalizar los datos según tus necesidades.
Asegúrate de mantener actualizadas las dependencias del proyecto ejecutando npm update.
¡Disfruta explorando la API GraphQL de Rick and Morty!
