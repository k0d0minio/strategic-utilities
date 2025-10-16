import { NextRequest, NextResponse } from 'next/server'
import { getAllFormSubmissions } from '@/lib/db'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function GET(request: NextRequest) {
  try {
    const submissions = await getAllFormSubmissions()
    // Debug: log counts per form type
    const counts = submissions.reduce<Record<string, number>>((acc, s) => {
      acc[s.form_type] = (acc[s.form_type] || 0) + 1
      return acc
    }, {})
    console.log('[admin/submissions] total:', submissions.length, 'counts:', counts)
    
    return new NextResponse(
      JSON.stringify({ success: true, submissions }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-store',
        },
      },
    )
  } catch (error) {
    console.error('Error fetching submissions:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to fetch submissions' },
      { status: 500 }
    )
  }
}
