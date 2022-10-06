import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '0', name: 'Yafet Addius' },
  { id: '1', name: 'Natanem Habtamu' },
  { id: '2', name: 'Biniyam Tolosa' }
]

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {}
})

export default usersSlice.reducer