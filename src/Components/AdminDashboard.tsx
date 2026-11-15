import { useState } from 'react'
import { useAuthStore } from '../store/authStore'
import { useOrdersStore, type HiringOrder } from '../store/ordersStore'
import { OrderDetails } from './OrderDetails'
import { ConfirmationModal } from './ConfirmationModal'

interface AdminDashboardProps {
  onLogout: () => void
}

export const AdminDashboard = ({ onLogout }: AdminDashboardProps) => {
  const logout = useAuthStore((state) => state.logout)
  const orders = useOrdersStore((state) => state.orders)
  const updateOrder = useOrdersStore((state) => state.updateOrder)
  const deleteOrder = useOrdersStore((state) => state.deleteOrder)
  
  const [selectedOrder, setSelectedOrder] = useState<HiringOrder | null>(null)
  const [statusFilter, setStatusFilter] = useState<HiringOrder['status'] | 'all'>('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [deleteModal, setDeleteModal] = useState<{
    isOpen: boolean
    orderId: string | null
    orderName: string
  }>({
    isOpen: false,
    orderId: null,
    orderName: ''
  })

  const filteredOrders = orders.filter(order => {
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter
    const matchesSearch = order.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.clientEmail.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.projectType.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesStatus && matchesSearch
  })

  const getStatusColor = (status: HiringOrder['status']) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800'
      case 'approved': return 'bg-green-100 text-green-800'
      case 'rejected': return 'bg-red-100 text-red-800'
      case 'in-progress': return 'bg-blue-100 text-blue-800'
      case 'completed': return 'bg-gray-100 text-gray-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const handleStatusChange = (orderId: string, newStatus: HiringOrder['status']) => {
    updateOrder(orderId, { status: newStatus })
  }

  const handleDeleteOrder = (orderId: string) => {
    const order = orders.find(o => o.id === orderId)
    if (order) {
      setDeleteModal({
        isOpen: true,
        orderId,
        orderName: order.clientName
      })
    }
  }

  const confirmDeleteOrder = () => {
    if (deleteModal.orderId) {
      deleteOrder(deleteModal.orderId)
      if (selectedOrder?.id === deleteModal.orderId) {
        setSelectedOrder(null)
      }
      setDeleteModal({ isOpen: false, orderId: null, orderName: '' })
    }
  }

  const closeDeleteModal = () => {
    setDeleteModal({ isOpen: false, orderId: null, orderName: '' })
  }

  const handleLogout = () => {
    logout()
    onLogout()
  }

  const stats = {
    total: orders.length,
    pending: orders.filter(o => o.status === 'pending').length,
    approved: orders.filter(o => o.status === 'approved').length,
    inProgress: orders.filter(o => o.status === 'in-progress').length,
    completed: orders.filter(o => o.status === 'completed').length
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900">Total Orders</h3>
            <p className="text-3xl font-bold text-blue-600">{stats.total}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900">Pending</h3>
            <p className="text-3xl font-bold text-yellow-600">{stats.pending}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900">Approved</h3>
            <p className="text-3xl font-bold text-green-600">{stats.approved}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900">In Progress</h3>
            <p className="text-3xl font-bold text-blue-600">{stats.inProgress}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900">Completed</h3>
            <p className="text-3xl font-bold text-gray-600">{stats.completed}</p>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search by name, email, or project type..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="md:w-48">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value as HiringOrder['status'] | 'all')}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Orders List */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">Hiring Orders</h2>
              </div>
              <div className="divide-y divide-gray-200">
                {filteredOrders.length === 0 ? (
                  <div className="px-6 py-8 text-center text-gray-500">
                    No orders found
                  </div>
                ) : (
                  filteredOrders.map((order) => (
                    <div
                      key={order.id}
                      className={`px-6 py-4 hover:bg-gray-50 cursor-pointer transition-colors ${
                        selectedOrder?.id === order.id ? 'bg-blue-50' : ''
                      }`}
                      onClick={() => setSelectedOrder(order)}
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h3 className="text-lg font-medium text-gray-900">{order.clientName}</h3>
                          <p className="text-sm text-gray-600">{order.clientEmail}</p>
                          <p className="text-sm text-gray-500 capitalize">{order.projectType.replace('-', ' ')}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(order.status)}`}>
                            {order.status.replace('-', ' ')}
                          </span>
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              handleDeleteOrder(order.id)
                            }}
                            className="text-red-600 hover:text-red-800"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                      <div className="mt-2 flex items-center space-x-4 text-sm text-gray-500">
                        <span>Budget: {order.budget}</span>
                        <span>Timeline: {order.timeline}</span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Order Details */}
          <div className="lg:col-span-1">
            {selectedOrder ? (
              <OrderDetails
                order={selectedOrder}
                onStatusChange={handleStatusChange}
                onClose={() => setSelectedOrder(null)}
              />
            ) : (
              <div className="bg-white rounded-lg shadow p-6">
                <p className="text-gray-500 text-center">Select an order to view details</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      <ConfirmationModal
        isOpen={deleteModal.isOpen}
        onClose={closeDeleteModal}
        onConfirm={confirmDeleteOrder}
        title="Delete Order"
        message={`Are you sure you want to delete the order for "${deleteModal.orderName}"? This action cannot be undone.`}
        confirmText="Delete Order"
        cancelText="Cancel"
        type="danger"
      />
    </div>
  )
}
