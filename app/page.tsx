import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex flex-col items-center w-full min-h-[812px] pt-[258px] pb-16 px-4 gap-[16px] overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.webp"
            alt=""
            fill
            className="object-cover object-[50%_0%]"
            priority
          />
          <div className="absolute inset-0 bg-forest/70" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 50% 0, transparent 7%, transparent 42%, #000 89%)",
            }}
          />
        </div>

        {/* Hero content */}
        <div className="relative z-10 flex flex-col items-center gap-[16px] px-16 max-sm:px-4">
          <div className="flex flex-col items-center gap-[2px]">
            <p className="font-proxima text-[14px] font-[900] tracking-[0.05em] text-volt leading-[120%]">
              CLASS OF 2028
            </p>
            <h1 className="font-gin text-[64px] font-normal leading-[60px] tracking-[-0.04em] text-white text-center max-sm:text-[40px] max-sm:leading-[40px]">
              Colton Martin
            </h1>
          </div>
          <p className="font-proxima text-[32px] font-normal leading-[40px] tracking-[-0.04em] text-muted-2 max-sm:text-[24px]">
            D, MF
          </p>
          <Image
            src="/lsc-logo.png"
            alt="Lexington Sporting Club"
            width={80}
            height={120}
            className="mt-2"
          />

          {/* CTAs */}
          <div className="flex flex-col gap-3 w-full max-w-[288px] mt-4">
            <a
              href="#Player-Profile"
              className="font-proxima text-[14px] font-bold text-center text-forest bg-volt rounded-[20px] py-3 px-5 w-full hover:opacity-90 transition-opacity"
            >
              Profile Info
            </a>
            <a
              href="#Highlights"
              className="font-proxima text-[14px] font-bold text-center text-white border border-volt rounded-[20px] py-3 px-5 w-full hover:bg-volt/10 transition-colors"
            >
              2024-25 Club Highlights
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT ME / INTRO */}
      <section className="bg-transparent">
        <div className="bg-light-gray flex flex-col items-center w-full py-16 px-[140px] gap-6 max-md:px-10 max-sm:px-4 max-sm:py-10">
          <h2 className="font-gin text-[28px] font-normal leading-[120%] tracking-[0.2em] text-forest text-center uppercase">
            About me
          </h2>
          <div className="flex flex-col gap-6 max-w-[800px]">
            <p className="font-proxima text-[18px] font-normal leading-[29px] tracking-[-0.01em] text-forest">
              I&apos;m a dual-sport (competitive swimming) athlete from a small
              Appalachian town east of Lexington, Kentucky. I&apos;m the Right
              Back for Lexington Sporting Club&apos;s top 09 team competing in
              MLS Next&apos;s U17 Academy Division. I started on the back line
              in the USYS Kentucky State Cup final for four years in a row
              between 2022-2025 with champion finishes in 2023 &amp; 2025. I
              also played Right Back for the Lex Sporting USL Academy U15s that
              competed at the 2023 &amp; 2024 USL Academy Cups in Tampa.
              Sometimes, I play wide centerback, wingback or winger depending on
              personnel, shape and tactics. I mostly play up and down the flanks
              but sometimes invert or fill space inside when we possess.
            </p>
            <p className="font-proxima text-[18px] font-normal leading-[29px] tracking-[-0.01em] text-forest">
              For my high school team, I start as a box-to-box center midfielder
              for Montgomery County High School in the KHSAA 10th Region. I led
              the team in assists my freshman &amp; sophomore years and was
              All-District Team and All-Region honorable mention as a sophomore.
            </p>
            <p className="font-proxima text-[18px] font-normal leading-[29px] tracking-[-0.01em] text-forest">
              As a versatile player, I can contribute in defensive or midfield
              roles both centrally or out wide. I&apos;ve played in various
              systems and shapes and can adapt my style of play and tactics on
              the fly; including possessing and building from the back,
              high-pressing and counter-attacking, or direct and aerial style. I
              pride myself on my work-rate, 1v1 defending, ball-winning,
              interceptions, driving the ball into space, composure,
              physicality, and service/crossing in the final third.
            </p>
            <p className="font-proxima text-[18px] font-normal leading-[29px] tracking-[-0.01em] text-forest">
              I&apos;m an AP/Honors student with a 4.0+ weighted GPA aspiring to
              play college soccer at the highest level I can achieve.
            </p>
          </div>
        </div>
      </section>

      {/* PLAYER PROFILE */}
      <section
        id="Player-Profile"
        className="bg-white flex flex-col items-center w-full pt-16 pb-10 px-[140px] gap-10 max-md:px-10 max-sm:px-4"
      >
        <h2 className="font-gin text-[28px] font-normal leading-[120%] tracking-[0.2em] text-forest text-center uppercase">
          player profile
        </h2>

        {/* Vitals */}
        <div className="flex flex-col gap-6 w-full max-w-[800px]">
          <VitalsRow label="NCAA ID" value="#2405316920" />
          <VitalsRow label="Birthplace" value="Lexington, Kentucky, USA" />
          <VitalsRow label="Height" value={`6'1"`} />
          <VitalsRow label="Weight" value="160lbs" />
          <VitalsRow label="Unweighted GPA" value="3.72" />
          <VitalsRow label="Weighted GPA" value="4.06" />
          <VitalsRow label="Rolling GPA" value="4.12" />

          {/* Club section */}
          <div className="border-b border-border-light pb-6">
            <h4 className="font-proxima text-[14px] font-bold leading-[20px] tracking-[0.1em] uppercase text-forest mb-2">
              Club
            </h4>
            <p className="font-proxima text-[16px] text-muted">
              Lexington Sporting Club U17 Green MLS Next AD
            </p>
          </div>
          <VitalsRow label="Primary Position" value="Right Back" />
          <VitalsRow
            label="Secondary Positions"
            value="Wingback, Wide Centerback"
          />
          <VitalsRow label="Uniform Number" value="14" />

          {/* Jersey Colors */}
          <div className="border-b border-border-light pb-6 flex flex-wrap gap-6">
            <div className="flex flex-col items-center gap-3">
              <p className="font-proxima text-[14px] text-muted text-center">
                Home
              </p>
              <div className="flex gap-[2px]">
                <span className="w-5 h-5 rounded-[6px] bg-[#097409] border border-muted" />
                <span className="w-5 h-5 rounded-[6px] bg-white border border-muted" />
              </div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <p className="font-proxima text-[14px] text-muted text-center">
                Away
              </p>
              <div className="flex gap-[2px]">
                <span className="w-5 h-5 rounded-[6px] bg-[#333] border border-volt" />
                <span className="w-5 h-5 rounded-[6px] bg-white border border-muted" />
              </div>
            </div>
          </div>

          {/* High School section */}
          <div className="border-b border-border-light pb-6">
            <h4 className="font-proxima text-[14px] font-bold leading-[20px] tracking-[0.1em] uppercase text-forest mb-2">
              High School
            </h4>
            <p className="font-proxima text-[16px] text-muted">
              Montgomery County High School
            </p>
          </div>
          <VitalsRow label="Class Year" value="2028" />
          <VitalsRow label="Primary Position" value="Center Midfielder" />
          <VitalsRow label="Secondary Position" value="Winger" />
          <VitalsRow label="Uniform Number" value="26" />
          <VitalsRow label="Region" value="KHSAA 10th Region" />

          {/* HS Jersey Colors */}
          <div className="pb-6 flex flex-wrap gap-6">
            <div className="flex flex-col items-center gap-3">
              <p className="font-proxima text-[14px] text-muted text-center">
                Home
              </p>
              <div className="flex gap-[2px]">
                <span className="w-5 h-5 rounded-[6px] bg-[#0033a1] border border-[#ce0e2d]" />
                <span className="w-5 h-5 rounded-[6px] bg-white border border-muted" />
              </div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <p className="font-proxima text-[14px] text-muted text-center">
                Away
              </p>
              <div className="flex gap-[2px]">
                <span className="w-5 h-5 rounded-[6px] bg-[#b4b4b4] border border-[#0033a1]" />
                <span className="w-5 h-5 rounded-[6px] bg-white border border-muted" />
              </div>
            </div>
          </div>
        </div>

        {/* Soccer Accolades */}
        <div className="flex flex-col gap-6 w-full max-w-[800px]">
          <h3 className="font-proxima text-[14px] font-bold leading-[20px] tracking-[0.1em] uppercase text-forest">
            Soccer Accolades
          </h3>
          <ul className="font-proxima text-[16px] text-muted pl-[15px] list-disc space-y-1">
            <li>Two-year varsity starter and assist leader</li>
            <li>2025 HS District Champ and Region Runner-up</li>
            <li>
              2025 Great Crossing HS BirdsNest Classic All-Tourney Team
            </li>
            <li>
              2025 39th District All-Tourney Team and All-Region Honorable
              Mention
            </li>
            <li>
              Prep Soccer&apos;s 2024 Bluegrass Players to Watch
            </li>
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
            <li>
              Kentucky Select Soccer League Premier Division Champ (2019)
            </li>
          </ul>
        </div>

        {/* College Camps */}
        <div className="flex flex-col gap-6 w-full max-w-[800px]">
          <h3 className="font-proxima text-[14px] font-bold leading-[20px] tracking-[0.1em] uppercase text-forest">
            College Camps Attended
          </h3>
          <ul className="font-proxima text-[16px] text-muted pl-[15px] list-disc space-y-1">
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
          </ul>
        </div>

        {/* Academic Accolades */}
        <div className="flex flex-col gap-6 w-full max-w-[800px]">
          <h3 className="font-proxima text-[14px] font-bold leading-[20px] tracking-[0.1em] uppercase text-forest">
            Academic Accolades
          </h3>
          <ul className="font-proxima text-[16px] text-muted pl-[15px] list-disc space-y-1">
            <li>Duke TIP recipient</li>
            <li>Distinguished in Math (K-Prep Assessments)</li>
            <li>Honors &amp; AP Student</li>
            <li>National Beta Club member</li>
            <li>KHSAA Academic All-State (2x)</li>
          </ul>
        </div>

        {/* Other Sports & Activities */}
        <div className="flex flex-col gap-6 w-full max-w-[800px]">
          <h3 className="font-proxima text-[14px] font-bold leading-[20px] tracking-[0.1em] uppercase text-forest">
            Other Sports &amp; Activities
          </h3>
          <div className="font-proxima text-[16px] text-muted space-y-4">
            <p>
              <strong className="text-forest">Sports:</strong> Basketball (6
              years), Baseball (2 years), Competitive Swimming (2021-present)
            </p>
            <p>
              <strong className="text-forest">Activities:</strong> First Baptist
              Church of Mt. Sterling, Fellowship of Christian Athletes, Future
              Business Leaders of America, competitive swimming, fishing, boxing,
              shooting firearms, drawing/sketching, coding, learning acoustic
              guitar
            </p>
            <p>
              <strong className="text-forest">Academic Interests:</strong>{" "}
              Business, engineering, and computer science
            </p>
          </div>
        </div>

        {/* Family */}
        <div className="flex flex-col gap-6 w-full max-w-[800px]">
          <h3 className="font-proxima text-[14px] font-bold leading-[20px] tracking-[0.1em] uppercase text-forest">
            Family
          </h3>
          <p className="font-proxima text-[16px] text-muted">
            I&apos;m the oldest of three. My mother is from Atlanta and grew up
            riding equestrian, showing American Quarter Horses, and playing high
            school tennis. She&apos;s currently a homemaker. My 6&apos;4&quot;
            father is from near Lexington and grew up playing high school
            basketball, track &amp; field, and soccer. He works in sports media
            and tech. Both of my parents are graduates of Eastern Kentucky
            University.
          </p>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section
        id="Highlights"
        className="bg-background flex flex-col items-center w-full py-16 px-[140px] gap-6 max-md:px-10 max-sm:px-4"
      >
        <h2 className="font-gin text-[28px] font-normal leading-[120%] tracking-[0.2em] text-white text-center uppercase">
          2024-25 Club Highlights
        </h2>
        <div className="flex flex-col md:flex-row gap-0 w-full max-w-[1440px]">
          <div className="w-full aspect-video">
            <iframe
              src="https://www.youtube.com/embed/Rog-5ewQNvk?rel=0&controls=1&autoplay=0&mute=1"
              title="Colton Martin | Class of 2028 | 2024-25 U16 NAL & State Cup Highlights"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
          <div className="w-full aspect-video">
            <iframe
              src="https://www.youtube.com/embed/UcZgzoktPHo?rel=0&controls=1&autoplay=0&mute=1"
              title="Nov. 2025 - MLS NEXT AD U17 vs. One Knox"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* FOOTER / CONTACT */}
      <footer className="bg-forest flex flex-col items-center w-full py-14 px-6 gap-8">
        <h2 className="font-gin text-[28px] font-normal leading-[120%] tracking-[0.2em] text-white text-center uppercase">
          Contact Me
        </h2>
        <div className="flex items-center gap-8">
          <a
            href="mailto:recruiting@coltonmartin.soccer?subject=Hello%2C%20from%20your%20website"
            className="text-white hover:text-volt transition-colors"
            aria-label="Email"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </a>
          <a
            href="https://x.com/coltontmartin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-volt transition-colors"
            aria-label="X / Twitter"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a
            href="https://instagram.com/coltonmartin.soccer"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-volt transition-colors"
            aria-label="Instagram"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>
        </div>
      </footer>
    </>
  );
}

function VitalsRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-b border-border-light pb-6 flex flex-col gap-2">
      <h4 className="font-proxima text-[14px] font-bold leading-[20px] tracking-[0.1em] uppercase text-forest">
        {label}
      </h4>
      <p className="font-proxima text-[16px] leading-[20px] text-muted flex flex-wrap">
        {value}
      </p>
    </div>
  );
}
