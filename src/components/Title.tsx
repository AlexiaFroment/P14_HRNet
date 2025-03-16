type TitleProps = {
  text: string
  level?: 1 | 2 | 3 | 4 | 5 | 6
  align?: "left" | "center" | "right"
  className?: string
}
export const Title: React.FC<TitleProps> = ({
  text,
  level = 1,
  align = "center",
  className = "",
}) => {
  const HeadingTag: React.ElementType = `h${level}` as React.ElementType

  return (
    <HeadingTag className={`text-${align} ${className}`}>{text}</HeadingTag>
  )
}
