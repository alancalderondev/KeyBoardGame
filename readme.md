# KeyBoardGame con LitElement

## Descripción

Este proyecto es un juego interactivo basado en teclas utilizando **LitElement**. El juego permite al usuario cambiar el color de fondo de los componentes al presionar la tecla **Enter**. Es una demostración de cómo trabajar con eventos, propiedades y componentes en LitElement.

## Características

- Componente principal (`ComponentePadre`) que maneja el estado del color de fondo.
- Interacción con el teclado: presionar la tecla **Enter** cambia el color de fondo de los elementos.
- Uso de **LitElement** para crear componentes personalizados y gestionar el estado de manera eficiente.
- Estilos encapsulados para un diseño limpio y organizado.

## Instalación

1. Clona este repositorio en tu máquina local:

```bash
   git clone https://github.com/alancalderondev/KeyBoardGame.git
```

2. Navega al directorio del proyecto:

```bash
   cd KeyBoardGame
```

3. Instala las dependencias necesarias:

```bash
   npm install
```

3.1 En caso de que no funcione, instala las dependencias de LitElement:

```bash
   npm install lit
```

3.2 Instala Dev Web Server:

```bash
   npm install -g @web/dev-server
```

3.4 En el archivo `package.json`, agrega o revisa que contenga la siguiente configuración:

```json
"scripts": {
    "start": "web-dev-server --open --watch --root-dir ./"
  }
```

4. Ejecuta el proyecto (en el directorio del proyecto):
```bash
   npm run start
```

## Uso

Al presionar la tecla Cualquier tecla en tu teclado , el fondo del componente de la key cambiará, al liberar la tecla, el fondo se restablecerá al color original.

## Contribuciones

Si deseas contribuir a este proyecto, puedes hacer un fork y enviar un pull request. Asegúrate de seguir buenas prácticas de codificación y de probar cualquier cambio antes de enviarlo.
