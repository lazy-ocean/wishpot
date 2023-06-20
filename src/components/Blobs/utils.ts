export const placeItemsOnMatrix = (numItems): { x: number; y: number }[] => {
  const items: { x: number; y: number }[] = [];

  const minDistance = 20;

  while (items.length < numItems) {
    const x = Math.floor(Math.random() * 100);
    const y = Math.floor(Math.random() * 100);

    let isValid = true;

    for (const item of items) {
      const distance = Math.sqrt((x - item.x) ** 2 + (y - item.y) ** 2);

      if (distance < minDistance) {
        isValid = false;
        break;
      }
    }

    if (isValid) items.push({ x, y });
  }

  return items;
};

export const getRandomValue = (min: number, max: number) =>
  Math.random() * (max - min) + min;
