import { useEffect, useRef } from "react"
import { observeReveal } from "../hooks/useReveal"

/**
 * Scroll-reveal wrapper. Pairs with the `.reveal` / `.is-visible` rules in
 * index.css: each instance registers itself with the shared IntersectionObserver
 * on mount, so dynamically rendered content (a filtered project list) reveals
 * exactly like the static sections.
 */
export default function Reveal({
  as: Tag = "div",
  delay = 0,
  variant = "",
  className = "",
  children,
  ...rest
}) {
  const ref = useRef(null)

  useEffect(() => observeReveal(ref.current), [])

  const classes = ["reveal", variant, className].filter(Boolean).join(" ")

  return (
    <Tag
      ref={ref}
      className={classes}
      style={delay ? { transitionDelay: `${delay * 0.1}s` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  )
}
