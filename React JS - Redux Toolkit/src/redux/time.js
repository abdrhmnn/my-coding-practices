import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  jam: 0,
  menit: 0,
  detik: 60
}

// createSlice utk memungkinkan menggunakan state, action dan reducer sekaligus
export const waktuJam = createSlice({
  name: 'time', // penamaan slice utk slice
  initialState,
  reducers: {
    mulai: (state) => {
      state.jam = 23
      state.menit = 59
      state.detik -= 1
    //   setInterval(() => {
    //   }, 1000)
    },
    stop: (state) => {
      state.count -= 1
    },
  },
})

// Action creators are generated for each case reducer function
export const { mulai, stop } = waktuJam.actions

export default waktuJam.reducer