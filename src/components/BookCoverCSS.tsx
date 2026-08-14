import './BookCoverCSS.css';

interface BookCoverProps {
  title: string;
  author: string;
  color: string;
}

export function BookCoverCSS({ title, author, color }: BookCoverProps) {
  return (
    <div className="book-cover" style={{ backgroundColor: color }}>
      <h2 className="book-title">{title}</h2>
      <p className="book-author">{author}</p>
    </div>
  );
}
