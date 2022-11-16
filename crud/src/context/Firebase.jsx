import { createContext, useContext } from 'react'
import { db } from '../services/Firebase'

const FirebaseContext = createContext()

export function FirebaseProvider({ children }) {
  return (
    <FirebaseContext.Provider value={db}>
      {children}
    </FirebaseContext.Provider>
  )
}

export function useFirebase() {
  const context = useContext(FirebaseContext)

  if (!context) {
    throw new Error('useFirebase must be used within a FirebaseProvider')
  }

  return context
}