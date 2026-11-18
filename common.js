// Configuración por defecto del tablero. Se puede cambiar desde el botón
// "Configurar" del tablero: lo que se guarda allí tiene prioridad, así que
// para reutilizar el Power-Up en otro proyecto no hace falta tocar el código.
const DEFAULT_CONFIG = {
  people: 4,               // personas del equipo
  hours: 1,                // horas a las que equivale 1 story point
  hoursPerPersonWeek: 3,   // horas por persona y semana disponibles para el sprint
  sprints: [
    { from: '28/10/2026', to: '25/11/2026' },
    { from: '11/11/2026', to: '09/12/2026' },
  ],
};

const DATE_FORMAT = 'DD/MM/YYYY';

// Lee la configuración guardada en el tablero (o la de por defecto).
async function loadConfig(t) {
  const board = await t.get('board', 'shared');
  return {
    people: board.people || DEFAULT_CONFIG.people,
    hours: board.hours || DEFAULT_CONFIG.hours,
    hoursPerPersonWeek: board.hoursPerPersonWeek || DEFAULT_CONFIG.hoursPerPersonWeek,
    sprints: Array.isArray(board.sprints) && board.sprints.length > 0
      ? board.sprints
      : DEFAULT_CONFIG.sprints,
  };
}

function sprintWeeks(sprint) {
  const days = moment(sprint.to, DATE_FORMAT).diff(moment(sprint.from, DATE_FORMAT), 'days');
  return days / 7;
}

function sprintCapacityHours(sprint, config) {
  return sprintWeeks(sprint) * config.hoursPerPersonWeek * config.people;
}

function sprintCapacitySP(sprint, config) {
  return sprintCapacityHours(sprint, config) / config.hours;
}
