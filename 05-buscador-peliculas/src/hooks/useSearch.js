import { useEffect, useRef, useState } from 'react'

export function useSearch () {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }

    if (search === '') {
      setError('No se puede buscar una película vacia')
      return
    }

    if (search.length < 3) {
      setError('La búsqueda deve tener al menos 3 catacteres')
      return
    }

    setError(null)
  }, [search])

  return { search, updateSearch, error }
}
