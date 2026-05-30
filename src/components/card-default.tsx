interface CardDefaultProps {
  children: React.ReactNode
}

const CardDefault = ({ children }: CardDefaultProps) => {
  return <div className="bg-[#161618]">{children}</div>
}

export default CardDefault
