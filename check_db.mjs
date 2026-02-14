
import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';

// Fix for ES modules import
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env manualy
try {
    const envPath = path.resolve(__dirname, '.env');
    if (fs.existsSync(envPath)) {
        const envContent = fs.readFileSync(envPath, 'utf-8');

        envContent.split('\n').forEach(line => {
            const [key, value] = line.split('=');
            if (key && value) {
                process.env[key.trim()] = value.trim();
            }
        });
    }
} catch (e) {
    console.error('Error reading .env', e);
}


const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error('Missing Supabase credentials in .env');
    console.log('VITE_SUPABASE_URL:', supabaseUrl);
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkColumn() {
    console.log('Checking if logo_url column exists in resources table...');

    // Try to select the specific column
    const { data, error } = await supabase
        .from('resources')
        .select('logo_url')
        .limit(1);

    if (error) {
        console.error('❌ Error or column likely missing:', error.message);
        console.log('\nSuggested SQL to run in Supabase SQL Editor:');
        console.log('ALTER TABLE resources ADD COLUMN logo_url text;');
    } else {
        console.log('✅ Success! `logo_url` column exists and is accessible.');
    }
}

checkColumn();
