import Link, { type LinkProps } from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "sm";

const variantClass: Record<Variant, string> = {
  primary: "msp-btn-primary",
  secondary: "msp-btn-secondary",
  ghost: "msp-btn-ghost",
};

const sizeClass: Record<Size, string> = {
  md: "h-[50px] px-8 text-[17px]",
  sm: "h-[48px] px-6 text-[14px]",
};

type BaseProps = {
  variant?: Variant;
  size?: Size;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
};

type ButtonAsButtonProps = BaseProps &
  ComponentPropsWithoutRef<"button"> & { href?: undefined };

type ButtonAsLinkProps = BaseProps &
  Omit<ComponentPropsWithoutRef<"a">, "href"> &
  LinkProps & { href: LinkProps["href"] };

function isLinkButton(
  props: ButtonAsButtonProps | ButtonAsLinkProps,
): props is ButtonAsLinkProps {
  return typeof (props as ButtonAsLinkProps).href !== "undefined";
}

export function Button(props: ButtonAsButtonProps | ButtonAsLinkProps) {
  const content = (leftIcon: ReactNode, children: ReactNode, rightIcon: ReactNode) => (
    <>
      {leftIcon ? <span className="-ml-1">{leftIcon}</span> : null}
      <span>{children}</span>
      {rightIcon ? <span className="-mr-1">{rightIcon}</span> : null}
    </>
  );

  if (isLinkButton(props)) {
    const {
      variant = "primary",
      size = "md",
      leftIcon,
      rightIcon,
      className,
      children,
      href,
      ...linkRest
    } = props;
    const classes = cn("msp-btn", variantClass[variant], sizeClass[size], className);
    return (
      <Link href={href} className={classes} {...linkRest}>
        {content(leftIcon, children, rightIcon)}
      </Link>
    );
  }

  const {
    variant = "primary",
    size = "md",
    leftIcon,
    rightIcon,
    className,
    children,
    ...buttonRest
  } = props;
  const classes = cn("msp-btn", variantClass[variant], sizeClass[size], className);
  return (
    <button className={classes} {...buttonRest}>
      {content(leftIcon, children, rightIcon)}
    </button>
  );
}
