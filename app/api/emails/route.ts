import { NextResponse } from 'next/server'
import { readFileSync, existsSync } from 'fs'
import { join } from 'path'

export async function GET() {
  try {
    const filePath = join(process.cwd(), 'emails.json')
    
    if (!existsSync(filePath)) {
      return NextResponse.json([])
    }
    
    const emails = JSON.parse(readFileSync(filePath, 'utf8'))
    return NextResponse.json(emails)
  } catch (error) {
    return NextResponse.json([])
  }
}