import { ProductMaskT } from '@/shared/api/meta-tags/types';
import { ProductT } from '@/shared/api/product/types';

/**
 * Заменяет шаблонные строки в полях ProductMaskT на соответствующие значения из продукта
 * 
 * @param mask - объект ProductMaskT с шаблонными строками
 * @param product - данные продукта для замены
 * @returns объект ProductMaskT с замененными значениями
 */
export const replaceProductMaskTemplates = (
  mask: ProductMaskT,
  product: ProductT
): ProductMaskT => {
  const replacements: Record<string, string> = {
    '{{Название товара}}': product.name,
    '{{Описание товара}}': product.description || '',
    '{{Цена товара}}': product.price || '0',
    '{{Скидка товара}}': product.discount || '0',
    '{{Бренд товара}}': product.brand?.name || '',
    '{{Категория товара}}': product.category?.name || '',
    '{{Артикул товара}}': product.sku || '',
  };

  const replaceTemplates = (text: string): string => {
    let result = text;
    Object.entries(replacements).forEach(([template, value]) => {
      result = result.replace(new RegExp(template.replace(/[{}]/g, '\\$&'), 'g'), value);
    });
    return result;
  };

  return {
    title: replaceTemplates(mask.title),
    description: replaceTemplates(mask.description),
    keywords: replaceTemplates(mask.keywords),
  };
};
