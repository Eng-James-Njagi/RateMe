import { supabase } from '../../client.js'
import { NextResponse } from 'next/server'

export async function GET(request, { params }) {
  const { institute_id } = await params

  const { data, error } = await supabase
    .from('Institute_table')
    .select('*')
    .eq('institute_id', institute_id)
    .single()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json(data)
}
