import clsx from 'clsx';
import s from './YandexMap.module.scss';

type YandexMapProps = {
  className?: string;
  type: 'default' | 'area';
};

export const YandexMap = ({ className, type = 'default' }: YandexMapProps) => {
  return type === 'area' ? (
    <iframe
      src="https://yandex.ru/map-widget/v1/?um=constructor%3A1b05bb4aaa2d91b5058ee3f3b66d98e0ca4d2f5025c525288a69c012bf42cd55&amp;source=constructor"
      className={clsx(s.map, className)}
      width="100%"
    />
  ) : (
    <div className={clsx(s.mapContainer, className)}>
      <a
        href="https://yandex.by/maps/10262/yerevan/?utm_medium=mapframe&utm_source=maps"
        className={s.mapLink}
        style={{ top: '0px' }}
      >
        Ереван
      </a>
      <a
        href="https://yandex.by/maps/10262/yerevan/house/YE0YcwNjS0MOQFpqfX14cH9lZA==/?ll=44.543269%2C40.191360&utm_medium=mapframe&utm_source=maps&z=16.61"
        className={s.mapLink}
        style={{ top: '14px' }}
      >
        Улица Серо Ханзадяна, 19/4 — Яндекс Карты
      </a>
      <iframe
        src="https://yandex.by/map-widget/v1/?ll=44.543269%2C40.191360&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgo0OTY0NTE1ODM2EkrVgNWh1bXVodW91b_VodW2LCDUtdaA1ofVodW2LCDVjdWl1oDVuCDUvdWh1bbVptWh1aTVtdWh1bYg1oPVuNWy1bjWgSwgMTkvNCIKDU4sMkIV9MMgQg%2C%2C&z=16.61"
        frameBorder="1"
        allowFullScreen={true}
        className={s.mapIframe}
      ></iframe>
    </div>
  );
};
