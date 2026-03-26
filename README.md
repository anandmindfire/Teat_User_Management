# React Debug Test - User Management

## Setup

1. Create Vite React + TS app  
2. Replace App.tsx  
3. Add users.json inside src/  
4. Run npm run dev  

## Task
Fix all bugs without restructuring the app.

## Known Issues (11 Bugs)

- Incorrect state type initialization
- Wrong dependency in useEffect (causes loop)
- Broken search logic (function misuse)
- Custom hook missing required return data
- Form submit missing preventDefault
- Direct mutation of state array
- Direct mutation of form state
- Possible null/undefined crash in rendering
- Incorrect key usage in list
- Wrong data logic in UI
- Incorrect empty state condition
