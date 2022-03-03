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
              De dienstverlening vanuit de overheid moet voor iedereen toegankelijk én begrijpelijk zijn, zo stelt de Agenda Digitale Overheid. Hiervoor is het nodig dat de diensten en websites vanuit de overheid consistent ontworpen zijn. Met het NL Design System verzamelen we beschrijvingen van principes, handvatten, elementen, patronen en richtlijnen. Hiermee willen we stimuleren dat alle overheidspartijen en leveranciers gebruik gaan maken van het NL Design System.
            </p>
            <p>
             Het kernteam van het NL Design System houdt de community actief en presenteert om de week de voortgang tijdens de <a href="https://www.gebruikercentraal.nl/agenda/soort/nl-design-system/">Heartbeat-sessie</a>. Ons doel: samenwerken aan een begrijpelijke, gebruiksvriendelijke én toegankelijke online dienstverlening voor overheidsorganisaties.
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
              Ben je benieuwd hoe jij kunt bijdragen aan het NL Design System? Dit kan namelijk op vele manieren! <a href="docs/meedoen/">Lees hier hoe je meedoet</a>.
            </p>
          </HomepageTeaser>
          <HomepageTeaser
            title="Blijf op de hoogte"
            cta="Inschrijven op de nieuwsbrief"
            ctaLink="https://designsystem.gebruikercentraal.nl/nieuwsbrieven/"
          >
            <p>
              Wil jij niets missen over de ontwikkelingen van het NL Design System? <a href="https://designsystem.gebruikercentraal.nl/nieuwsbrieven/">Schrijf je dan in voor onze nieuwsbrief</a> of <a href="https://designsystem.gebruikercentraal.nl/blogs-nieuws/">neem een kijkje op onze blogpagina</a>.
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
              <Link class="mega-footer-link" to="docs/over">Meer over het kernteam</Link>.
            </p>
            <p>
              <Link class="mega-footer-link" to="https://gebruikercentraal.nl">Meer over Gebruiker Centraal</Link>.
            </p>
          </div>
          <div>
            <h2>Samenwerking</h2>
            <p>
              Het kernteam van het NL Design System werkt onder andere samen met de volgende organisaties:
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
