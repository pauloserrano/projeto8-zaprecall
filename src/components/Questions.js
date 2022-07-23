import Question from "./Question"

const Questions = ({ deck, setDisplayIcons }) => {
  return (
    <ol>
        {deck.map(({ question, answer }, id) => (
            <Question 
                key={id}
                question={question} 
                answer={answer}
                setDisplayIcons={setDisplayIcons}
            />
        ))}
    </ol>
  )
}

export default Questions