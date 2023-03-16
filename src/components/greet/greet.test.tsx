import { render, screen } from "@testing-library/react"
import { Greet } from "./greet"

test('Should render without errors', ()=>{
    render(<Greet/>)
    const el = screen.getByText('Hello')
    expect(el).toBeInTheDocument()
})

test('Should display hello together with a name', ()=>{
    render(<Greet name="Bash" />)
    const el = screen.getByText('Hello Bash')
    expect(el).toBeInTheDocument()
})