const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 sm:py-8 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
          <p className="text-muted-foreground text-xs sm:text-sm text-center sm:text-left">
            © {currentYear} Lukas Rieder. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs sm:text-sm text-center sm:text-right">
            Sound Engineer & Sound Designer
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
