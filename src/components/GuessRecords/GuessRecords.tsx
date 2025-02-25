import {GuessRecord} from "components/Game";

interface GuessRecordsProps {
    guessRecords: GuessRecord[]
}

function GuessRecords({guessRecords}: GuessRecordsProps) {
   return ( <div className="guess-results">
        {guessRecords.map(({guess, id}) => <p key={id} className="guess">{guess}</p>)}
    </div>)

}

export default GuessRecords;