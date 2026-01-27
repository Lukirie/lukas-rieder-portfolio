const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Lukas Rieder. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Sound Engineer & Sound Designer
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
