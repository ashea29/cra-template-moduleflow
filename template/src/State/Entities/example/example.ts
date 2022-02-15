import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../store'
import { createSelector } from 'reselect'
import { exampleThunk } from './exampleThunks'


interface InitialExampleState {
  isLoading: Boolean
  exampleData: {} | null
}

const initialState: InitialExampleState = {
  isLoading: false,
  exampleData: null
}

const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    SET_DATA: (state, { payload }) => {
      state.exampleData = payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(exampleThunk.pending, (state, action) => {
      state.isLoading = true
    })
    builder.addCase(exampleThunk.fulfilled, (state, action) => {
      state.isLoading = false
    })
    builder.addCase(exampleThunk.rejected, (state, action) => {
      state.isLoading = false
    })
  }
})

export const { SET_DATA } = exampleSlice.actions

export const selectExample = createSelector(
  (state: RootState) => state.entities.example, 
  (exampleData) => exampleData
)

export default exampleSlice.reducer