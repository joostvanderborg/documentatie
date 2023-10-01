import React, { CSSProperties } from 'react';
import { issues } from './issues';
import style from './cards.module.css';
import clsx from 'clsx';
import { Heading1, Heading2, Icon } from '@utrecht/component-library-react';
import { QRCode } from '@site/src/components/QRCode';

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

interface BingoCardProps {
  issues: typeof issues;
  columns: number;
  rows: number;
}

const BingoCard = ({ issues, columns, rows }: BingoCardProps) => {
  const cardIssues = shuffleArray([...issues]);
  const bingoItems = cardIssues.splice(0, columns * rows);

  return (
    <section className={clsx(style['bingo-card'])}>
      <Heading1 className={clsx(style['logo'])}>
        <img
          src="https://raw.githubusercontent.com/nl-design-system/documentatie/assets/logo.svg"
          alt="nlds logo"
          className={clsx(style['logo__image'])}
        />
        NL Design System
      </Heading1>
      <div className={clsx(style['bingo-card__bingo'])}>
        <Heading2 className={clsx(style['bingo-card__title'])}>Foute Formulieren Bingo!</Heading2>
        <div
          className={clsx(style['bingo-card__grid'])}
          role="grid"
          style={{ '--bingo-card-grid-columns': columns } as CSSProperties}
        >
          {bingoItems.map(({ number, label }) => (
            <div role="gridcell" className={clsx(style['bingo-card__cell'])}>
              <p className={clsx(style['bingo-card__cell-number'])}>{number}</p>
              <p className={clsx(style['bingo-card__cell-label'])}>{label}</p>
            </div>
          ))}
        </div>
        <p className={clsx(style['url'])}>
          https://nldesignsystem.nl{' '}
          <Icon className={clsx(style['url__qr'])}>
            <QRCode />
          </Icon>
        </p>
      </div>
    </section>
  );
};

export const BingoCards = () => {
  const players = 20;
  const columns = 3;
  const rows = 3;

  return (
    <div id="results">
      {Array(players)
        .fill(0)
        .map((_, index) => (
          <BingoCard issues={issues} columns={columns} rows={rows} key={index} />
        ))}
    </div>
  );
};

export default BingoCards;
