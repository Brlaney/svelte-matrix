import { readable } from 'svelte/store'

export const StructuralSystems = readable([
  {
    id: 1,
    name: 'Truss',
    lower: 'truss',
    dof: 2,
    disp: ['dx', 'dy']
  },
  {
    id: 2,
    name: 'Frame',
    lower: 'frame',
    dof: 3,
    disp: ['dx', 'dy', 'dM']
  },
  {
    id: 3,
    name: 'Beam',
    lower: 'beam',
    dof: 2,
    disp: ['dy', 'dM']
  },
])
