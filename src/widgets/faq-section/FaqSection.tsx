import { FaqItem } from '@/entities/faq-item';
import { getFaq } from '@/shared/api/faq';
import s from './FaqSection.module.scss';

export const FaqSection = async () => {
  const faqs = await getFaq();

  if (!faqs || faqs.length === 0) {
    return null;
  }

  return (
    <div className={s.container}>
      <h2 className="h2">Ответы на часто задаваемые вопросы</h2>

      <div className={s.list}>
        {faqs.map((faq) => (
          <FaqItem key={faq.id} faq={faq} />
        ))}
      </div>
    </div>
  );
};
