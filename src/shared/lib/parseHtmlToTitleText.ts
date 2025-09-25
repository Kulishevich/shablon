/**
 * Парсит HTML строку и извлекает title из тега <strong> и text из тега <p>
 * @param htmlString - HTML строка для парсинга
 * @returns Объект с полями title и text
 */
export interface ParsedHtmlData {
  title: string;
  text: string;
}

export const parseHtmlToTitleText = (htmlString: string): ParsedHtmlData => {
  if (!htmlString) {
    return { title: '', text: '' };
  }

  // Создаем временный DOM элемент для парсинга HTML
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = htmlString;

  // Извлекаем содержимое тега <strong> для title
  const strongElement = tempDiv.querySelector('strong');
  const title = strongElement?.textContent?.trim() || '';

  // Извлекаем все теги <p> и берем текст из тех, которые не содержат <strong>
  const pElements = tempDiv.querySelectorAll('p');
  let text = '';

  for (const p of pElements) {
    // Если параграф не содержит strong тег, берем его текст
    if (!p.querySelector('strong')) {
      text = p.textContent?.trim() || '';
      break;
    }
  }

  // Если не нашли параграф без strong, берем весь текст кроме strong
  if (!text && pElements.length > 0) {
    const allText = tempDiv.textContent?.trim() || '';
    text = allText.replace(title, '').trim();
  }

  return { title, text };
};

/**
 * Server-side версия функции парсинга (без использования DOM API)
 * Использует регулярные выражения для извлечения данных
 */
export const parseHtmlToTitleTextSSR = (htmlString: string): ParsedHtmlData => {
  if (!htmlString) {
    return { title: '', text: '' };
  }

  // Извлекаем содержимое тега <strong>
  const strongMatch = htmlString.match(/<strong[^>]*>(.*?)<\/strong>/i);
  const title = strongMatch ? strongMatch[1].trim() : '';

  // Извлекаем содержимое параграфов, исключая те, что содержат <strong>
  const pMatches = htmlString.match(/<p[^>]*>(.*?)<\/p>/gi);
  let text = '';

  if (pMatches) {
    for (const pMatch of pMatches) {
      // Если параграф не содержит тег <strong>
      if (!pMatch.includes('<strong>')) {
        const textMatch = pMatch.match(/<p[^>]*>(.*?)<\/p>/i);
        if (textMatch) {
          text = textMatch[1].trim();
          break;
        }
      }
    }
  }

  // Если не нашли подходящий параграф, используем весь текст без HTML тегов
  if (!text) {
    text = htmlString.replace(/<[^>]*>/g, '').replace(title, '').trim();
  }

  return { title, text };
};
