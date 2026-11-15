# Hiring Orders System

This portfolio now includes a complete hiring orders system with an admin dashboard for managing client requests.

## Features

### For Clients
- **Hiring Form** (`/hire`): Professional form for submitting hiring requests
- **Project Types**: Web Development, Mobile Development, UI/UX Design, Consultation, Other
- **Budget Ranges**: From $1,000 to $50,000+ with flexible options
- **Timeline Options**: 1-2 weeks to 6+ months with flexible options
- **Real-time Feedback**: Success messages and form validation

### For Admin
- **Secure Login** (`/admin`): Admin-only access with credentials
- **Dashboard Overview**: Statistics and order management
- **Order Management**: View, update status, and delete orders
- **Search & Filter**: Find orders by status, name, email, or project type
- **Status Tracking**: Pending → Approved → In Progress → Completed
- **Order Details**: Full project information and client details

## Admin Access

**Default Credentials:**
- Username: `admin`
- Password: `admin123`

**Access URL:** `http://localhost:5173/admin`

## Order Status Flow

1. **Pending** - New order submitted by client
2. **Approved** - Order accepted by admin
3. **Rejected** - Order declined by admin
4. **In Progress** - Work has started
5. **Completed** - Project finished

## Technical Implementation

### State Management
- **Zustand**: Lightweight state management for authentication and orders
- **Persistent Storage**: Orders and auth state persist across sessions
- **TypeScript**: Full type safety for all components

### Components
- `HiringForm`: Client-facing order submission form
- `AdminLogin`: Secure authentication for admin access
- `AdminDashboard`: Main admin interface with order management
- `OrderDetails`: Detailed view and status management for individual orders

### Data Structure
```typescript
interface HiringOrder {
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
```

## Getting Started

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Start Development Server:**
   ```bash
   npm run dev
   ```

3. **Access the Application:**
   - Main Portfolio: `http://localhost:5173`
   - Hiring Form: `http://localhost:5173/hire`
   - Admin Dashboard: `http://localhost:5173/admin`

## Security Notes

- Admin credentials are stored in localStorage (for demo purposes)
- In production, implement proper authentication with backend validation
- Consider adding rate limiting for form submissions
- Add email notifications for new orders

## Future Enhancements

- Email notifications for new orders
- Client order tracking portal
- File upload for project requirements
- Payment integration
- Calendar integration for scheduling
- Export orders to CSV/PDF
- Multi-admin support with roles
