import { Typography } from '@/shared/ui/typography';
import { Button } from '@/shared/ui/button';
import Link from 'next/link';
import { paths } from '@/shared/config/constants/paths';
import s from './page.module.scss';

export default function NotFound() {
  return (
    <div className={s.error}>
      <Typography>404</Typography>
      <div>
        <Typography variant="h2">Что-то пошло не так...</Typography>
        <Typography variant="body_1">
          К сожалению, страница не найдена. Возможно, она была удалена или
          Вы ввели некорректный адрес (ошибка 404).
        </Typography>
        <Button as={Link} href={paths.home}>
          Вернуться на главную
        </Button>
      </div>
    </div>
  );
}
