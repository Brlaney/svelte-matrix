import { readable } from 'svelte/store'

export const StructuralSystems = readable([
  {
    id: 1,
    name: 'Truss',
    lower: 'truss',
    dof: 2,
    disp: ['dx', 'dy'],
    path: '../../../static/truss.svg'
  },
  {
    id: 2,
    name: 'Frame',
    lower: 'frame',
    dof: 3,
    disp: ['dx', 'dy', 'dM'],
    path: '../../../static/frame.svg'
  },
  {
    id: 3,
    name: 'Beam',
    lower: 'beam',
    dof: 2,
    disp: ['dy', 'dM'],
    path: '../../../static/beam.svg'
  },
])
