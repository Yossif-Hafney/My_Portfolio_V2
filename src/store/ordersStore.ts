import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { v4 as uuidv4 } from 'uuid'

export interface HiringOrder {
  id: string
  clientName: string
  clientEmail: string
  projectType: 'web-development' | 'mobile-development' | 'ui-ux-design' | 'consultation' | 'other'
  projectDescription: string
  budget: string
  timeline: string
  status: 'pending' | 'approved' | 'rejected' | 'in-progress' | 'completed'
  createdAt: string
  updatedAt: string
}

interface OrdersState {
  orders: HiringOrder[]
  addOrder: (order: Omit<HiringOrder, 'id' | 'createdAt' | 'updatedAt' | 'status'>) => void
  updateOrder: (id: string, updates: Partial<HiringOrder>) => void
  deleteOrder: (id: string) => void
  getOrderById: (id: string) => HiringOrder | undefined
  getOrdersByStatus: (status: HiringOrder['status']) => HiringOrder[]
}

export const useOrdersStore = create<OrdersState>()(
  persist(
    (set, get) => ({
      orders: [],
      addOrder: (orderData) => {
        const newOrder: HiringOrder = {
          ...orderData,
          id: uuidv4(),
          status: 'pending',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        }
        set((state) => ({
          orders: [...state.orders, newOrder]
        }))
      },
      updateOrder: (id, updates) => {
        set((state) => ({
          orders: state.orders.map((order) =>
            order.id === id
              ? { ...order, ...updates, updatedAt: new Date().toISOString() }
              : order
          )
        }))
      },
      deleteOrder: (id) => {
        set((state) => ({
          orders: state.orders.filter((order) => order.id !== id)
        }))
      },
      getOrderById: (id) => {
        return get().orders.find((order) => order.id === id)
      },
      getOrdersByStatus: (status) => {
        return get().orders.filter((order) => order.status === status)
      }
    }),
    {
      name: 'orders-storage'
    }
  )
)
