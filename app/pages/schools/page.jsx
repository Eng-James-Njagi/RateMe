import SchoolCard from './[school_id]/SchoolCard'

export default async function SecondPage({ params }) {
  const { school_id } = await params

  return (
    <>
      <SchoolCard school_id={school_id} />
    </>
  )
}