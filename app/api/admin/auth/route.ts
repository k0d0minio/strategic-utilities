import { NextRequest, NextResponse } from 'next/server'
import { getAllFormSubmissions } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json()
    
    // Simple password check against environment variable
    const adminPassword = process.env.ADMIN_PASSWORD
    
    if (!adminPassword) {
      return NextResponse.json(
        { success: false, message: 'Admin password not configured' },
        { status: 500 }
      )
    }

    if (password === adminPassword) {
      return NextResponse.json({ success: true })
    } else {
      return NextResponse.json(
        { success: false, message: 'Invalid password' },
        { status: 401 }
      )
    }
  } catch (error) {
    console.error('Authentication error:', error)
    return NextResponse.json(
      { success: false, message: 'Authentication failed' },
      { status: 500 }
    )
  }
}
