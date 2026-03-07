import type { NavItem } from "@/components/Header";
import { serviceNavigationItems } from "@/content/services";

export const topLinks: NavItem[] = [
  { label: "Supporting organisations across Edinburgh, Glasgow and Central Scotland.", href: "/contact" },
  { label: "0131 555 0123", href: "/contact" },
];

export const mainLinks: NavItem[] = [
  { label: "Overview", href: "/" },
  { label: "Services", href: "/services", children: serviceNavigationItems },
  { label: "Pricing", href: "/pricing" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
