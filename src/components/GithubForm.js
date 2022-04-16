import { useState, useEffect, useRef } from 'react'
import { useUserContext } from '../context/user-context'

export default function GithubForm({ setTab }) {

    const [input, setInput] = useState('')
    const [error, setError] = useState(null)
    const { dispatch } = useUserContext()
    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    const handleNext = (e) => {
        e.preventDefault()
        setError(null)

        if (input === '') {
            setError('this field cannot be empty')
            return
        }
        
        dispatch({ type: 'SET_GITHUB', payload: input })
        setTab('twitter')
    }

    return (
        <form onSubmit={handleNext}>                
            <label>
                <span>enter your github profile name to continue:</span>
                <input 
                    type='text'
                    placeholder="github profile"
                    onChange={e => setInput(e.target.value)}
                    value={input}
                    ref={inputRef}
                />
            </label>            
            <button>next</button>
            {error && <p>{error}</p>}
        </form>
    )    
}