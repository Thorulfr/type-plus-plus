import { useQuery } from '@apollo/client'
import { QUERY_ME } from '../../utils/queries'
import { formatTime } from '../../utils/helpers'
import { v4 as uuid } from 'uuid';

const Highscore = () => {
    const { loading, data } = useQuery(QUERY_ME)

    if (loading) {
        return <p>Loading...</p>
    }

    let newArr = []

    if (data.meScores.length > 3) {
        newArr = data.meScores.splice(0,3)
    } else if (data.meScores.length > 0) {
        newArr = [...data.meScores]
    } 

    console.log(newArr)

    return (
        <section>
            <div>
                <h3 className="text-center">Your Highest Scores</h3>
            </div>
            <div>
                    <ol>
                        {newArr.map(score => (
                            <li className="text-center mt-1" key={uuid()}>{score.wpm} WPM on {formatTime(score.createdAt)}</li>
                        ))}
                    </ol>
            </div>
        </section>
    )
}

export default Highscore