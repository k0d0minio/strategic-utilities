import { sql } from '@vercel/postgres'

export interface FormSubmission {
  id: string
  form_type: string
  data: Record<string, any>
  created_at: string
}

// Initialize the database table if it doesn't exist
export async function initializeDatabase() {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS form_submissions (
        id SERIAL PRIMARY KEY,
        form_type VARCHAR(50) NOT NULL,
        data JSONB NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
      )
    `
    console.log('Database table initialized successfully')
  } catch (error) {
    console.error('Error initializing database:', error)
    throw error
  }
}

// Insert a new form submission
export async function insertFormSubmission(formType: string, data: Record<string, any>) {
  try {
    const result = await sql`
      INSERT INTO form_submissions (form_type, data)
      VALUES (${formType}, ${JSON.stringify(data)}::jsonb)
      RETURNING id, created_at
    `
    return result.rows[0]
  } catch (error) {
    console.error('Error inserting form submission:', error)
    throw error
  }
}

// Get all form submissions
export async function getAllFormSubmissions() {
  try {
    const result = await sql`
      SELECT id, form_type, data, created_at
      FROM form_submissions
      ORDER BY created_at DESC
    `
    // Ensure data is parsed into objects in case the driver returns strings
    const rows = result.rows.map((row) => ({
      ...row,
      data: typeof row.data === 'string' ? safeJsonParse(row.data) : row.data,
    })) as FormSubmission[]
    return rows
  } catch (error) {
    console.error('Error fetching form submissions:', error)
    throw error
  }
}

// Get form submissions by type
export async function getFormSubmissionsByType(formType: string) {
  try {
    const result = await sql`
      SELECT id, form_type, data, created_at
      FROM form_submissions
      WHERE form_type = ${formType}
      ORDER BY created_at DESC
    `
    const rows = result.rows.map((row) => ({
      ...row,
      data: typeof row.data === 'string' ? safeJsonParse(row.data) : row.data,
    })) as FormSubmission[]
    return rows
  } catch (error) {
    console.error('Error fetching form submissions by type:', error)
    throw error
  }
}

function safeJsonParse(value: string) {
  try {
    return JSON.parse(value)
  } catch {
    return value
  }
}
