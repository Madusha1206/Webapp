export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-4 h-16 flex items-center justify-center text-gray-500 text-sm">
        © {year} Florentimo Flower Shop. All rights reserved.
      </div>
    </footer>
  )
}
