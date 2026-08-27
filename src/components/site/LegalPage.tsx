import { PageHero } from "./ui";
export function LegalPage({
  title,
  intro,
  sections,
}: {
  title: string;
  intro: string;
  sections: { heading: string; body: string }[];
}) {
  return (
    <>
      <PageHero compact eyebrow="Legal" title={title} intro={intro} />
      <section className="section">
        <div className="container-page legal-copy">
          <p>
            <strong>Implementation draft:</strong> This page requires appropriate review before
            production publication.
          </p>
          {sections.map((s) => (
            <section key={s.heading}>
              <h2>{s.heading}</h2>
              <p>{s.body}</p>
            </section>
          ))}
        </div>
      </section>
    </>
  );
}
