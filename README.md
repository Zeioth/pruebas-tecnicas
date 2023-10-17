# Pruebas técnicas

## Ejercicio 1
Prueba exploratoria y reporte de bugs.

**RESPUESTA**
* [Spectre.nvim](https://github.com/nvim-pack/nvim-spectre): Abrí el bug report [#133](https://github.com/nvim-pack/nvim-spectre/issues/133) de esté plugin de "buscar y reemplazar texto" para el editor de texto neovim, tras detectar que erá posible romper la interfaz de usuario al realizar ciertas acciones, dejando el programa inutilizable hasta ser reiniciado. Mi bug fix fué añadido al proyecto en el pull request [#138]([https://github.com/nvim-pack/nvim-spectre/pull/138). [DEMO EN YOUTUBE](https://www.youtube.com/watch?v=od9faf7FtOI).
* Adicionalmente, he reportado otros 445 bugs en github en diferentes proyectos open source. [Aquí](https://github.com/Zeioth/zeioth-meta) y [aquí](https://github.com/Zeioth) podeis encontrar un breve resume de algunos interesantes.

![screenshot_2023-10-18_00-29-23_557364307](https://github.com/Zeioth/pruebas-tecnicas/assets/3357792/707530bb-f517-4667-a01d-b91b386fbec2)

## Ejercicio 2
Automatización de una web.

* [DEMO EN YOUTUBE](https://www.youtube.com/watch?v=TBSHSvQwmmI)
* [CÒDIGO](https://github.com/Zeioth/pruebas-tecnicas/blob/main/ejercicio-2/cypress/cypress/e2e/get-first-automation-date-from-wikipedia.spec.ts)

### Como correr el proyecto (cypress)

```sh
cd ./ejercicio-2/cypress/
npm install
npm start
```

## Ejercicio 3 (typescript)
Tratamiento de datos en APIS.

### Como correr el proyecto
Puedes correr los ejercicios uno a uno manualmente con

```sh
npm install
npm start
```

O ejecutarlos sucesivamenten de forma automática con el script shell
```sh
chmod +x ./ejercicio-3/run-all.sh
./ejercicio-3/run-all.sh
```

### Ejercicio 3-1
* [CÒDIGO](https://github.com/Zeioth/pruebas-tecnicas/blob/main/ejercicio-3/ejercicio-3-1/src/index.ts)
* RESULTADO
![screenshot_2023-10-18_00-49-06_728385744](https://github.com/Zeioth/pruebas-tecnicas/assets/3357792/c2c1bd37-82bc-4350-abfa-b6586bbf946b)

### Ejercicio 3-2
* [CÓDIGO](https://github.com/Zeioth/pruebas-tecnicas/blob/main/ejercicio-3/ejercicio-3-2/src/index.ts)
* RESULTADO
![screenshot_2023-10-18_00-49-47_047298324](https://github.com/Zeioth/pruebas-tecnicas/assets/3357792/67d4cce1-ef28-4879-bfb9-371cde28bfb8)

### Ejercicio 3-3
* [CÓDIGO](https://github.com/Zeioth/pruebas-tecnicas/blob/main/ejercicio-3/ejercicio-3-3/src/index.ts)
* RESULTADO
![screenshot_2023-10-18_00-50-05_991051900](https://github.com/Zeioth/pruebas-tecnicas/assets/3357792/8abb9ffb-adc1-41a6-ae0c-bdf9d9e17392)

## Features extra
* Los comentarios añadidos al ejecicio 3 soportan LSP docstring.

![screenshot_2023-10-18_00-11-34_742000737](https://github.com/Zeioth/pruebas-tecnicas/assets/3357792/07fe4dcf-bda1-4925-a3ea-58c55a228743)

## Troubleshooting
Los programas de este repositorio han sido testeados con la versión `v16.20.2` de node.
Si encuentras algún problema al ejecutarlos, puedes usar el comando `nvm` para
definir tu versión de node actual.

```
nvm install v16 && nvm alias default v16 && nvm use v16
```
