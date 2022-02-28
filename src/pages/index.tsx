import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomepageHero from "../components/HomepageHero";
import {
  HomepageAction,
  HomepageActions,
} from "@site/src/components/HomepageActions";
import { MegaFooter } from "@site/src/components/MegaFooter";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - homepage`}
      description="NL Design System samenwerken aan componenten en richtlijnen voor een begrijpelijke, gebruiksvriendelijke én toegankelijke online dienstverlening"
    >
      <HomepageHero
        title="Het NL Design System"
        ctaLink="docs/algemeen/"
        cta="Aanpak community gedreven design system - 10min ⏱️"
      >
        {
          <>
            <p>
              Overheidsdienstverlening diene toegankelijk en begrijpelijk voor
              iedereen te zijn. Hiervoor zijn consistent ontworpen diensten en
              websites nodig.
            </p>
            <p>
              En daarom gaan we tussen overheidsorganisaties principes,
              interactiepatronen en code delen via een gezamenlijk design
              system. Het NL Design System draagt niet alleen bij aan
              gebruiksvriendelijkere diensten van een betere kwaliteit en
              toegankelijkheid. Het helpt ook dubbel werk te voorkomen.
            </p>
            <p>
              Het kernteam bestaat uit projectleider Angela Imhof, lead
              developer Robbert Broersma, front-end developer Yolijn van der
              Kolk en designer Rogier Barendregt.
            </p>
          </>
        }
      </HomepageHero>
      <main>
        <HomepageActions>
          <HomepageAction
            title="Meedoen als developer"
            href="docs/meedoen/als-developer/"
          >
            <p>
              Wil je als developer meehelpen aan de componenten te creëren om
              een digitaal product te bouwen?
            </p>
          </HomepageAction>
          <HomepageAction
            title="Meedoen als ontwerper"
            href="docs/meedoen/als-designer/"
          >
            <p>
              Wil je als ontwerper meedenken over de beste ervaring die het NL
              Design System de eindgebruikers biedt?
            </p>
          </HomepageAction>
          <HomepageAction
            title="Meedoen als product owner"
            href="docs/meedoen/als-product owner/"
          >
            <p>
              Wil met jouw product bijdragen of voldoen aan de richtlijnen van
              het NL Design System?
            </p>
          </HomepageAction>
          <HomepageAction
            title="Meedoen als copywriter"
            href="docs/meedoen/als-copywriter/"
          >
            <>
              <p>Weet je alles over het schrijven van goede teksten?</p>
              <p>
                Helpt het NL Design System de juiste richtlijnen voor tekst te
                documenteren.
              </p>
            </>
          </HomepageAction>
        </HomepageActions>
        <MegaFooter>
          <div>
            <h2>Over het NL Design System kernteam</h2>
            <p>Het kernteam bestaat uit projectleider Angela Imhof, lead developer Robbert Broersma, front-end developer Yolijn van der Kolk en designer Rogier Barendregt.</p>
            <ul>
              <li><a href="#">Meer over het kernteam</a>.</li>
              <li><a href="#">Meer over Gebruiker Centraal</a>.</li>
            </ul>
          </div>
          <div>
            <h2>Samenwerking</h2>
            <p>Het kernteam van het NL Design System werkt onder andere samen met de volgende organisaties:</p>
            <ul>
              <li>Gemeente Utrecht</li>
              <li>Gemeente Den Haag</li>
              <li>Logius</li>
            </ul>
          </div>
        </MegaFooter>
      </main>
    </Layout>
  );
}
