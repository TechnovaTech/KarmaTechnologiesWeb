export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-foreground mb-4">404 - Page Not Found</h1>
        <p className="text-muted-foreground mb-8">The page you're looking for doesn't exist.</p>
        <a href="/" className="px-6 py-3 bg-primary text-primary-foreground font-semibold hover:bg-accent transition-colors">
          Go Home
        </a>
      </div>
    </div>
  )
}