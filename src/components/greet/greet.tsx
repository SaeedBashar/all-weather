
type GreetProps = {
    name ?: string
}

export const Greet = (prop : GreetProps)=>{
    return (
        <div>Hello {prop.name}</div>
    )
}