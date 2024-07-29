import { createClient } from '@supabase/supabase-js';

import { Database } from '../types/supabase';

const VITE_SUPABASE_URL = 'https://eqwtcznujnbxfqnbjrsx.supabase.co';
const SUPABASE_ADMIN_KEY =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVxd3Rjem51am5ieGZxbmJqcnN4Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwNDA5NjE3MywiZXhwIjoyMDE5NjcyMTczfQ.6L4Jb-TxJ3lV83RWTkKPF_micCSGWPkBYs6bbrcWX1U';

// Create a single supabase client for interacting with your database
export const client = createClient<Database>(
	VITE_SUPABASE_URL,
	SUPABASE_ADMIN_KEY,
);
