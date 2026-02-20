import SchoolCard from './SchoolCard'

export default async function SchoolPage({ params }) {
  const { school_id } = await params
  return <SchoolCard school_id={school_id} />
}