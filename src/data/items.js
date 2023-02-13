export const items = [
  {
    id: "0",
    name: "Metal Slug Advance",
    favorite: false,
  },
  { id: "1", name: "Super Mario Bross", favorite: true },
];

export function getContact(id) {
  return items.find((item) => item.id === id);
}
