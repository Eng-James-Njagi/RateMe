import {supabase} from '../client.js'
import {NextResponse} from 'next/server'

export async function GET(){
   const {data, error} = await supabase
      .from('Institute_table')
      .select('*')
   
   if(error){
       return NextResponse.json({error : error.message}, {status: 500})
   }

   return NextResponse.json(data)
}