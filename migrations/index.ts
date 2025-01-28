import * as migration_20250127_191643 from './20250127_191643';

export const migrations = [
  {
    up: migration_20250127_191643.up,
    down: migration_20250127_191643.down,
    name: '20250127_191643'
  },
];
