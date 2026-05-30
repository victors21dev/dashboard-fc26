interface CardDefaultProps {
  children: React.ReactNode
}

const CardDefault = ({ children }: CardDefaultProps) => {
  return <div className="z-100 rounded-2xl bg-[#161618] p-4">{children}</div>
}

export default CardDefault
