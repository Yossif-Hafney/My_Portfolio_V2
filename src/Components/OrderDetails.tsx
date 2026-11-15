import type { HiringOrder } from '../store/ordersStore'

interface OrderDetailsProps {
  order: HiringOrder
  onStatusChange: (orderId: string, status: HiringOrder['status']) => void
  onClose: () => void
}

export const OrderDetails = ({ order, onStatusChange, onClose }: OrderDetailsProps) => {
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

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900">Order Details</h2>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>
      </div>
      
      <div className="p-6 space-y-6">
        {/* Client Information */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-3">Client Information</h3>
          <div className="space-y-2">
            <div>
              <span className="text-sm font-medium text-gray-500">Name:</span>
              <p className="text-gray-900">{order.clientName}</p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-500">Email:</span>
              <p className="text-gray-900">{order.clientEmail}</p>
            </div>
          </div>
        </div>

        {/* Project Information */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-3">Project Information</h3>
          <div className="space-y-2">
            <div>
              <span className="text-sm font-medium text-gray-500">Project Type:</span>
              <p className="text-gray-900 capitalize">{order.projectType.replace('-', ' ')}</p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-500">Budget:</span>
              <p className="text-gray-900">{order.budget}</p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-500">Timeline:</span>
              <p className="text-gray-900">{order.timeline}</p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-500">Description:</span>
              <p className="text-gray-900 mt-1">{order.projectDescription}</p>
            </div>
          </div>
        </div>

        {/* Status Management */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-3">Status Management</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-gray-500">Current Status:</span>
              <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(order.status)}`}>
                {order.status.replace('-', ' ')}
              </span>
            </div>
            
            <div>
              <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-2">
                Update Status
              </label>
              <select
                id="status"
                value={order.status}
                onChange={(e) => onStatusChange(order.id, e.target.value as HiringOrder['status'])}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="pending">Pending</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
              </select>
            </div>
          </div>
        </div>

        {/* Timestamps */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-3">Timestamps</h3>
          <div className="space-y-2">
            <div>
              <span className="text-sm font-medium text-gray-500">Created:</span>
              <p className="text-gray-900">{formatDate(order.createdAt)}</p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-500">Last Updated:</span>
              <p className="text-gray-900">{formatDate(order.updatedAt)}</p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="pt-4 border-t border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 mb-3">Quick Actions</h3>
          <div className="flex space-x-2">
            <button
              onClick={() => onStatusChange(order.id, 'approved')}
              className="flex-1 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
            >
              Approve
            </button>
            <button
              onClick={() => onStatusChange(order.id, 'rejected')}
              className="flex-1 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
            >
              Reject
            </button>
            <button
              onClick={() => onStatusChange(order.id, 'in-progress')}
              className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Start Work
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
