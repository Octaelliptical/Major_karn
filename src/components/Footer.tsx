export function Footer() {
  return (
    <footer className="bottom-0 w-full bg-[#FFFAEC] z-50 py-8 border-t-2 border-black">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center">
          <div className="text-sm text-gray-800">
            © {new Date().getFullYear()} Mind Mentor. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}