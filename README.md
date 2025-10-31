# Admin Clients Panel

Advanced admin clients panel built with React and Material-UI.

## Features

- **Global Search**: Search by name, schema, responsible, email, domain
- **Dropdown Filters**: Filter by status and plan type
- **Summary Cards**: Total clients, users, and assets
- **Dark/Light Mode Toggle**: Switch between dark and light themes
- **CSV Export**: Export filtered client data to CSV
- **Complete Actions**: Edit, delete, view logs, zoom logo, copy admin password
- **Create/Edit Modal**: Full form with admin fields, logo preview, tooltips
- **Animated Loader**: Beautiful loading states
- **Pagination & Sorting**: Full table controls
- **Responsive Design**: Works perfectly on mobile and desktop
- **Premium UX**: Modern, polished interface
- **API Ready**: Ready to connect to real API endpoints

## Tech Stack

- React 18
- TypeScript
- Material-UI (MUI) v5
- Axios for API calls
- Vite for build tooling

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

The application will open at http://localhost:3000

## Build

```bash
npm run build
```

## Project Structure

```
src/
├── AdminClientsTab.tsx    # Main admin panel component
├── App.tsx                # App wrapper with theme and providers
├── main.tsx              # React entry point
├── index.css             # Global styles
├── config.ts             # Configuration (BACKEND_URL)
├── lib/
│   └── api.ts            # Axios API client with interceptors
└── contexts/
    └── AuthContext.tsx   # Authentication context
```

## Configuration

Edit `src/config.ts` to set your backend URL:

```typescript
export const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8000';
```

## API Endpoints

The component expects the following endpoints:

- `GET /api/admin/tenants` - List all tenants
- `POST /api/admin/tenants` - Create new tenant
- `PUT /api/admin/tenants/:id` - Update tenant
- `DELETE /api/admin/tenants/:id` - Delete tenant
- `POST /api/admin/upload/logo` - Upload tenant logo

## Mock Data

The component currently uses mock data for demonstration. When connected to a real API, it will automatically use the actual data.

## Features Breakdown

### Search & Filters
- Global search across name, schema, responsible, email, and domain
- Status filter dropdown (active, inactive, pending, suspended)
- Plan filter dropdown (free, premium, enterprise)

### Actions
- **Edit**: Open modal to edit client details
- **Delete**: Delete client with confirmation
- **View Logs**: Display client activity logs
- **Zoom Logo**: View full-size logo
- **Copy Password**: Copy admin password to clipboard

### Create/Edit Modal
- Company name and schema
- Domain URL
- Plan and status
- Expiration date
- Logo upload with preview
- Responsible contact information
- Admin user creation (name, email, password)
- Tooltips for guidance

### Export
- Export filtered clients to CSV
- Includes all relevant fields
- Properly formatted dates
- UTF-8 encoding with BOM

## License

MIT
