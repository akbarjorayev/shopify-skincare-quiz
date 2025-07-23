import './Button.css'

export default function Button({ className, children, ...props }) {
  return (
    <>
      <button className={`button ${className}`} {...props}>
        {children}
      </button>
    </>
  )
}
