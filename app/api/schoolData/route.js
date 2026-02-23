import {supabase} from '../client.js'
import {NextResponse} from 'next/server'

export async function GET(){
   const {data, error} = await supabase
      .from('Institute_table')
      .select('*')
      .eq('status', true)
   
   if(error){
       return NextResponse.json({error : error.message}, {status: 500})
   }

   return NextResponse.json(data)
}

export async function POST(request){
   const body = await request.json()

   const {data, error} = await supabase
      .from('Institute_table')
      .insert([body])
      .select()
   
   if(error){
       return NextResponse.json({error : error.message}, {status: 500})
   }

   return NextResponse.json(data, {status: 201})
}