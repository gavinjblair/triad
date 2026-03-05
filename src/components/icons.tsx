import type { SVGProps } from "react";

export function ChevronDown(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function SearchIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path
        d="M8.75 15.5a6.75 6.75 0 1 1 0-13.5 6.75 6.75 0 0 1 0 13.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M13.6 13.6 18 18"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function UserIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path
        d="M10 10.5a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M3.5 18c.9-3 3.4-5 6.5-5s5.6 2 6.5 5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function MenuIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CloseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6 6l12 12M18 6 6 18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SupportTicketIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="3.5" y="4.5" width="17" height="15" rx="2.3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 11.5h8M8 15h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M6.5 8h1.5M10 8h1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function DemoWindowIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="3.5" y="4.5" width="17" height="15" rx="2.3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3.5 9.5h17" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="7" cy="7" r=".9" fill="currentColor" />
      <circle cx="10" cy="7" r=".9" fill="currentColor" />
      <path d="M11.5 13.5 15.5 15.8V11.2l-4 2.3Z" fill="currentColor" />
    </svg>
  );
}

export function GearIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="m12 3.8 1.6.4.7 1.6 1.7-.2 1.2 1.2-.2 1.7 1.6.7.4 1.6-1.3 1.1v1.8l1.3 1.1-.4 1.6-1.6.7.2 1.7-1.2 1.2-1.7-.2-.7 1.6-1.6.4-1.1-1.3H11l-1.1 1.3-1.6-.4-.7-1.6-1.7.2-1.2-1.2.2-1.7-1.6-.7-.4-1.6L4 13.6v-1.8l-1.3-1.1.4-1.6 1.6-.7-.2-1.7 1.2-1.2 1.7.2.7-1.6L9.9 3.8 11 5h2l1-1.2Z"
        stroke="currentColor"
        strokeWidth="1.3"
      />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

export function PhoneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.8 5.3c.4-.8 1.3-1.2 2.1-1l2.3.5c.7.2 1.2.7 1.3 1.4l.2 2.1c.1.6-.2 1.2-.7 1.5l-1.3.9a14.4 14.4 0 0 0 4.6 4.6l.9-1.3c.4-.5 1-.8 1.6-.7l2 .2c.7.1 1.3.6 1.4 1.3l.6 2.3c.2.9-.2 1.7-1 2.1l-1.2.6c-1.2.5-2.5.6-3.8.2A16.8 16.8 0 0 1 4.1 9.7c-.4-1.3-.3-2.6.2-3.8l.5-1.1Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  );
}

export function MailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2.3" stroke="currentColor" strokeWidth="1.5" />
      <path d="m4.5 7 7.5 6 7.5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function PlayCircleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path d="m10 8 6 4-6 4V8Z" fill="currentColor" />
    </svg>
  );
}

export function DollarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M12 4v16M15.5 7.2c-1-.9-2.2-1.2-3.5-1.2-2 0-3.5 1-3.5 2.7 0 1.4 1 2.2 2.9 2.6l1.6.3c2 .4 3 1.2 3 2.8 0 1.9-1.6 3.1-4 3.1-1.6 0-3-.4-4-1.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function PoundIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M15.8 6.8c-1-.9-2.2-1.3-3.7-1.3-2.6 0-4.3 1.7-4.3 4.2 0 1 .3 2 .9 2.9H6.5m6.8 0H6.5m1.7 0c.7 1.1 1 2.1 1 3.1 0 .9-.2 1.8-.7 2.7h8.8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CartIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M4 5h2l2 10h10l2-7H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="10" cy="18.2" r="1.2" fill="currentColor" />
      <circle cx="17.5" cy="18.2" r="1.2" fill="currentColor" />
    </svg>
  );
}

export function GlobeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3.5 12h17M12 3.5c2.4 2.4 3.5 5.3 3.5 8.5s-1.1 6.1-3.5 8.5m0-17c-2.4 2.4-3.5 5.3-3.5 8.5s1.1 6.1 3.5 8.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export function UserAvatarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="8.5" r="4" fill="currentColor" />
      <path d="M4 20c1.2-3.3 4-5.3 8-5.3 4 0 6.8 2 8 5.3" fill="currentColor" />
    </svg>
  );
}
