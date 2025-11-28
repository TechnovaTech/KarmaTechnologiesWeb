"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type QuoteItem = {
  id: number
  title: string
  category: string
  image: string
  quantity: number
}

type QuoteContextType = {
  quoteItems: QuoteItem[]
  addToQuote: (product: Omit<QuoteItem, 'quantity'>) => void
}

const QuoteContext = createContext<QuoteContextType | undefined>(undefined)

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [quoteItems, setQuoteItems] = useState<QuoteItem[]>([])

  useEffect(() => {
    const saved = localStorage.getItem('quoteItems')
    if (saved) {
      setQuoteItems(JSON.parse(saved))
    }
  }, [])

  const addToQuote = (product: Omit<QuoteItem, 'quantity'>) => {
    setQuoteItems(prev => {
      const existing = prev.find(item => item.id === product.id)
      let updated
      if (existing) {
        updated = prev.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      } else {
        updated = [...prev, { ...product, quantity: 1 }]
      }
      localStorage.setItem('quoteItems', JSON.stringify(updated))
      return updated
    })
  }

  return (
    <QuoteContext.Provider value={{ quoteItems, addToQuote }}>
      {children}
    </QuoteContext.Provider>
  )
}

export const useQuote = () => {
  const context = useContext(QuoteContext)
  if (!context) {
    throw new Error('useQuote must be used within QuoteProvider')
  }
  return context
}