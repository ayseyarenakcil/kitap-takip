interface BookCoverProps {
  title: string;
  author: string;
  color: string;
}

export function BookCoverSVG({ title, author, color }: BookCoverProps) {
  return (
    <svg width="200" height="300" viewBox="0 0 200 300" style={{ border: '2px solid #333', borderRadius: '4px' }}>
      <rect width="200" height="300" fill={color} />
      <rect x="5" y="5" width="190" height="290" fill="none" stroke="#fff" strokeWidth="2" />
      <text x="100" y="140" textAnchor="middle" fill="#fff" fontSize="18" fontWeight="bold">
        {title}
      </text>
      <text x="100" y="260" textAnchor="middle" fill="#fff" fontSize="14">
        {author}
      </text>
    </svg>
  );
}
