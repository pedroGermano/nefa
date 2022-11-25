export default function SecondaryButton({ children, onClick, ...props}){
  return(
    <button 
      className="
         border 
        border-primary 
        text-primary 
        hover:bg-primary 
        transition-colors 
        duration-300 
        hover:text-white rounded-full py-4 px-10 mx-2" 
      {...props}
      onClick={onClick}
    >
      {children} 
    </button>
  )
}