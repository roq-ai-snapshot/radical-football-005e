const mapping: Record<string, string> = {
  academies: 'academy',
  'coach-players': 'coach_player',
  players: 'player',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
