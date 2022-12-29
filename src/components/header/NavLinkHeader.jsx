export default ({text}) => {
    return <a href="#" className="py-8 relative group">
        <span className="group-hover:text-orange-primary">{text}</span>
        <span className="absolute block bottom-0 w-full h-2 group-hover:bg-orange-primary scale-x-0 group-hover:scale-x-100 transition-all duration-700 "></span>
    </a>
}