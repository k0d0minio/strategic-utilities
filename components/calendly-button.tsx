"use client";

import { Button, ButtonProps } from "@/components/ui/button";
import { Calendar } from "lucide-react";

interface CalendlyButtonProps extends Omit<ButtonProps, "onClick"> {
  children?: React.ReactNode;
  text?: string;
  calendlyUrl?: string;
}

export function CalendlyButton({
  children,
  text = "Book a Meeting",
  calendlyUrl,
  ...props
}: CalendlyButtonProps) {
  const url =
    calendlyUrl ||
    process.env.NEXT_PUBLIC_CALENDLY_LINK ||
    "https://calendly.com/jamie-nisbet/30min";

  const handleClick = () => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Button onClick={handleClick} {...props}>
      <Calendar className="h-4 w-4 mr-2" />
      {children || text}
    </Button>
  );
}
