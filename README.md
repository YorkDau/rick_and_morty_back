# Rick and Morty GraphQL Server

Este repositorio contiene un servidor GraphQL simple que proporciona información de personajes de Rick and Morty. Sigue los siguientes pasos para ejecutar el servidor localmente.

## Requisitos

Asegúrate de tener Node.js instalado en tu sistema. Si no lo tienes, puedes descargarlo e instalarlo desde [nodejs.org](https://nodejs.org/).

## Instrucciones

1. Descarga el repositorio desde Git utilizando la siguiente URL:

```bash
git clone https://github.com/YorkDau/rick_and_morty_back.git
cd nombre_del_directorio
npm install
npm install

query {
  characters {
    id
    name
    status
    species
  }
}
