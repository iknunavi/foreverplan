# Rosterplaner Forever · copia local

Planificador de roster para **World of Warcraft: Forever**, reimplementado desde cero y pensado para usarse **sin conexión y sin servidor**. Toda la información se guarda en el navegador (`localStorage`), así que puedes cerrar la página y volver cuando quieras.

> Proyecto no oficial. No está afiliado a Blizzard ni a chromie.de. No contiene código, CSS ni imágenes de chromie.de: la implementación y los datos de juego se han escrito de forma propia con fines educativos y de uso personal.

## Demo en línea

<https://iknunavi.github.io/foreverplan/>

Publicado con **GitHub Pages**. La copia local sigue funcionando igual, sin conexión y sin servidor.

---

## Cómo abrirlo

### Opción 1: doble clic (lo más simple)

Abre `index.html` con tu navegador. La aplicación funciona directamente desde `file://` porque no usa módulos ES, `fetch` ni dependencias externas.

### Opción 2: servidor local opcional

Si prefieres `http://127.0.0.1`:

```bat
start.cmd
```

o manualmente, desde esta carpeta:

```bash
python -m http.server 8123 --bind 127.0.0.1
```

y abre <http://127.0.0.1:8123/>.

No hay instalación, build ni `npm install`.

---

## Qué incluye

### Cuatro rosters independientes

- **PvE**, **PvP**, **RP** y **Hardcore**, cada uno con su propio título y sus propios personajes.
- Máximo **50 personajes por roster**.
- Los rosters **PvP, RP y Hardcore son exclusivos de facción**: el primero que crees fija la facción y el resto debe ser de la misma. PvE permite mezclar Alianza y Horda.
- Al cambiar de pestaña se conserva todo.

### Personajes

- Facción, **10 razas** y **9 clases** con validación de las **56 combinaciones válidas**.
- Las combinaciones nuevas de Forever se marcan en verde: mago orco, brujo trol, paladín no-muerto, cazador humano, sacerdote gnomo, chamán enano y las dos razas nacidas del cielo.
- Género, nombre y apellido (24 caracteres cada uno) y nota libre (200 caracteres).
- **Dos profesiones principales** entre las 9 de recolección/fabricación, sin repetir.
- **Tres profesiones secundarias** opcionales: cocina, primeros auxilios y pesca.
- **Main**: solo puede haber uno por roster. El primer personaje se marca automáticamente y el main se ordena al principio.
- Editar, duplicar, eliminar con **deshacer** y reordenar arrastrando el asa `⠿` o con **Alt + ↑/↓**.

### Builds

- **Talentos**: pega un código (`51-20-0`) o un enlace de calculador; se extrae el parámetro `b`. Permite título opcional.
- **Legado**: reparto visual de puntos en tres árboles (máximo **16**), o código manual (`5-5-6`). Un build con 0 puntos no se guarda.
- La tarjeta muestra el resumen del build y permite editarlo o quitarlo.

### Estadísticas y avisos

- Cobertura de clases y razas.
- Cobertura de las 9 profesiones principales, con el personaje que las cubre y cuántas veces.
- Avisos de clases que faltan, profesiones sin cubrir y profesiones de recolección sin proveedor (materias primas que habría que comprar en la casa de subastas).
- Contadores de personajes con talentos y con Legado.

### Copias de seguridad

- **Exportar**: descarga un JSON con los cuatro rosters.
- **Importar**: restaura un JSON exportado por esta aplicación.
- **Guardado automático** en `localStorage` con la clave `rosterplaner.local.v1`.

### Interfaz

- Interfaz **solo en español**.
- Tema oscuro con detalles dorados y diseño responsive.
- Referencia visual de las 56 combinaciones raza/clase.

---

## Estructura del proyecto

```
rosterplaner-local/
├── index.html   Estructura de la página y textos estáticos
├── styles.css   Tema oscuro, tarjetas, modales y tabla de combinaciones
├── data.js      Datos de juego y utilidades (expone window.RP)
├── app.js       Estado, render, modales, almacenamiento e importación
├── icons/       Iconos de clases, razas y profesiones (jpg 64×64)
├── start.cmd    Lanzador opcional con servidor local de Python
└── README.md
```

### Cómo encaja

1. `data.js` define facciones, clases, razas, profesiones, reglas, árboles de Legado, límites y helpers como `isValidCombo` o `buildSegments`. No toca el DOM.
2. `app.js` arranca en `DOMContentLoaded`, carga el estado de `localStorage`, renderiza y conecta los eventos.
3. `index.html` solo contiene la estructura; las partes dinámicas (pestañas, tarjetas, estadísticas, matriz y modales) las pinta `app.js`.

No hay frameworks, bundler ni peticiones de red.

---

## Personalización

- **Datos de juego**: edita los arrays de `data.js`. Cada entrada usa nombres en español con la forma `{ es: "..." }`.
- **Iconos**: campo `icon` de cada clase, raza, profesión y secundaria, con la ruta al archivo dentro de `icons/` (por ejemplo `"icons/classicon_warrior.jpg"`).
- **Colores de clase y facción**: campo `color` de cada clase/facción en `data.js`; el CSS consume `--class-color` y `--faction-color`.
- **Límites**: objeto `limits` al final de `data.js` (personajes por roster, nombre, nota, título, puntos de Legado).
- **Textos de interfaz**: objeto `TEXT` al principio de `app.js`, en español.
- **Aspecto**: variables CSS al inicio de `styles.css` (`--bg`, `--gold`, `--line`, etc.).

Si añades una raza o clase nueva, actualiza también sus combinaciones válidas y, si procede, la marca de combinación nueva.

---

## Atajos y detalles útiles

- **Alt + ↑/↓** con el foco en el asa de arrastre: mueve la tarjeta.
- **Esc**: cierra el modal abierto.
- Los emojis son marcadores de posición originales; no se han descargado recursos gráficos de terceros.

---

## Notas y limitaciones

- Los datos se guardan **solo en este navegador y en este perfil**. Si borras los datos del sitio, se pierden; usa Exportar para conservar una copia.
- Al abrir con `file://`, algunos navegadores limitan `localStorage`. Si necesitas persistencia garantizada, usa `start.cmd` o el servidor local.
- El proyecto replica la planificación, no sustituye a los calculadores oficiales de talentos.
- Los iconos de clases, razas y profesiones son recursos gráficos de Blizzard Entertainment tomados del catálogo público de iconos de Wowhead. Se guardan en local (`icons/`), así que la web sigue funcionando sin conexión.
- Las dos razas nuevas (*Nacido del cielo del Alto Orden* y *Nacido del cielo Formavientos*) no tienen icono propio en el juego: usan una ala y un remolino de viento como referencia temática.
- World of Warcraft y sus nombres son marcas de Blizzard Entertainment.

---

## Comprobaciones realizadas

Se ha verificado en un navegador headless (Chromium + Playwright):

- Creación, edición, duplicado, borrado y deshacer.
- Profesiones principales y secundarias, main automático y manual.
- Builds de talentos (`51-20-0`) y Legado con asignador (`3-2-1`, total 6); rechazo de builds de 0 puntos.
- Reordenación con arrastre y con Alt+flechas, y persistencia tras recargar.
- Matriz de 10 razas y 56 combinaciones, con nombres traducidos.
- Pestañas de reglas, bloqueo de facción en PvP e interfaz solo en español.
- Exportar JSON e importar JSON.
- Sin errores de consola en los flujos probados.
