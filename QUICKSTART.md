# Quick Start Guide

## Prerequisites

- Node.js 16+ and npm installed
- Modern web browser (Chrome, Firefox, Safari, Edge)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/vhugo1234/admin-clients-panel.git
cd admin-clients-panel
```

2. Install dependencies:
```bash
npm install
```

3. (Optional) Configure environment:
```bash
cp .env.example .env
# Edit .env to set your VITE_BACKEND_URL if different from default
```

## Development

Start the development server:
```bash
npm run dev
```

The application will open at http://localhost:3000

## Production Build

Build for production:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## Code Quality

Run TypeScript compiler:
```bash
npm run build
```

Run linter:
```bash
npm run lint
```

## Project Structure

```
admin-clients-panel/
├── src/
│   ├── AdminClientsTab.tsx    # Main component
│   ├── App.tsx                # App wrapper
│   ├── main.tsx              # Entry point
│   ├── config.ts             # Configuration
│   ├── lib/
│   │   └── api.ts            # Axios client
│   └── contexts/
│       └── AuthContext.tsx   # Auth provider
├── index.html                # HTML template
├── package.json              # Dependencies
├── tsconfig.json             # TypeScript config
├── vite.config.ts            # Vite config
└── .eslintrc.cjs             # ESLint config
```

## Usage

### With Mock Data (Default)

The application works out of the box with mock data. All features are functional including:
- Searching and filtering
- Creating/editing clients (in-memory only)
- Deleting clients (in-memory only)
- Viewing logs (mock data)
- CSV export

### With Real API

To connect to a real backend API:

1. Set `VITE_BACKEND_URL` in `.env` file
2. Ensure your API implements the required endpoints (see README.md)
3. Update token storage in `AuthContext.tsx` if using different auth mechanism
4. The application will automatically use the real API

## Features Overview

- **Search**: Type in the search box to filter by name, schema, email, etc.
- **Filters**: Use dropdowns to filter by status or plan type
- **Dark Mode**: Click the theme toggle icon
- **Export CSV**: Click the download icon to export visible clients
- **Add Client**: Click "Adicionar Novo Cliente" button
- **Edit Client**: Click the edit icon in the actions column
- **Delete Client**: Click the delete icon (with confirmation)
- **View Logs**: Click the logs icon to see client activity
- **Zoom Logo**: Click on a client logo to view full size
- **Pagination**: Navigate between pages at the bottom of the table

## Customization

### Theming

Edit `src/App.tsx` to customize the Material-UI theme:

```typescript
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Your brand color
    },
    // ... more theme options
  },
});
```

### API Endpoints

Edit `src/AdminClientsTab.tsx` to change API endpoints:

```typescript
const API_URL = '/admin/tenants';
const UPLOAD_API_URL = '/admin/upload/logo';
```

### Mock Data

To add or modify mock data, edit the initial client list in the `fetchClients` function or add more mock logs in the `MOCK_LOGS` constant.

## Troubleshooting

### Port already in use

If port 3000 is already in use, edit `vite.config.ts`:

```typescript
server: {
  port: 3001, // Change to any available port
  open: true
}
```

### TypeScript errors

Make sure all dependencies are installed:
```bash
npm install
```

Clear cache and rebuild:
```bash
rm -rf node_modules dist
npm install
npm run build
```

### API connection issues

Check that:
1. Backend API is running
2. CORS is properly configured on the backend
3. `VITE_BACKEND_URL` is set correctly
4. Network requests are not blocked by firewall

## Next Steps

- Read [FEATURES.md](FEATURES.md) for detailed feature documentation
- Check [README.md](README.md) for API endpoint specifications
- Explore the code in `src/AdminClientsTab.tsx` to understand the implementation

## Support

For issues or questions, please open an issue on GitHub.
