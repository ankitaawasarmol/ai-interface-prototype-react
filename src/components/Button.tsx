import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

type Props = HTMLMotionProps<"button"> & {
  variant?: "primary" | "secondary" | "ghost";
};

export const Button: React.FC<Props> = ({
  variant = "primary",
  className = "",
  ...props
}) => {
  const base =
    "rounded-2xl px-4 py-2 font-medium focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-900";
  const styles = {
    primary: "bg-brand-600 text-white hover:bg-brand-700 shadow-soft",
    secondary:
      "bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-900 dark:text-zinc-100",
    ghost: "bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-800",
  }[variant];

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${base} ${styles} ${className}`}
      {...props}
    />
  );
};
