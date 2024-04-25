import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://qskzuqregmqldgjuahey.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFza3p1cXJlZ21xbGRnanVhaGV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM5MDgwMzcsImV4cCI6MjAyOTQ4NDAzN30.farxmaolzWodL_14SrZygagPdupzDWDmroqLy1SXikw';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
