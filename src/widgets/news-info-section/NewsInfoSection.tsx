import React from 'react';
import s from './NewsInfoSection.module.scss';
import { Typography } from '@/shared/ui/typography';
import Image from 'next/image';
import { Button } from '@/shared/ui/button';
import { ArrowSmLeftIcon } from '@/shared/assets';
import Link from 'next/link';
import { paths } from '@/shared/config/constants/paths';

export const NewsInfoSection = () => {
  return (
    <div className={s.container}>
      <div className={s.title}>
        <div>
          <Typography variant="tag" as="span">
            12.02.2025
          </Typography>
          <Typography variant="h1">
            Фурнитура для мебели: как выбрать?
          </Typography>
        </div>
        <Image src={'/news.png'} width={636} height={457} alt="new" />
      </div>
      <div className={s.content}>
        <div className={s.info}>
          <div className={s.elem}>
            <Typography variant="h5">
              Мебельная фурнитура — это те вспомогательные аксессуары
              и материалы, которые применяются при производстве мебели. Задача
              фурнитуры — обеспечить декоративный и вспомогательный эффект.
            </Typography>
            <Typography variant="body_2">
              Мебельная фурнитура — это комплектующие, предназначенные для
              сборки, украшения и обеспечения функциональности предметов мебели.
              Это уголки, петли, ручки, ножки и другие элементы. Эти детали
              изготавливаются из металла, пластмассы, дерева и других материалов
              и делятся условно на две большие категории:
              <ul>
                <Typography variant="body_2" as="li">
                  крепёжная фурнитура
                </Typography>
                <Typography variant="body_2" as="li">
                  лицевая фурнитура
                </Typography>
              </ul>
            </Typography>
          </div>

          <div className={s.elem}>
            <Typography variant="h3">Виды крепёжной фурнитуры</Typography>
            <Typography variant="body_2">
              Составные детали любого предмета мебели скреплены между собой.
              Такое соединение обеспечивается с помощью крепёжной фурнитуры. Оно
              может быть жёстким для создания надёжного каркаса, или подвижным,
              если речь идёт о выдвижных элементах или дверях. Также крепёжная
              фурнитура позволяет зафиксировать мебель относительно стены или
              пола и таким образом минимизировать риск её падения. Правильно
              подобранный крепёж — едва ли не важнейшая составляющая надёжности
              вашей мебели.
            </Typography>
          </div>

          <div className={s.infoCard}>
            <Image
              src={'/news-info-card.png'}
              width={314}
              height={204}
              alt={'news-info'}
            />
            <div>
              <Typography variant="h5"> Мебельные уголки</Typography>
              <Typography variant="placeholder">
                Мебельный уголок — простой и универсальный элемент, который
                может использоваться для жёсткого крепления частей мебели между
                собой. Уголки применяются для сборки самых различных конструкций
                — тумбочек, диванов, кресел, шкафов и т.д. Также очень часто
                этот тип фурнитуры используют, чтобы повесить полку или
                прикрепить шкаф к стене.
              </Typography>
            </div>
          </div>

          <div className={s.elem}>
            <Typography variant="h3">Конфирмат</Typography>
            <Typography variant="body_2">
              Конфирмат (еврошуруп, евровинт) — это специальный шуруп для
              плотной стяжки щитов корпусной мебели (шкафов, полок, тумбочек),
              которые расположены перпендикулярно друг относительно друга. Он
              обладает особой глубокой и редкой резьбой и отлично работает с
              деталями из дерева, ДСП и МДФ. Его потайная шляпка позволяет
              стыковать несколько собранных элементов мебели вплотную друг с
              другом. Конфирматное соединение надёжно и выдерживает высокие
              нагрузки.
            </Typography>
          </div>
        </div>
        <Button variant="link" as={Link} href={paths.news}>
          <ArrowSmLeftIcon /> Назад к новостям
        </Button>
      </div>
    </div>
  );
};
