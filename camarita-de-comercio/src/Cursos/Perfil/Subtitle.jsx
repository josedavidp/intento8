function Subtitle({styleClass, children}){
    return(
        <div className={`text-xl font-semibold text-yellow ${styleClass}`}>{children}</div>
    )
}

export default Subtitle