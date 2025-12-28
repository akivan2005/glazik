export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      {/* App Navbar goes here */}
      {children}
    </div>
  )
}
