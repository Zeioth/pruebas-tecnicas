# Pruebas técnicas

## Ejercicio 1
Prueba exploratoria y reporte de bugs.

* Spectre.nvim: En el bug report [#133](https://github.com/nvim-pack/nvim-spectre/issues/133) de esté plugin de "buscar y reemplazar texto" para el editor de texto neovim, detecté que erá posible romper la interfaz de usuario al realizar ciertas accines, dejando el programa inutilizable hasta reiniciarlo. Mi fix fué añadido al proyecto en el pull request [#138]([https://github.com/nvim-pack/nvim-spectre/pull/138). [DEMO EN YOUTUBE](https://www.youtube.com/watch?v=od9faf7FtOI).
* Adicionalmente, he reportado 445 bugs en github en diferentes proyectos open source. [Aquí](https://github.com/Zeioth/zeioth-meta) podeis encontrar un breve resume de todos ellos.


## Ejercicio 2
Automatización de una web

### Como correr el proyecto

```sh
cd ./ejercicio-2/cypress/
npm install
npm start
```

VER DEMO EN YOUTUBE

## Ejercicio 3
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

## Features extra
* Los comentarios añadidos al ejecicio 3 soportan LSP docstring.


## Troubleshooting
Estos programas han sido probados con la versión `v16.20.2` de node.
Si encuentras algún problema al ejecutarlos, puedes usar el comando `nvm` para
definir tu versión de node actual.

```
nvm install v16 && nvm alias default v16 && nvm use v16
```
