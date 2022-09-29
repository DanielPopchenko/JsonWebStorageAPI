const book = {
  name: 'Охота на фазана',
  author: 'Марта Кэтра',
  genre: 'детектив',
  pageCount: 724,
  publisher: 'ООО Астрель',
};

/**
 * JSON.stringify()
 */

/**
 * Берем обьект и преобразовываем его в строку
 */
const stringifiedBook = JSON.stringify(book);
console.log(stringifiedBook);
/**
 * JSON.parse()
 * Берем полученную строку и преобразовываем ее в обьект
 */
const parsed = JSON.parse(stringifiedBook);
console.log(parsed);
