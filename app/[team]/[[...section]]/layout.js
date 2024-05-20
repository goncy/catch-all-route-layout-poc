import Link from "next/link";

export default function SectionLayout({children, params: {team}}) {
  const date = new Date().toISOString();

  return (
    <div>
      <p>Date on [[...section]] layout: {date}</p>
      <nav style={{display: 'flex', gap: 12}}>
        <Link href={`/${team}/monitoring`}>Monitoring</Link>
        <Link href={`/${team}/insights`}>Insights</Link>
        <Link href={`/${team}/feedback`}>Feedback</Link>
      </nav>
      {children}
    </div>
  )
}