export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>© {year} Florentimo Flower Shop. All rights reserved.</p>
      </div>
    </footer>
  )
}

