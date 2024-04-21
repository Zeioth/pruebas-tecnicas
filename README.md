# Pruebas técnicas

## Ejercicio 1
Prueba exploratoria y reporte de bugs.

**RESPUESTA**

[Spectre.nvim](https://github.com/nvim-pack/nvim-spectre): Bug report [#133](https://github.com/nvim-pack/nvim-spectre/issues/133) de este plugin de "buscar y reemplazar" para el editor de texto neovim. 

Detecté que era posible romper la interfaz de usuario al realizar ciertas acciones, inutilizand
    Se ha creado una acción GitHub de integración continua para requerir que npm test tenga que pasar correctamente antes de permitir que un pull request se integre en la rama main. Ver acciones. screenshot_2024-04-18_00-39-23_494334458
o el programa hasta ser reiniciado. Mi bug fix fué añadido al proyecto en el pull request [#138](https://github.com/nvim-pack/nvim-spectre/pull/138)

Adicionalmente, he reportado otros 488 bugs en github en diferentes proyectos open source. [Aquí](https://github.com/Zeioth/zeioth-meta) y [aquí](https://github.com/Zeioth) podeis encontrar un breve resume de algunos interesantes.

* [DEMO EN YOUTUBE](https://www.youtube.com/watch?v=od9faf7FtOI)
* SCREENSHOT

![screenshot_2023-10-18_00-29-23_557364307](https://github.com/Zeioth/pruebas-tecnicas/assets/3357792/707530bb-f517-4667-a01d-b91b386fbec2)

## Ejercicio 2
Automatización de una web.

* [CÓDIGO](https://github.com/Zeioth/pruebas-tecnicas/blob/main/ejercicio-2/cypress/e2e/get-first-automation-date-from-wikipedia.spec.ts)
* [DEMO EN YOUTUBE](https://www.youtube.com/watch?v=TBSHSvQwmmI)

### Como correr el proyecto (cypress)

```sh
cd ./ejercicio-2
npm install
npm start
```

## Ejercicio 3
Tratamiento de datos en APIS.

### Ejercicio 3-1
* [CÓDIGO](https://github.com/Zeioth/pruebas-tecnicas/blob/main/ejercicio-3/src/index.ts)
* OUTPUT
![screenshot_2024-04-15_01-04-02_255059767](https://github.com/Zeioth/pruebas-tecnicas/assets/3357792/307d5af7-1aa0-45cf-ade6-bd21bb42b1a0)


### Como correr el proyecto  (typescript)
Puedes correr los ejercicios con

```sh
npm install
npm start
```

### Tests unitarios
Puedes correrlos con

```sh
npm test
```
![screenshot_2024-04-22_00-19-18_145755698](https://github.com/Zeioth/pruebas-tecnicas/assets/3357792/01640770-78c9-49f7-ba05-dcaf7f75631f)

## Features extra
* Los comentarios añadidos al ejecicio 3 soportan LSP docstring.

![screenshot_2023-10-18_00-11-34_742000737](https://github.com/Zeioth/pruebas-tecnicas/assets/3357792/07fe4dcf-bda1-4925-a3ea-58c55a228743)

* Ahora los errores son logueados usando el sistema de logging [pino](https://github.com/pinojs/pino), para lo cual hemos creado un servicio singleton.

![screenshot_2024-04-18_01-43-12_935941307](https://github.com/Zeioth/pruebas-tecnicas/assets/3357792/1eca364f-88ea-4266-a206-0eea30f59cb0)

* Se ha creado una acción GitHub de integración continua para requerir que `npm test` pase correctamente antes de permitir que un pull request se integre en la rama `main`. [Está disponible en acciones](https://github.com/Zeioth/pruebas-tecnicas/actions).
![screenshot_2024-04-18_00-39-23_494334458](https://github.com/Zeioth/pruebas-tecnicas/assets/3357792/8dadfd4e-1492-4518-9074-677868c325fd)

* Ademas usamos Husky para que los tests corran localmente de forma automatica al hacer push. Esto no impide el push, pero informa al desarrollador en caso de regresión al publicar cambios en su rama.
```json
"husky": {
  "hooks": {
    "pre-push": "npm test"
  }
}
```


## Troubleshooting
Los programas de este repositorio han sido testeados con las versiones `v20.12.2` de node.
Si encuentras algún problema al ejecutarlos, puedes usar el comando `nvm` para
definir tu versión de node actual.

```
nvm install v20 && nvm alias default v20 && nvm use v20
```
Por favor considera que la [API de swagger](https://petstore.swagger.io/) es pública y puede que en el momento de correr las peticiones GET de los ejercicios 3.2 y 3.3 no hayan datos disponibles en el servidor. Si esto ocurre, prueba mas tarde.
