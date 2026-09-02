type TextLinkProps = {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
};

export function TextLink({
  href,
  children,
  external = false,
  className = "",
}: TextLinkProps) {
  return (
    <a
      href={href}
      className={`text-accent underline-offset-4 transition-colors hover:text-accent-hover hover:underline ${className}`}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {children}
    </a>
  );
}
