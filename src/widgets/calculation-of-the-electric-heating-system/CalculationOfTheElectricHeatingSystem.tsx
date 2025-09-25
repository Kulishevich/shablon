import React from 'react';
import s from './styles.module.scss';
import clsx from 'clsx';
import { Button } from '@/shared/ui/button';
import { FeedbackPopup } from '../feedback-popup/FeedbackPopup';
import { getCardsBlock } from '@/shared/api/main-blocks/getCardsBlock';
import { parseHtmlToTitleTextSSR } from '@/shared/lib/parseHtmlToTitleText';

interface CalculationOfTheElectricHeatingSystemProps {
  image: string;
}

interface CardItem {
  id: string;
  title: string;
  text: string;
}

export const CalculationOfTheElectricHeatingSystem = async ({
  image,
}: CalculationOfTheElectricHeatingSystemProps) => {
  const cardsBlock = await getCardsBlock();

  const cardItems: CardItem[] =
    (cardsBlock &&
      [
        { id: '1', html: cardsBlock.fields?.card_1?.html || '' },
        { id: '2', html: cardsBlock.fields?.card_2?.html || '' },
        { id: '3', html: cardsBlock.fields?.card_3?.html || '' },
        { id: '4', html: cardsBlock.fields?.card_4?.html || '' },
      ]
        .map((card) => ({
          id: card.id,
          ...parseHtmlToTitleTextSSR(card.html),
        }))
        .filter((card) => card.title || card.text)) ||
    [];

  return (
    <div className={s.container}>
      <div className={s.firstBlock}>
        <div dangerouslySetInnerHTML={{ __html: cardsBlock?.fields?.text?.html || '' }} />
        <FeedbackPopup image={image}>
          <Button className={s.btn}>
            <div
              dangerouslySetInnerHTML={{ __html: cardsBlock?.fields?.['button-text']?.html || '' }}
            />
          </Button>
        </FeedbackPopup>
      </div>

      <div className={s.secondBlock}>
        {cardItems.map((item) => (
          <div key={item.id} className={s.card}>
            <div className={s.card__header}>
              <p className={clsx(s.card__number, 'h5')}>{item.id}</p>
              <p className={clsx(s.card__title, 'h5')}>{item.title}</p>
            </div>

            <p className={'body_4'}>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
