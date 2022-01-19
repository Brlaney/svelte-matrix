/* 
import { writable } from 'svelte/store'
import { localStore } from './localStore.js'

export const alert = writable('Welcome to the To-Do list app!')

const initialTodos = [
  { id: 1, name: 'Visit MDN web docs', completed: true },
  { id: 2, name: 'Complete the Svelte Tutorial', completed: false },
]

export const todos = localStore('mdn-svelte-todo', initialTodos)
*/

import { writable } from 'svelte/store'

export const Vials = writable([
  { id: 1, slots: [1, 2, 1, 1, 2], selected: 0 },
  { id: 2, slots: [2, 1, 2, 1, 2], selected: 0 },
  { id: 3, slots: [0, 0, 0, 0, 0], selected: 0 },
])
