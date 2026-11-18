# scrum-trello

Power-Up de Trello para Scrum: tipo de historia, story points (estimados y
dedicados), sprint, fecha de finalización y gráfica de burn-down por sprint.

Es una versión reutilizable de [javifmz/taes-scrum](https://github.com/javifmz/taes-scrum)
(MIT, Javi Fernández). Diferencias con el original:

- Los sprints, las personas y las horas se configuran desde el botón
  **Configurar** del tablero. El original tenía el calendario del curso
  TAES 2025-26 escrito en el código, así que la gráfica no servía con otras fechas.
- La línea ideal del burn-down baja desde los puntos comprometidos en el sprint
  hasta 0.
- Las tareas terminadas antes del inicio del sprint se descuentan el primer día.
- Las épicas y los temas ya no cuentan como historias en el resumen.
- Botón para importar los datos de las tarjetas del Power-Up anterior.

## Instalación

1. Publica este repositorio con GitHub Pages (rama `main`, carpeta raíz).
2. En <https://trello.com/power-ups/admin> crea un Power-Up nuevo y pon como
   *Iframe connector URL*: `https://<usuario>.github.io/<repositorio>/index.html`.
3. En el tablero: **Power-Ups** > **Personalizado** > añade el Power-Up.
4. Pulsa **Configurar** en la cabecera del tablero y rellena personas, horas y
   las fechas de cada sprint.

## Valores por defecto

Si el tablero no tiene configuración guardada se usa `DEFAULT_CONFIG` de
`common.js` (4 personas, 1 SP = 1 hora, 3 horas por persona y semana y los
sprints del equipo 8). Cámbialos ahí para tu proyecto.

## Datos de las tarjetas

Trello guarda los datos de cada Power-Up por separado. Al pasar de otro
Power-Up a este, las tarjetas empiezan vacías. `import-data.js` lleva los datos
exportados del tablero del equipo 8 y **Configurar > Importar datos del Scrum
anterior** los copia. Para otro tablero se puede borrar ese fichero.

## Licencia

MIT. Copyright de Javi Fernández (código original) y Alex Carrasco (cambios).
