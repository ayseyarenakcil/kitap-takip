import './App.css'

const navItems = [
  { label: 'Ana Sayfa', icon: '⌂', active: true },
  { label: 'Kitaplarım', icon: '▣' },
  { label: 'Okuma Listem', icon: '☰' },
  { label: 'Okuduklarım', icon: '✓' },
  { label: 'İstatistikler', icon: '◫' },
  { label: 'Alıntılarım', icon: '✦' },
  { label: 'Yazarlar', icon: '◌' },
  { label: 'Kategoriler', icon: '◫' },
]

const stats = [
  { label: 'Okuduğun Kitap', value: '12', icon: '📖', detail: 'Toplam', tone: 'peach' },
  { label: 'Okumakta Olduğun', value: '5', icon: '◔', detail: 'Devam et', tone: 'blue' },
  { label: 'Okuma Listem', value: '8', icon: '☰', detail: 'Sıradaki', tone: 'green' },
  { label: 'Alıntıların', value: '23', icon: '★', detail: 'İlham verici', tone: 'rose' },
]

const currentBooks = [
  { title: 'Kuyucaklı Yusuf', author: 'Sabahattin Ali', progress: 40, gradient: 'book-book-1' },
  { title: 'Seﬁller', author: 'Victor Hugo', progress: 65, gradient: 'book-book-2' },
  { title: 'Sımyacı', author: 'Paulo Coelho', progress: 20, gradient: 'book-book-3' },
  { title: '1984', author: 'George Orwell', progress: 50, gradient: 'book-book-4' },
]

const finishedBooks = [
  { title: 'Kürk Mantolu Madonna', author: 'Sabahattin Ali', gradient: 'book-finish-1' },
  { title: 'Suç ve Ceza', author: 'Dostoyevski', gradient: 'book-finish-2' },
  { title: 'Martin Eden', author: 'Jack London', gradient: 'book-finish-3' },
  { title: 'Hayvan Çiftliği', author: 'George Orwell', gradient: 'book-finish-4' },
]

export default function App() {
  return (
    <div className="page-shell">
      <aside className="sidebar">
        <div className="brand-block">
          <div className="brand-icon">📖</div>
          <div className="brand-copy">
            <span className="brand-title">Kitap Takip</span>
            <span className="brand-subtitle">Oku, Keşfet, Takip Et</span>
          </div>
        </div>

        <nav className="nav-menu" aria-label="Ana menü">
          {navItems.map(({ label, icon, active }) => (
            <button key={label} className={`nav-item ${active ? 'active' : ''}`} type="button">
              <span className="nav-icon">{icon}</span>
              <span>{label}</span>
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
          <div className="profile-box">
            <div className="avatar">A</div>
            <div className="profile-text">
              <strong>Ayşe Yaren</strong>
              <span>ayseyaren@example.com</span>
            </div>
            <span className="caret">⌄</span>
          </div>
        </div>
      </aside>

      <main className="main-panel">
        <header className="topbar">
          <div>
            <h2>Hoş geldin, Ayşe! <span className="wave">😊</span></h2>
            <p>“Okumak, ruhun gıdasıdır.”</p>
          </div>

          <div className="topbar-actions">
            <div className="search-box">
              <span className="search-icon">⌕</span>
              <input type="text" placeholder="Kitap, yazar veya kategori ara..." aria-label="Arama" />
            </div>
            <button type="button" className="icon-button" aria-label="Bildirimler">
              🔔
            </button>
          </div>
        </header>

        <section className="stats-grid">
          {stats.map(({ label, value, icon, detail, tone }) => (
            <article key={label} className={`stat-card ${tone}`}>
              <div className="stat-icon">{icon}</div>
              <div className="stat-value">{value}</div>
              <div className="stat-label">{label}</div>
              <div className="stat-detail">{detail}</div>
            </article>
          ))}
        </section>

        <div className="content-grid">
          <section className="books-panel">
            <div className="section-header">
              <h3>Okumakta Olduklarım</h3>
              <button type="button">Tümünü Gör →</button>
            </div>

            <div className="book-grid">
              {currentBooks.map(({ title, author, progress, gradient }) => (
                <article key={title} className="book-card">
                  <div className={`book-cover ${gradient}`}>
                    <span className="cover-ornament" />
                  </div>
                  <h4>{title}</h4>
                  <p>{author}</p>
                  <div className="progress-bar">
                    <span style={{ width: `${progress}%` }} />
                  </div>
                </article>
              ))}
            </div>
          </section>

          <aside className="goal-panel">
            <div className="section-header compact">
              <h3>Bu Ayki Okuma Hedefin</h3>
            </div>

            <div className="goal-ring" aria-label="Okuma hedefi yüzde altmış">
              <div className="goal-ring-inner">
                <span>%60</span>
              </div>
            </div>

            <div className="goal-meta">
              <span>Hedef: 5 kitap</span>
              <span>Tamamlanan: 3 kitap</span>
            </div>

            <button type="button" className="goal-button">Hedefini Güncelle</button>
          </aside>
        </div>

        <div className="bottom-grid">
          <section className="books-panel secondary">
            <div className="section-header">
              <h3>Son Okuduklarım</h3>
              <button type="button">Tümünü Gör →</button>
            </div>

            <div className="book-grid small-grid">
              {finishedBooks.map(({ title, author, gradient }) => (
                <article key={title} className="book-card">
                  <div className={`book-cover ${gradient}`}>
                    <span className="cover-ornament" />
                  </div>
                  <h4>{title}</h4>
                  <p>{author}</p>
                </article>
              ))}
            </div>
          </section>

          <aside className="quote-panel">
            <div className="quote-box">
              <span className="quote-mark">“</span>
              <p>
                İnsan nelye yaşar, diye sordu <br />
                küçük bir çocuk. <br />
                <strong>“Bir çiçekle…”</strong> dedi tıkı. <br />
                — Antoine de Saint-Exupéry
              </p>
            </div>

            <button type="button" className="quote-button">Tüm Alıntılarım</button>

            <div className="book-illustration" aria-hidden="true">
              <span className="page page-left" />
              <span className="page page-right" />
              <span className="book-spine" />
            </div>
          </aside>
        </div>
      </main>
    </div>
  )
}

