export const DEFAULT_PRICE = 0;

function productRow(name, price = DEFAULT_PRICE) {
  return `<div>
    <span>${name}</span>
    <span>$${price}</span>
  </div>`;
}

export default productRow;