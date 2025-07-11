import { SiteHeader } from "@/components/site-header";
import { Section } from "@/components/section";
import { ProjectCard } from "@/components/project-card";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="h-[calc(100vh-64px)] flex items-center justify-center text-center px-4">
        <div>
          <h1 className="text-4xl md:text-6xl font-semibold text-foreground">
            gunes teker
          </h1>
          <p className="mt-4 text-muted-foreground text-sm md:text-base">
            software developer
          </p>
        </div>
      </main>

      <Section id="about" title="about">
        <div className="space-y-6">

          <div>
            <p>
              Full-stack software developer based in Berlin, experienced in building complex applications using Java, TypeScript, and JavaScript.
              Strong background in backend and frontend technologies including Spring, Quarkus, React, and Next.js.
            </p>
          </div>

          <div>
            <h3 className="text-base font-medium text-foreground">Experience</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <strong>Software Engineer</strong> — regiocom SE, Berlin (2023–now)
                <br />
                Internal data management tools using Java, Spring, WildFly, Oracle, JUnit, GitLab.
              </li>
              <li>
                <strong>Software Engineer</strong> — VOQUZ Digital Experts GmbH, Ismaning (2022–2023)
                <br />
                Public sector management software using Quarkus, Java 17, StencilJS, Hibernate, MSSQL.
              </li>
              <li>
                <strong>Software Engineer</strong> — iic-solutions GmbH, Munich (2022)
                <br />
                Communication systems using Java EE, MapStruct, Java Reflection API.
              </li>
              <li>
                <strong>Junior IT Consultant</strong> — amasol AG, Munich (2021–2022)
                <br />
                Monitoring tools with Moogsoft, Splunk, Kafka, OpenTelemetry, InfluxDB.
              </li>
              <li>
                <strong>Android Developer</strong> — adabay GmbH, Munich (2018–2019)
                <br />
                Android app and Jakarta EE backend for insurance and humanitarian orgs.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-medium text-foreground">Education</h3>
            <ul className="text-sm space-y-1">
              <li>
                <strong>MSc Computer Science</strong> — TU Berlin (2022–ongoing)
              </li>
              <li>
                <strong>BSc Computer Science & Statistics</strong> — LMU Munich (2016–2021)
                <br />
                Thesis: Pre-clustering for statistical relational data analysis using the example of the coronavirus epidemic
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-medium text-foreground">Skills</h3>
            <p className="text-sm">
              Java, Spring, Quarkus, JavaScript/TypeScript, React, Next.js, SQL, Linux, Git, JUnit, Spock, Hibernate, Docker.
            </p>
          </div>

          <div>
            <h3 className="text-base font-medium text-foreground">Languages</h3>
            <p className="text-sm">Turkish (native), English (C1), German (C1)</p>
          </div>

        </div>
      </Section>
      <Section id="projects" title="projects">
        <p>
          I’m a creative developer passionate about building sleek, functional experiences
          on the web. My work focuses on minimal design, clean code, and thoughtful UX.
        </p>
        <div className="grid gap-9 sm:grid-cols-2 py-9">
          <ProjectCard
            title="Personal Portfolio"
            description="A clean personal site built with Next.js and ShadCN."
            link="https://gunesteker.com"
          />
          <ProjectCard
            title="Fog Computing Prototype"
            description="Prototype exploring fog computing with simulated edge-to-cloud data processing focused on latency and bandwidth optimization."
            link="https://github.com/ygteker/FogComputingPrototype"
          />
          <ProjectCard
            title="E commerce prototype"
            description="A simple prototype of a food ordering website built with React. This project demonstrates component-based UI design, React Hooks, and state management fundamentals in a frontend application."
            link="https://github.com/ygteker/food-order-app"
          />
          <ProjectCard
            title="Coffee shop landing page"
            description="Landing page clone of a popular coffee brand to showcase front-end skills using HTML, CSS, and React."
            link="https://github.com/ygteker/coffee_shop_landing_page_clone"
          />
        </div>
      </Section>

      <Section id="contact" title="contact">
        <p>
          Reach out via <a href="mailto:gunes.teker@gmail.com" className="underline">email</a> or follow me on{" "}
          <a href="https://github.com/ygteker" className="underline">GitHub</a>.
        </p>
      </Section>

      <footer className="py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} gunes teker
      </footer>
    </>
  );
}

