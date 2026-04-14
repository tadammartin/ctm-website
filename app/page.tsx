import Image from "next/image";
import { Mail } from "lucide-react";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero */}
      <header className="text-center mb-8">
        <Image
          src="/lsc-logo.png"
          alt="Lexington Sporting Club"
          width={80}
          height={80}
          className="mx-auto mb-4"
        />
        <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-1">
          Class of 2028
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-3">
          Colton Martin
        </h1>
        <div className="flex justify-center gap-2">
          <span className="px-3 py-1 bg-green-700 text-white text-sm font-semibold rounded">
            D
          </span>
          <span className="px-3 py-1 bg-green-700 text-white text-sm font-semibold rounded">
            MF
          </span>
        </div>
      </header>

      {/* Nav */}
      <nav className="flex justify-center gap-6 mb-12 text-sm font-medium">
        <a
          href="#Player-Profile"
          className="text-green-700 hover:underline underline-offset-4"
        >
          Profile Info
        </a>
        <a
          href="#Highlights"
          className="text-green-700 hover:underline underline-offset-4"
        >
          2024-25 Club Highlights
        </a>
      </nav>

      {/* About Me */}
      <Section title="About Me">
        <p className="mb-4">
          I&apos;m a dual-sport (competitive swimming) athlete from a small
          Appalachian town east of Lexington, Kentucky. I&apos;m the Right Back
          for Lexington Sporting Club&apos;s top 09 team competing in MLS
          Next&apos;s U17 Academy Division. I started on the back line in the
          USYS Kentucky State Cup final for four years in a row between
          2022-2025 with champion finishes in 2023 &amp; 2025. I also played
          Right Back for the Lex Sporting USL Academy U15s that competed at the
          2023 &amp; 2024 USL Academy Cups in Tampa. Sometimes, I play wide
          centerback, wingback or winger depending on personnel, shape and
          tactics. I mostly play up and down the flanks but sometimes invert or
          fill space inside when we possess.
        </p>
        <p className="mb-4">
          For my high school team, I start as a box-to-box center midfielder for
          Montgomery County High School in the KHSAA 10th Region. I led the team
          in assists my freshman &amp; sophomore years and was All-District Team
          and All-Region honorable mention as a sophomore.
        </p>
        <p className="mb-4">
          As a versatile player, I can contribute in defensive or midfield roles
          both centrally or out wide. I&apos;ve played in various systems and
          shapes and can adapt my style of play and tactics on the fly; including
          possessing and building from the back, high-pressing and
          counter-attacking, or direct and aerial style. I pride myself on my
          work-rate, 1v1 defending, ball-winning, interceptions, driving the ball
          into space, composure, physicality, and service/crossing in the final
          third.
        </p>
        <p>
          I&apos;m an AP/Honors student with a 4.0+ weighted GPA aspiring to
          play college soccer at the highest level I can achieve.
        </p>
      </Section>

      {/* Player Profile */}
      <Section title="Player Profile" id="Player-Profile">
        <div className="grid sm:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold text-gray-500 uppercase text-xs tracking-wider mb-3">
              Demographics &amp; Academics
            </h3>
            <dl className="space-y-2 text-sm">
              <ProfileRow label="NCAA ID" value="#2405316920" />
              <ProfileRow label="Birthplace" value="Lexington, Kentucky, USA" />
              <ProfileRow label="Height" value={`6'1"`} />
              <ProfileRow label="Weight" value="160lbs" />
              <ProfileRow label="Unweighted GPA" value="3.72" />
              <ProfileRow label="Weighted GPA" value="4.06" />
              <ProfileRow label="Rolling GPA" value="4.12" />
            </dl>
          </div>

          <div>
            <h3 className="font-semibold text-gray-500 uppercase text-xs tracking-wider mb-3">
              Club
            </h3>
            <dl className="space-y-2 text-sm mb-6">
              <ProfileRow
                label="Team"
                value="Lexington Sporting Club U17 Green MLS Next AD"
              />
              <ProfileRow label="Primary Position" value="Right Back" />
              <ProfileRow
                label="Secondary"
                value="Wingback, Wide Centerback"
              />
              <ProfileRow label="Number" value="14" />
            </dl>

            <h3 className="font-semibold text-gray-500 uppercase text-xs tracking-wider mb-3">
              High School
            </h3>
            <dl className="space-y-2 text-sm">
              <ProfileRow
                label="School"
                value="Montgomery County High School"
              />
              <ProfileRow label="Class" value="2028" />
              <ProfileRow label="Primary Position" value="Center Midfielder" />
              <ProfileRow label="Secondary" value="Winger" />
              <ProfileRow label="Number" value="26" />
              <ProfileRow label="Region" value="KHSAA 10th Region" />
            </dl>
          </div>
        </div>
      </Section>

      {/* Soccer Accolades */}
      <Section title="Soccer Accolades">
        <ol className="list-decimal list-inside space-y-1.5 text-sm">
          <li>Two-year varsity starter and assist leader</li>
          <li>2025 HS District Champ and Region Runner-up</li>
          <li>2025 Great Crossing HS BirdsNest Classic All-Tourney Team</li>
          <li>
            2025 39th District All-Tourney Team and All-Region Honorable Mention
          </li>
          <li>Prep Soccer&apos;s 2024 Bluegrass Players to Watch</li>
          <li>
            USYS Kentucky State Cup 2x Champ (2023, 2025) and 2x Runner-up
            (2022, 2024)
          </li>
          <li>Lex Sporting U15 Academy Cup Team (2023, 2024)</li>
          <li>USYS Kentucky Premier League Champ (2023)</li>
          <li>
            St. Louis Scott Gallagher Fall Festival &amp; Spring Classic
            Champions (2022, 2023)
          </li>
          <li>Bluegrass Middle School Conference Runner-up (2023)</li>
          <li>ODP Kentucky State Team (2020-2022)</li>
          <li>ODP Midwest ID Camp attendee (2021)</li>
          <li>Kentucky Premier League 2nd Division Champ (2020)</li>
          <li>Kentucky Select Soccer League Premier Division Champ (2019)</li>
        </ol>
      </Section>

      {/* Camps */}
      <Section title="College Camps Attended">
        <ol className="list-decimal list-inside space-y-1.5 text-sm">
          <li>Centre College NCAA DIII (June 2021)</li>
          <li>ODP Midwest ID Camp (July 2021)</li>
          <li>Northern Kentucky University NCAA DI (July 2024)</li>
          <li>Centre College NCAA DIII (July 2024)</li>
          <li>Lindsey Wilson College NAIA (July 2024)</li>
          <li>Bellarmine University NCAA DI (December 2024)</li>
          <li>University of Charleston NCAA DII (February 2025)</li>
          <li>Saint Louis University NCAA DI (February 2025)</li>
          <li>Lindenwood University NCAA DI (June 2025)</li>
          <li>Centre College NCAA DIII (July 2025)</li>
          <li>Xavier University NCAA DI (July 2025)</li>
        </ol>
      </Section>

      {/* Academic Accolades */}
      <Section title="Academic Accolades">
        <ul className="list-disc list-inside space-y-1.5 text-sm">
          <li>Duke TIP recipient</li>
          <li>Distinguished in Math (K-Prep Assessments)</li>
          <li>Honors &amp; AP Student</li>
          <li>National Beta Club member</li>
          <li>KHSAA Academic All-State (2x)</li>
        </ul>
      </Section>

      {/* Other Sports & Activities */}
      <Section title="Other Sports & Activities">
        <h3 className="font-semibold text-sm mb-2">Sports</h3>
        <p className="text-sm mb-4">
          Basketball (6 years), Baseball (2 years), Competitive Swimming
          (2021-present)
        </p>
        <h3 className="font-semibold text-sm mb-2">Activities</h3>
        <p className="text-sm mb-4">
          First Baptist Church of Mt. Sterling, Fellowship of Christian
          Athletes, Future Business Leaders of America, competitive swimming,
          fishing, boxing, shooting firearms, drawing/sketching, coding, learning
          acoustic guitar
        </p>
        <h3 className="font-semibold text-sm mb-2">Academic Interests</h3>
        <p className="text-sm">Business, engineering, and computer science</p>
      </Section>

      {/* Family */}
      <Section title="Family">
        <p className="text-sm">
          I&apos;m the oldest of three. My mother is from Atlanta and grew up
          riding equestrian, showing American Quarter Horses, and playing high
          school tennis. She&apos;s currently a homemaker. My 6&apos;4&quot;
          father is from near Lexington and grew up playing high school
          basketball, track &amp; field, and soccer. He works in sports media and
          tech. Both of my parents are graduates of Eastern Kentucky University.
        </p>
      </Section>

      {/* Highlights placeholder */}
      <section id="Highlights" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 border-b pb-2">
          2024-25 Club Highlights
        </h2>
        <p className="text-sm text-gray-500 italic">Coming soon.</p>
      </section>

      {/* Contact */}
      <Section title="Contact Me">
        <div className="flex justify-center gap-8">
          <a
            href="mailto:recruiting@coltonmartin.soccer?subject=Hello%2C%20from%20your%20website"
            className="flex flex-col items-center gap-2 text-gray-600 hover:text-green-700 transition-colors"
            aria-label="Email"
          >
            <Mail size={28} />
            <span className="text-xs">Email</span>
          </a>
          <a
            href="https://x.com/coltontmartin"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 text-gray-600 hover:text-green-700 transition-colors"
            aria-label="X / Twitter"
          >
            <XIcon className="w-7 h-7" />
            <span className="text-xs">X</span>
          </a>
          <a
            href="https://instagram.com/coltonmartin.soccer"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 text-gray-600 hover:text-green-700 transition-colors"
            aria-label="Instagram"
          >
            <InstagramIcon className="w-7 h-7" />
            <span className="text-xs">Instagram</span>
          </a>
        </div>
      </Section>

      {/* Footer */}
      <footer className="text-center text-xs text-gray-400 py-6 border-t mt-8">
        &copy; {new Date().getFullYear()} Colton Martin
      </footer>
    </main>
  );
}

function Section({
  title,
  id,
  children,
}: {
  title: string;
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mb-12">
      <h2 className="text-2xl font-bold mb-4 border-b pb-2">{title}</h2>
      {children}
    </section>
  );
}

function ProfileRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between">
      <dt className="text-gray-500">{label}</dt>
      <dd className="font-medium">{value}</dd>
    </div>
  );
}
