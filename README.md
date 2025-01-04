### Opción 1: Usar Git para clonar el repositorio
Si tienes Git instalado, esta es la mejor opción para trabajar con el código.
Asegúrate de tener Git instalado:

En Windows: Descarga Git desde git-scm.com e instálalo.
En macOS/Linux: Usa un gestor de paquetes como brew, apt, o dnf.
bash
Copy code
`sudo apt update && sudo apt install git`  # En Ubuntu/Debian

Copia la URL del repositorio:
Haz clic en el botón Code en GitHub.
Selecciona la URL HTTPS, SSH o GitHub CLI.

`git clone <URL_DEL_REPOSITORIO>`
`git clone https://github.com/usuario/repo.git`

### Opción 2: Usar GitHub Desktop (GUI)
Descarga e instala GitHub Desktop.
Abre la aplicación y haz clic en File > Clone repository.
Introduce la URL del repositorio o conéctate a tu cuenta de GitHub para buscarlo.
Selecciona dónde deseas guardar el repositorio y haz clic en Clone.


### Para correr el proyecto
`cd backend`  
`npm run dev`
