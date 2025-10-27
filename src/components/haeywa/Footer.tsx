
export default function Footer() {
  return (
    <footer className="bg-muted py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} haeywa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
