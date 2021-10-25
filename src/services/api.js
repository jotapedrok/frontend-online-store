export async function getCategories() {
  const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const result = await response.json();
  return result;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const categoryAndQuery = categoryId && query;
  if (categoryAndQuery) {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
    const result = await response.json();
    return result;
  }
  const onlyCategory = categoryId && !query;
  if (onlyCategory) {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`);
    const result = await response.json();
    return result;
  }
  const onlyQuery = !categoryId && query;
  if (onlyQuery) {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
    const result = await response.json();
    return result;
  }
  return (
    {
      results: [],
    }
  );
}
