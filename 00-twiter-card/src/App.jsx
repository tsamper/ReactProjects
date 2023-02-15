import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    return (
        <div className='App'> 
        <TwitterFollowCard userName="midudev" initialIsFollowing={true}>
            Tomas Samper Gutierrez
        </TwitterFollowCard>
        <TwitterFollowCard userName="pheralb">
            Miguel Angel Duran
        </TwitterFollowCard>
       </div>

    )
}