import { Typography } from '@/shared/ui/typography';
import s from './DeliverySection.module.scss';
import { YandexMap } from '@/shared/ui/yandex-map/YandexMap';
import { Collapse } from '@/shared/ui/collapse';

export const DeliverySection = () => {
  return (
    <div className={s.wrapper}>
      <Typography variant="h1">Доставка и оплата</Typography>
      <Collapse title="Доставка">
        <div className={s.container}>
          <Typography variant="body_2">
            Если сумма вашего заказа превышает 150 рублей (с НДС), мы бесплатно
            доставим его на рабочее место в Минске и любом другом городе
            Беларуси. Если сумма меньше, доставка обойдется вам в 20 рублей.
            <br /> В рабочие дни доставка осуществляется с 9 до 18 часов.
          </Typography>
          <div className={s.deliveryArea}>
            <Typography variant="h5">Область доставки</Typography>
            <YandexMap type="area" className={s.map} />
          </div>
          <div className={s.info}>
            <Typography variant="body_2">
              Доставка Товара осуществляется Продавцом за свой счет и своими
              силами (может осуществляться с привлечением третьих лиц, но за
              счет Продавца).
            </Typography>
            <Typography variant="body_2">
              Минимальная сумма заказа для бесплатной доставки:
            </Typography>
            <Typography variant="body_2">
              в период с 06 часов 00 минут до 00 часов 30 минут не менее:
            </Typography>
            <ul className={s.list}>
              <Typography variant="body_2" as="li">
                69 (шестидесяти девяти) рублей для зон обслуживания Минск (зона
                А, А1); в период с 08 часов 00 минут до 00 часов 00 минут не
                менее:
              </Typography>
              <Typography variant="body_2" as="li">
                69 (шестидесяти девяти) рублей для зон обслуживания Минская
                область (зона Б); в период с 10 часов 00 минут до 22 часов 00
                минут не менее:
              </Typography>
              <Typography variant="body_2" as="li">
                79 (семидесяти девяти) рублей для всех иных зон обслуживания.
              </Typography>
            </ul>
          </div>
        </div>
      </Collapse>
      <Collapse title="Оплата">
        <div className={s.container}>
          <Typography variant="body_2">
            Если сумма вашего заказа превышает 150 рублей (с НДС), мы бесплатно
            доставим его на рабочее место в Минске и любом другом городе
            Беларуси. Если сумма меньше, доставка обойдется вам в 20 рублей. В
            рабочие дни доставка осуществляется с 9 до 18 часов.
          </Typography>
          <div className={s.deliveryArea}>
            <Typography variant="h5">Область доставки</Typography>
          </div>
          <div className={s.info}>
            <Typography variant="body_2">
              Доставка Товара осуществляется Продавцом за свой счет и своими
              силами (может осуществляться с привлечением третьих лиц, но за
              счет Продавца).
            </Typography>
            <Typography variant="body_2">
              Минимальная сумма заказа для бесплатной доставки:
            </Typography>
            <Typography variant="body_2">
              в период с 06 часов 00 минут до 00 часов 30 минут не менее:
            </Typography>
            <ul className={s.list}>
              <Typography variant="body_2" as="li">
                69 (шестидесяти девяти) рублей для зон обслуживания Минск (зона
                А, А1); в период с 08 часов 00 минут до 00 часов 00 минут не
                менее:
              </Typography>
              <Typography variant="body_2" as="li">
                69 (шестидесяти девяти) рублей для зон обслуживания Минская
                область (зона Б); в период с 10 часов 00 минут до 22 часов 00
                минут не менее:
              </Typography>
              <Typography variant="body_2" as="li">
                79 (семидесяти девяти) рублей для всех иных зон обслуживания.
              </Typography>
            </ul>
          </div>
        </div>
      </Collapse>
    </div>
  );
};
