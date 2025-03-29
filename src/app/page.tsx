'use client';
import { Pagination } from '@/shared/ui/pagination';
import s from './page.module.scss';
import { Checkbox } from '@/shared/ui/checkbox';
import { TextField } from '@/shared/ui/text-field';
import { Typography } from '@/shared/ui/typography';
import { Button } from '@/shared/ui/button';
import {
  ArrowLeftIcon,
  ArrowRightUpIcon,
  ArrowSmLeftIcon,
  BurgerIcon,
  ShoppingCartIcon,
} from '@/shared/assets';
import { ProductCard } from '@/entities/product-card';
import { NewsCard } from '@/entities/news-card';
import { FeedbackForm } from '@/entities/feedback-form';

export default function Home() {
  return (
    <div className={s.page}>
      <FeedbackForm/>
      <NewsCard/>
      <ProductCard/>
      <Typography variant="h1">Headline 1</Typography>
      <Typography variant="h1_discount">Headline 1</Typography>
      <Typography variant="h2">Headline 1</Typography>
      <Typography variant="h3">Headline 1</Typography>
      <Typography variant="h4">Headline 1</Typography>
      <Typography variant="h5">Headline 1</Typography>
      <Typography variant="h6">Headline 1</Typography>
      <Typography variant="body_1">Headline 1</Typography>
      <Typography variant="body_1" isRequired={true}>
        Headline 1
      </Typography>
      <Typography variant="body_2">Headline 1</Typography>
      <Typography variant="body_3">Headline 1</Typography>
      <Typography variant="body_4">Headline 1</Typography>
      <Typography variant="body_5">Headline 1</Typography>
      <Typography variant="body_6">Headline 1</Typography>
      <Typography variant="body_7">Headline 1</Typography>
      <Typography variant="button">Headline 1</Typography>
      <Typography variant="placeholder">Headline 1</Typography>
      <Typography variant="discount">Headline 1</Typography>
      <Button variant="burger">
        <BurgerIcon />
        Каталог
      </Button>
      <Button variant="burger" disabled={true}>
        <BurgerIcon />
        Каталог
      </Button>
      <Button variant="primary">Перейти в каталог</Button>
      <Button variant="primary" disabled={true}>
        Перейти в каталог
      </Button>
      <Button variant="secondary">Применить</Button>
      <Button variant="secondary" disabled={true}>
        Применить
      </Button>
      <Button variant="icon_1">
        <ArrowLeftIcon />
      </Button>
      <Button variant="icon_1" disabled={true}>
        <ArrowLeftIcon />
      </Button>
      <Button variant="icon_2">
        <ArrowLeftIcon />
      </Button>
      <Button variant="icon_2" disabled={true}>
        <ArrowLeftIcon />
      </Button>
      <Button variant="link">
        Подробнее
        <ArrowRightUpIcon />
      </Button>
      <Button variant="link" disabled={true}>
        Подробнее
        <ArrowRightUpIcon />
      </Button>

      <Button variant="link">
        <ArrowSmLeftIcon /> Назад к новостям
      </Button>
      <Button variant="link" disabled={true}>
        <ArrowSmLeftIcon /> Назад к новостям
      </Button>

      <Button variant="icon_outlined">
        <ShoppingCartIcon />
      </Button>
      <Button variant="icon_outlined" disabled={true}>
        <ShoppingCartIcon />
      </Button>

      <TextField placeholder="Введите ваше имя" />
      <TextField placeholder="Введите ваше имя" disabled={true} />

      <TextField placeholder="Поиск по сайту" variant="search" />
      <TextField
        placeholder="Поиск по сайту"
        variant="search"
        disabled={true}
      />

      <Checkbox />
      <Checkbox />
      <Checkbox disabled={true} />
      <Checkbox disabled={true} />

      <Pagination totalPages="10" />
    </div>
  );
}
