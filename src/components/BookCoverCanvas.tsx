interface BookCoverCanvasProps {
  title: string;
  author: string;
  color: string;
}

export default function BookCoverCanvas({ title, author, color }: BookCoverCanvasProps) {
  return (
    <div
      style={{
        width: 160,
        height: 220,
        background: color,
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: 12,
        color: '#fff',
        boxShadow: '0 10px 18px rgba(40, 30, 25, 0.12)',
      }}
    >
      <div style={{ fontWeight: 700, fontSize: 18, lineHeight: 1.2 }}>{title}</div>
      <div style={{ marginTop: 8, fontSize: 12, opacity: 0.9 }}>{author}</div>
    </div>
  )
}