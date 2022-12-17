export default function Center({ children = [] }) {
  return [
    '<div style="text-align: center">',
    ...children,
    '</div>',
  ];
}
