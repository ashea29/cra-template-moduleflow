import { createAsyncThunk } from '@reduxjs/toolkit'
import { AppDispatch } from '../../store'


interface exampleThunkProps {
  fieldOne: string
}

interface ThunkAPI {
  dispatch: AppDispatch
  getState: Function
  extra?: any
  requestId: string
  signal: AbortSignal
}

export const exampleThunk = createAsyncThunk(
  'one/sample',
  async (thunkProps: exampleThunkProps, thunkAPI: ThunkAPI) => {
    const dispatch = thunkAPI.dispatch
    try {
      setTimeout(() => {
        console.log('Sample output from thunk')
      }, 3000)
    } catch (error) {
      throw error
    }
  }
)