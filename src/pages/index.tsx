import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomepageHero from "../components/HomepageHero";
import { HomepageActions } from "@site/src/components/HomepageActions";
import { HomepageAction } from "@site/src/components/HomepageAction";
import { HomepageTeasers } from "@site/src/components/HomepageTeasers";
import { HomepageTeaser } from "@site/src/components/HomepageTeaser";
import { HomepageFooter } from "@site/src/components/HomepageFooter";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - homepage`}
      description="NL Design System samenwerken aan componenten en richtlijnen voor een begrijpelijke, gebruiksvriendelijke én toegankelijke online dienstverlening"
    >
      <HomepageHero
        title="Over het NL Design System"
        ctaLink="docs/over/"
        cta="Meer over het NL Design System"
      >
        {
          <>
            <p>
              De Agenda Digitale Overheid stelt dat overheidsdienstverlening
              toegankelijk en begrijpelijk moet zijn voor iedereen. Hiervoor
              zijn consistent ontworpen diensten en websites nodig.
            </p>
            <p>
              Daarom delen we tussen overheidsorganisaties principes, interactiepatronen
              en code via een gezamenlijk design system. Dit NL Design
              System draagt niet alleen bij aan gebruiksvriendelijkere diensten
              van een betere kwaliteit en toegankelijkheid. Het helpt ook dubbel
              werk te voorkomen.
            </p>
          </>
        }
      </HomepageHero>
      <main>
        <HomepageActions>
          <HomepageAction title="Documentatie" href="docs/documentatie/">
            <p>Richtlijnen over onder meer taalgebruik, toegankelijkheid en inclusie.</p>
          </HomepageAction>
          <HomepageAction title="Patronen" href="docs/patronen/">
            <p>Oplossingen voor veelvoorkomende problemen en herhalende klantreizen.</p>
          </HomepageAction>
          <HomepageAction title="Componenten" href="docs/componenten/">
            <p>Kant en klare, geteste componenten om digitale producten mee te maken.</p>
          </HomepageAction>
          <HomepageAction title="Voorbeelden" href="docs/voorbeelden/">
            <p>Voorbeeld applicaties gemaakt met richtlijnen en componenten uit het NL Design System.</p>
          </HomepageAction>
        </HomepageActions>
        <HomepageTeasers>
          <HomepageTeaser
            title="Meedoen"
            cta="Ik wil meedoen"
            ctaLink="docs/meedoen/"
          >
            <p>
              Wil je meedoen aan het NL Design System? Dat kan op diverse manieren! <a href="docs/meedoen/">Kijk op onze speciale pagina hoe je mee kunt doen</a>.
            </p>
          </HomepageTeaser>
          <HomepageTeaser
            title="Blijf op de hoogte"
            cta="Inschrijven op de nieuwsbrief"
            ctaLink="https://designsystem.gebruikercentraal.nl/nieuwsbrieven/"
          >
            <p>
              Wil je op de hoogte blijven van ontwikkelingen omtrent het NL Design System? Schrijf je dan in voor onze nieuwsbrief en <a href="https://designsystem.gebruikercentraal.nl/blogs-nieuws/">kijk op ons blog</a>!
            </p>
          </HomepageTeaser>
        </HomepageTeasers>
        <HomepageFooter>
          <div>
            <h2>Over het kernteam</h2>
            <p>
              Het kernteam bestaat uit projectleider Angela Imhof, lead
              developer Robbert Broersma, front-end developer Yolijn van der
              Kolk en designer Rogier Barendregt.
            </p>
            <p>
              <Link to="docs/over">Meer over het kernteam.</Link>
            </p>
            <p>
              <Link to="https://gebruikercentraal.nl">
                Meer over Gebruiker Centraal.
              </Link>
            </p>
          </div>
          <div>
            <h2>Samenwerking</h2>
            <p>
              Het kernteam van het NL Design System werkt onder andere samen met
              de volgende organisaties:
            </p>
            <ul>
              <li>Gemeente Den Haag</li>
              <li>Gemeente Utrecht</li>
              <li>Logius</li>
            </ul>
          </div>
        </HomepageFooter>
      </main>
    </Layout>
  );
}
